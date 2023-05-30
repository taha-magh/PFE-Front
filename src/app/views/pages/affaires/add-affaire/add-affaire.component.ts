import { Component, OnInit, Inject, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Location } from "@angular/common";
import { AssociationService } from "../../utils/association.service";
import { FilesUtilsService } from '../../utils/files-utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material';
import KTWizard from '../../../../../assets/js/global/components/base/wizard.js';

// @ViewChild('wizard', { static: true }) el: ElementRef;

interface villes {
	id: number
	libelle: string;
}
interface pays {
	id: number;
	libelle: string;
}

interface classements {
	libelle: string;
}

interface typeAffaires {
	libelle: string;
}


@Component({
	selector: "kt-add-affaire",
	templateUrl: "./add-affaire.component.html",
	styleUrls: ["./add-affaire.component.scss"],
})
export class AddAffaireComponent implements OnInit {
	// ============================================
	// Declarations
	// ============================================

	wizard: any;
	loading = false;
	submitted = false;
	addForm: FormGroup;
	addFileForm: FormGroup;
	public uploadFiles: Array<File>;
	// Listes
	arrondissements: any;
	statuts: any;
	typeActivites: any;
	villes: any;
	annexesAdmin: any;
	natureSlected: string = "مؤقت"
	// Liste des payes
	pays: pays[] = [
		{ id: 1, libelle: "المغرب" },
		{ id: 2, libelle: "بلد آخر" },
	];
	// Liste des classements
	classements: classements[] = [
		{ libelle: "A" },
		{ libelle: "B" },
		{ libelle: "C" },
		{ libelle: "D" },
		{ libelle: "E" },
		{ libelle: "F" },

	];

	typeAffaires: typeAffaires[] = [
		{ libelle: "Indémnisation" },
		{ libelle: "Annulation" },
		{ libelle: "Administratif" },
		//{libelle: " Référé" },
		{ libelle: "..." }

	];
	myFilter = (d: Date | null): boolean => {
		const day = (d || new Date()).getDay();
		// Prevent Saturday and Sunday from being selected.
		return day !== 0 && day !== 6;
	}


	affaireSteps: any[] = [
		{ title: 'Nature de l affaire', desc: "les informations de la demande", svg: "./assets/media/svg/downloads/icons8-info.svg" },
		{ title: 'Autre informations', desc: "catégories du permis de conduire", svg: "./assets/media/svg/downloads/categorie.svg" },
	];

	constructor(
		private service: AssociationService,
		private router: Router,
		private fb: FormBuilder,
		private location: Location,
		private filesUtil: FilesUtilsService,
		private translate: TranslateService,
		private dateAdapter: DateAdapter<Date>
	) {
		this.dateAdapter.setLocale('fr');
		this.getData();
		this.formBuilder();
		this.wizard = new KTWizard(2, {
			startStep: 1,
			clickableSteps: true
		});
	}

	ngOnInit() {
		this.fileBuilder();
		document.getElementById("autreAnnxe").style.display = "none";
		document.getElementById("autreSpecialite").style.display = "none";
		this.filesUtil.fileSizeDetector();
	}

