import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { AssociationService } from "../../utils/association.service";
import { FilesUtilsService } from '../../utils/files-utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material';
import KTWizard from '../../../../../assets/js/global/components/base/wizard.js';
var AddAffaireComponent = /** @class */ (function () {
    function AddAffaireComponent(service, router, fb, location, filesUtil, translate, dateAdapter) {
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.location = location;
        this.filesUtil = filesUtil;
        this.translate = translate;
        this.dateAdapter = dateAdapter;
        this.loading = false;
        this.submitted = false;
        this.natureSlected = "مؤقت";
        // Liste des payes
        this.pays = [
            { id: 1, libelle: "المغرب" },
            { id: 2, libelle: "بلد آخر" },
        ];
        // Liste des classements
        this.classements = [
            { libelle: "A" },
            { libelle: "B" },
            { libelle: "C" },
            { libelle: "D" },
            { libelle: "E" },
            { libelle: "F" },
        ];
        this.typeAffaires = [
            { libelle: "Indémnisation" },
            { libelle: "Annulation" },
            { libelle: "Administratif" },
            //{libelle: " Référé" },
            { libelle: "..." }
        ];
        this.myFilter = function (d) {
            var day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
        this.affaireSteps = [
            { title: 'Nature de l affaire', desc: "les informations de la demande", svg: "./assets/media/svg/downloads/icons8-info.svg" },
            { title: 'Autre informations', desc: "catégories du permis de conduire", svg: "./assets/media/svg/downloads/categorie.svg" },
        ];
        this.dateAdapter.setLocale('fr');
        this.getData();
        this.formBuilder();
        this.wizard = new KTWizard(2, {
            startStep: 1,
            clickableSteps: true
        });
    }
    AddAffaireComponent.prototype.ngOnInit = function () {
        this.fileBuilder();
        document.getElementById("autreAnnxe").style.display = "none";
        document.getElementById("autreSpecialite").style.display = "none";
        this.filesUtil.fileSizeDetector();
    };
    AddAffaireComponent.prototype.alert = function () {
        alert("Test");
    };
    // ============================================
    // OnSubmit
    // ============================================
    AddAffaireComponent.prototype.onSubmit = function () {
        var controls = this.addForm.controls;
        /** check form */
        if (this.addForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        //console.log("Result assoc!! " + this.addForm.get('communeActivite').value)
        this.addAssociation();
    };
    // ============================================
    // Ajouter une association
    // ============================================
    AddAffaireComponent.prototype.addAssociation = function () {
        var _this = this;
        console.log(JSON.stringify(this.addForm.value));
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.loading = true;
        //this.addForm.get('communeActivite').setValue(this.addForm.get('communeActivite.id'))
        this.service.createObject("/association/new", this.addForm.value).subscribe(function (data) {
            _this.loading = false;
            window.localStorage.removeItem("associationId");
            window.localStorage.setItem("associationId", data.toString());
            // upload files to alfresco GED
            //console.log("ID DE COURRIER -data: " +JSON.stringify(data) +	" OU BIEN -data.id: " +data);
            if (_this.uploadFiles)
                _this.service.updloadFile(_this.uploadFiles, data).subscribe(function (res) {
                    return console.log("File inserted " + JSON.stringify(res));
                }, function (err) {
                    return console.log("File not inserted " + JSON.stringify(err));
                });
            _this.router.navigate(["associations/list-association"]);
        }, function (error) {
            alert(error);
            _this.loading = false;
        });
    };
    // ============================================
    // Charger les elements du fourmulaire
    // ============================================
    AddAffaireComponent.prototype.formBuilder = function () {
        this.addForm = this.fb.group({
            prioriter: [""],
            nom: ["", Validators.required],
            communeActivite: [""],
            dateCreation: [""],
            objectifs: [""],
            villeActivite: [""],
            nomPresident: [""],
            periodiciteBureau: [""],
            datePvChangementBureau: [""],
            observations: [""],
            statutAssociation: [null],
            typeActiviteAssociation: [null],
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
    };
    // ============================================
    // Files upload
    // ============================================
    AddAffaireComponent.prototype.fileBuilder = function () {
        this.addFileForm = this.fb.group({
            _file: [],
        });
    };
    // ============================================
    // Charger les liste externe
    // ============================================
    AddAffaireComponent.prototype.getData = function () {
    };
    // ============================================
    // paysChanged events
    // ============================================
    AddAffaireComponent.prototype.paysChanged = function () {
        var pays = this.addForm.get('payeAssociation').value;
        console.log("*** " + pays);
        if (pays != null && pays == "المغرب") {
            this.addForm.get('villeActivite').enable();
        }
        else if (pays != null && pays == "بلد آخر") {
            this.addForm.get('villeActivite').disable();
            this.addForm.get('villeActivite').reset();
            this.addForm.get('communeActivite').disable();
            this.addForm.get('communeActivite').reset();
            this.addForm.get('annexeAdministratif').disable();
            this.addForm.get('annexeAdministratif').reset();
            this.addForm.get('autreAnnexe').reset();
        }
        else {
            this.addForm.get('villeActivite').disable();
            this.addForm.get('villeActivite').reset();
            this.addForm.get('communeActivite').disable();
            this.addForm.get('communeActivite').reset();
            this.addForm.get('annexeAdministratif').disable();
            this.addForm.get('annexeAdministratif').reset();
            this.addForm.get('autreAnnexe').reset();
        }
    };
    // ============================================
    // annexeChanged events
    // ============================================
    AddAffaireComponent.prototype.annexeChanged = function () {
        var annexeAdm = this.addForm.get('annexeAdministratif').value;
        if (annexeAdm != null) {
            if (annexeAdm == 31) {
                document.getElementById("autreAnnxe").style.display = "inline";
                this.addForm.get("autreAnnexe").setValue(null);
            }
            else {
                document.getElementById("autreAnnxe").style.display = "none";
                this.addForm.get("autreAnnexe").setValue(null);
            }
        }
    };
    // ============================================
    // type changed events
    // ============================================
    AddAffaireComponent.prototype.typeChanged = function () {
        var type = this.addForm.get('typeActiviteAssociation').value;
        if (type != null) {
            if (type.libelle == "آخر") {
                document.getElementById("autreSpecialite").style.display = "inline";
                this.addForm.get("autreType").setValue(null);
            }
            else {
                document.getElementById("autreSpecialite").style.display = "none";
                this.addForm.get("autreType").setValue(null);
            }
        }
    };
    // ============================================
    // villeChanged events
    // ============================================
    AddAffaireComponent.prototype.villeChanged = function (event) {
        var ville = this.addForm.get('villeActivite').value;
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
        }
        else {
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
    };
    // ============================================
    // ArrondissementChanged events
    // ============================================
    // ============================================
    // OnReset
    // ============================================
    AddAffaireComponent.prototype.onReset = function () {
        this.submitted = false;
        this.addForm.reset();
        this.addFileForm.reset();
    };
    // =====================================
    // back to list
    // =====================================
    AddAffaireComponent.prototype.back = function () {
        this.router.navigate(["pages/affaires/list-affaire"]);
    };
    // ============================================================
    // Upload files
    // ============================================================
    AddAffaireComponent.prototype.fileChange = function (event) {
        this.uploadFiles = event.target.files;
        if (event.target.files.length > 0) {
            console.log("file size !! " + event.target.files.length);
            this.addFileForm.patchValue(this.uploadFiles);
        }
    };
    // ============================================================
    // field validation
    // ============================================================
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    AddAffaireComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.addForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) &&
            (control.dirty || control.touched);
        return result;
    };
    AddAffaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-affaire",
            templateUrl: "./add-affaire.component.html",
            styleUrls: ["./add-affaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            FormBuilder,
            Location,
            FilesUtilsService,
            TranslateService,
            DateAdapter])
    ], AddAffaireComponent);
    return AddAffaireComponent;
}());
export { AddAffaireComponent };
//# sourceMappingURL=add-affaire.component.js.map