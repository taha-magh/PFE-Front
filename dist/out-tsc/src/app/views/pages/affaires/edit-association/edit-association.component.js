import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder } from '@angular/forms';
import { AssociationService } from '../../utils/association.service';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from '../../utils/spinner.service';
var EditAssociationComponent = /** @class */ (function () {
    function EditAssociationComponent(service, router, route, fb, location, translate, spinnerService) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.location = location;
        this.translate = translate;
        this.spinnerService = spinnerService;
        this.loading = false;
        this.submitted = false;
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
    }
    EditAssociationComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById("autreAnnxe").style.display = "none";
        document.getElementById("autreSpecialite").style.display = "none";
        var spinnerRef = this.spinnerService.start(this.translate.instant("PAGES.GENERAL.LOADING")); // start spinner
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/association/showBy/", this.id)
            .pipe(finalize(function () {
            _this.spinnerService.stop(spinnerRef); // stop spinner
        }))
            .subscribe(function (data) {
            console.log('Fetch data  : ' + JSON.stringify(data, null, 2));
            //this.addForm.patchValue(data);
            if (data) {
                _this.addForm.controls['id'].patchValue(data.id);
                _this.addForm.controls['isInterest'].patchValue(data.isInterest);
                _this.addForm.controls['nom'].patchValue(data.nom);
                _this.addForm.controls['dateCreation'].patchValue(data.dateCreation);
                _this.addForm.controls['objectifs'].patchValue(data.objectifs);
                _this.addForm.controls['nomPresident'].patchValue(data.nomPresident);
                _this.addForm.controls['periodiciteBureau'].patchValue(data.periodiciteBureau);
                _this.addForm.controls['observations'].patchValue(data.observations);
                // this.addForm.controls['champActivite'].patchValue(data.champActivite);
                _this.addForm.controls['adresseLocal'].patchValue(data.adresseLocal);
                _this.addForm.controls['email'].patchValue(data.email);
                _this.addForm.controls['fax'].patchValue(data.fax);
                _this.addForm.controls['agenceBanquaire'].patchValue(data.agenceBanquaire);
                _this.addForm.controls['numeroCompte'].patchValue(data.numeroCompte);
                _this.addForm.controls['numDepot'].patchValue(data.numDepot);
                _this.addForm.controls['natureFicheDepot'].patchValue(data.natureFicheDepot);
                _this.addForm.controls['autreAnnexe'].patchValue(data.autreAnnexe);
                _this.addForm.controls['natureFicheDepot'].patchValue(data.natureFicheDepot);
                _this.addForm.controls['nbrMembreBureau'].patchValue(data.nbrMembreBureau);
                _this.addForm.controls['nbrHomme'].patchValue(data.nbrHomme);
                _this.addForm.controls['nbrFemme'].patchValue(data.nbrFemme);
                if (data.villeActivite != null) {
                    _this.addForm.controls['villeActivite'].patchValue(data.villeActivite);
                }
                if (data.communeActivite != 0) {
                    _this.addForm.controls['communeActivite'].patchValue(data.communeActivite);
                }
                else {
                    _this.addForm.get('communeActivite').disable();
                }
                if (data.statutAssociation != null) {
                    _this.addForm.controls['statutAssociation'].patchValue(data.statutAssociation);
                }
                if (data.typeActiviteAssociation != null) {
                    _this.addForm.controls['typeActiviteAssociation'].patchValue(data.typeActiviteAssociation);
                }
                if (data.annexeAdministratif != null) {
                    if (data.annexeAdministratif != 31)
                        document.getElementById("autreAnnxe").style.display = "none";
                    _this.addForm.controls['annexeAdministratif'].patchValue(data.annexeAdministratif);
                }
                else {
                    _this.addForm.get('annexeAdministratif').disable();
                }
                if (data.payeAssociation != null)
                    _this.addForm.controls['payeAssociation'].patchValue(data.payeAssociation);
                if (data.valorisation != null)
                    _this.addForm.controls['valorisation'].patchValue(data.valorisation);
                if (data.classement != null)
                    _this.addForm.controls['classement'].patchValue(data.classement);
                if (data.typeActiviteAssociation != null)
                    _this.addForm.controls['typeActiviteAssociation'].patchValue(data.typeActiviteAssociation);
                if (data.autreType != null)
                    _this.addForm.controls['autreType'].patchValue(data.autreType);
                // Association dates
                if (data.datePvChangementBureau != null)
                    _this.addForm.controls['datePvChangementBureau'].patchValue(new Date(data.datePvChangementBureau).toISOString());
                if (data.dateCreation != null)
                    _this.addForm.controls['dateCreation'].patchValue(new Date(data.dateCreation).toISOString());
                // Fiche de depot dates
                if (data.dateFicheDepot != null)
                    _this.addForm.controls['dateFicheDepot'].patchValue(new Date(data.dateFicheDepot).toISOString());
            }
        });
    };
    EditAssociationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-association',
            templateUrl: './edit-association.component.html',
            styleUrls: ['./edit-association.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            FormBuilder,
            Location,
            TranslateService,
            SpinnerService])
    ], EditAssociationComponent);
    return EditAssociationComponent;
}());
export { EditAssociationComponent };
//# sourceMappingURL=edit-association.component.js.map