	alert(): void {
		alert("Test")
	}
	// ============================================
	// OnSubmit
	// ============================================
	onSubmit() {
		const controls = this.addForm.controls;
		/** check form */
		if (this.addForm.invalid) {
			Object.keys(controls).forEach((controlName) =>
				controls[controlName].markAsTouched()
			);
			return;
		}
		//console.log("Result assoc!! " + this.addForm.get('communeActivite').value)
		this.addAssociation();
	}
	// ============================================
	// Ajouter une association
	// ============================================
	addAssociation() {
		console.log(JSON.stringify(this.addForm.value));
		this.submitted = true;
		if (this.addForm.invalid) {
			return;
		}
		this.loading = true;
		//this.addForm.get('communeActivite').setValue(this.addForm.get('communeActivite.id'))
		this.service.createObject("/association/new", this.addForm.value).subscribe(
			(data) => {
				this.loading = false;
				window.localStorage.removeItem("associationId");
				window.localStorage.setItem("associationId", data.toString());

				// upload files to alfresco GED
				//console.log("ID DE COURRIER -data: " +JSON.stringify(data) +	" OU BIEN -data.id: " +data);
				if (this.uploadFiles)
					this.service.updloadFile(this.uploadFiles, data).subscribe(
						(res) =>
							console.log("File inserted " + JSON.stringify(res)),
						(err) =>
							console.log("File not inserted " + JSON.stringify(err))
					);
				this.router.navigate(["associations/list-association"]);

			},
			(error) => {
				alert(error);
				this.loading = false;
			}
		);
	}
	// ============================================
	// Charger les elements du fourmulaire
	// ============================================
	formBuilder() {
		this.addForm = this.fb.group({
			prioriter: [""],
			nom: ["", Validators.required],
			communeActivite: [""], // Arrondissement
			dateCreation: [""],
			objectifs: [""],
			villeActivite: [""],
			nomPresident: [""],
			periodiciteBureau: [""],
			datePvChangementBureau: [""],
			observations: [""],
			statutAssociation: [null], // statutAssociation: [{"id":1}],
			typeActiviteAssociation: [null],// Autres typeActiviteAssociation: [{"id":8}]
			autreType: [null],
			payeAssociation: [null],
			// champActivite: [""],
			adresseLocal: [""],
			email: [""],
			fax: [""],
			specialisation: [""],
			nbrHomme: [""],
			nbrFemme: [""],
			nbrMembreBureau: [""],
			agenceBanquaire: [""],
			numeroCompte: [""],
			valorisation: [null],
			classement: [null],
			// **** information du fiche de dépot ****
			numDepot: [""],
			natureFicheDepot: [""],
			annexeAdministratif: [null],
			autreAnnexe: [""],
			dateFicheDepot: [""],
			isInterest: [null],
			createurUser: [window.localStorage.getItem("fullnameUser")],
		});
		// desable field
		this.addForm.get('villeActivite').disable();
		this.addForm.get('communeActivite').disable();
		this.addForm.get('annexeAdministratif').disable();
	}
	// ============================================
	// Files upload
	// ============================================
	fileBuilder() {
		this.addFileForm = this.fb.group({
			_file: [],
		});
	}
	// ============================================
	// Charger les liste externe
	// ============================================
	getData() {/*
		this.service.getData().subscribe(
			(data) => {
				this.statuts = data[0];
				this.typeActivites = data[1];
				this.villes = data[2];
				//this.annexesAdmin = data[3];
				console.log(data[1]);
			},
			(err) => {
				console.log(err);
			}
		);

*/
	}
	// ============================================
	// paysChanged events
	// ============================================
	paysChanged() {
		let pays = this.addForm.get('payeAssociation').value;
		console.log("*** " + pays)

		if (pays != null && pays == "المغرب") {
			this.addForm.get('villeActivite').enable();
		} else if (pays != null && pays == "بلد آخر") {
			this.addForm.get('villeActivite').disable();
			this.addForm.get('villeActivite').reset();
			this.addForm.get('communeActivite').disable();
			this.addForm.get('communeActivite').reset();
			this.addForm.get('annexeAdministratif').disable();
			this.addForm.get('annexeAdministratif').reset();
			this.addForm.get('autreAnnexe').reset();
		} else {
			this.addForm.get('villeActivite').disable();
			this.addForm.get('villeActivite').reset();
			this.addForm.get('communeActivite').disable();
			this.addForm.get('communeActivite').reset();
			this.addForm.get('annexeAdministratif').disable();
			this.addForm.get('annexeAdministratif').reset();
			this.addForm.get('autreAnnexe').reset();
		}
	}
	// ============================================
	// annexeChanged events
	// ============================================
	annexeChanged() {
		let annexeAdm = this.addForm.get('annexeAdministratif').value;
		if (annexeAdm != null) {
			if (annexeAdm == 31) {
				document.getElementById("autreAnnxe").style.display = "inline";
				this.addForm.get("autreAnnexe").setValue(null);
			} else {
				document.getElementById("autreAnnxe").style.display = "none";
				this.addForm.get("autreAnnexe").setValue(null);
			}
		}
	}
	// ============================================
	// type changed events
	// ============================================
	typeChanged() {
		let type = this.addForm.get('typeActiviteAssociation').value;
		if (type != null) {
			if (type.libelle == "آخر") {
				document.getElementById("autreSpecialite").style.display = "inline";
				this.addForm.get("autreType").setValue(null);
			} else {
				document.getElementById("autreSpecialite").style.display = "none";
				this.addForm.get("autreType").setValue(null);
			}
		}
	}
	// ============================================
	// villeChanged events
	// ============================================
	villeChanged(event: any) {
		let ville = this.addForm.get('villeActivite').value;
		console.log(event);
		document.getElementById("autreAnnxe").style.display = "none";
		if (event.value.codeVille == "marr") {
			this.addForm.get('communeActivite').enable();
			this.addForm.get('communeActivite').reset();
			this.addForm.get('annexeAdministratif').enable();
			this.addForm.get('annexeAdministratif').reset();
			this.addForm.get('autreAnnexe').reset();
			//this.addForm.get("communeActivite").setValidators(Validators.required); 
			//this.addForm.get("annexeAdministratif").setValidators(Validators.required);
		} else {
			this.addForm.get('communeActivite').disable();
			this.addForm.get('communeActivite').reset();
			this.addForm.get('annexeAdministratif').disable();
			this.addForm.get('annexeAdministratif').reset();
			this.addForm.get('autreAnnexe').reset();
			//this.addForm.get("communeActivite").setValidators(null);
			//this.addForm.get("annexeAdministratif").setValidators(null);
		}
		//this.addForm.get('communeActivite').updateValueAndValidity();
		//this.addForm.get('annexeAdministratif').updateValueAndValidity();
	}
	// ============================================
	// ArrondissementChanged events
	// ============================================

	// ============================================
	// OnReset
	// ============================================
	onReset() {
		this.submitted = false;
		this.addForm.reset();
		this.addFileForm.reset();
	}
	// =====================================
	// back to list
	// =====================================
	back() {
		this.router.navigate(["pages/affaires/list-affaire"]);
	}
	// ============================================================
	// Upload files
	// ============================================================
	fileChange(event) {
		this.uploadFiles = event.target.files;
		if (event.target.files.length > 0) {
			console.log("file size !! " + event.target.files.length);
			this.addFileForm.patchValue(this.uploadFiles);
		}
	}
	// ============================================================
	// field validation
	// ============================================================
	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.addForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result =
			control.hasError(validationType) &&
			(control.dirty || control.touched);
		return result;
	}
}
