import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssociationService } from '../../utils/association.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first, finalize } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from '../../utils/spinner.service';

interface pays {
	id: number;
	libelle: string;
}


interface classements {
	libelle: string;
}

@Component({
	selector: 'kt-edit-association',
	templateUrl: './edit-association.component.html',
	styleUrls: ['./edit-association.component.scss']
})
export class EditAssociationComponent implements OnInit {

	// ============================================
	// Declarations
	// ============================================
	id: any;
	loading = false;
	submitted = false;
	addForm: FormGroup;
	addFileForm1: FormGroup;
	addFileForm2: FormGroup;
	addFileForm3: FormGroup;
	addFileForm4: FormGroup;
	addFileForm5: FormGroup;
	public uploadFiles1: Array<File>;
	public uploadFiles2: Array<File>;
	public uploadFiles3: Array<File>;
	public uploadFiles4: Array<File>;
	public uploadFiles5: Array<File>;
	// Listes
	arrondissements: any;
	statuts: any;
	typeActivites: any;
	villes: any;
	annexesAdmin: any;
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
		{ libelle: "G" },
		{ libelle: "H" },
		{ libelle: "I" },
		{ libelle: "J" },
		{ libelle: "K" },
		{ libelle: "L" },
		{ libelle: "M" },
		{ libelle: "N" },
		{ libelle: "O" },
		{ libelle: "P" },
		{ libelle: "Q" },
		{ libelle: "R" },
		{ libelle: "S" },
		{ libelle: "T" },
		{ libelle: "U" },
		{ libelle: "V" },
		{ libelle: "W" },
		{ libelle: "X" },
		{ libelle: "Y" },
		{ libelle: "Z" },
	];

	constructor(
		private service: AssociationService,
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private location: Location,
		private translate: TranslateService,
		private spinnerService: SpinnerService,
	) {
	
	}

	ngOnInit() {
		document.getElementById("autreAnnxe").style.display = "none";
		document.getElementById("autreSpecialite").style.display = "none";
		
		var spinnerRef = this.spinnerService.start(this.translate.instant("PAGES.GENERAL.LOADING")); // start spinner
		this.id = this.route.snapshot.params["id"];
		this.service
			.getObjectById("/association/showBy/", this.id)
			.pipe(finalize(() => {
				this.spinnerService.stop(spinnerRef);// stop spinner
			}))
			.subscribe((data) => {
				console.log('Fetch data  : ' + JSON.stringify(data, null, 2))
				//this.addForm.patchValue(data);
				if (data) {
					this.addForm.controls['id'].patchValue(data.id);
					this.addForm.controls['isInterest'].patchValue(data.isInterest);
					this.addForm.controls['nom'].patchValue(data.nom);
					this.addForm.controls['dateCreation'].patchValue(data.dateCreation);
					this.addForm.controls['objectifs'].patchValue(data.objectifs);
					this.addForm.controls['nomPresident'].patchValue(data.nomPresident);
					this.addForm.controls['periodiciteBureau'].patchValue(data.periodiciteBureau);
					this.addForm.controls['observations'].patchValue(data.observations);
					// this.addForm.controls['champActivite'].patchValue(data.champActivite);
					this.addForm.controls['adresseLocal'].patchValue(data.adresseLocal);
					this.addForm.controls['email'].patchValue(data.email);
					this.addForm.controls['fax'].patchValue(data.fax);
					this.addForm.controls['agenceBanquaire'].patchValue(data.agenceBanquaire);
					this.addForm.controls['numeroCompte'].patchValue(data.numeroCompte);
					this.addForm.controls['numDepot'].patchValue(data.numDepot);
					this.addForm.controls['natureFicheDepot'].patchValue(data.natureFicheDepot);
					this.addForm.controls['autreAnnexe'].patchValue(data.autreAnnexe);
					this.addForm.controls['natureFicheDepot'].patchValue(data.natureFicheDepot);
					this.addForm.controls['nbrMembreBureau'].patchValue(data.nbrMembreBureau);
					this.addForm.controls['nbrHomme'].patchValue(data.nbrHomme);
					this.addForm.controls['nbrFemme'].patchValue(data.nbrFemme);


					if (data.villeActivite != null) {
						this.addForm.controls['villeActivite'].patchValue(data.villeActivite);
					}

					if (data.communeActivite != 0) {
						this.addForm.controls['communeActivite'].patchValue(data.communeActivite);
					} else {
						this.addForm.get('communeActivite').disable();
					}

					if (data.statutAssociation != null) {
						this.addForm.controls['statutAssociation'].patchValue(data.statutAssociation);
					}

					if (data.typeActiviteAssociation != null) {
						this.addForm.controls['typeActiviteAssociation'].patchValue(data.typeActiviteAssociation);
					}
					if (data.annexeAdministratif != null) {
						if (data.annexeAdministratif != 31)
							document.getElementById("autreAnnxe").style.display = "none";
						this.addForm.controls['annexeAdministratif'].patchValue(data.annexeAdministratif);

					} else {
						this.addForm.get('annexeAdministratif').disable();
					}

					if (data.payeAssociation != null)
						this.addForm.controls['payeAssociation'].patchValue(data.payeAssociation);
					if (data.valorisation != null)
						this.addForm.controls['valorisation'].patchValue(data.valorisation);
					if (data.classement != null)
						this.addForm.controls['classement'].patchValue(data.classement);
					if (data.typeActiviteAssociation != null)
						this.addForm.controls['typeActiviteAssociation'].patchValue(data.typeActiviteAssociation);
					if (data.autreType != null)
						this.addForm.controls['autreType'].patchValue(data.autreType);

					// Association dates
					if (data.datePvChangementBureau != null)
						this.addForm.controls['datePvChangementBureau'].patchValue(new Date(data.datePvChangementBureau).toISOString());
					if (data.dateCreation != null)
						this.addForm.controls['dateCreation'].patchValue(new Date(data.dateCreation).toISOString());
					// Fiche de depot dates
					if (data.dateFicheDepot != null)
						this.addForm.controls['dateFicheDepot'].patchValue(new Date(data.dateFicheDepot).toISOString());
				}

			});



		

	

}
}
