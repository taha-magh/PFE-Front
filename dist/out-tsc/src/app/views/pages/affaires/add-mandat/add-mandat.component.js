import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AssociationService } from "../../utils/association.service";
import { Location } from "@angular/common";
import { TranslateService } from '@ngx-translate/core';
var AddMandatComponent = /** @class */ (function () {
    function AddMandatComponent(service, router, route, fb, location, translate) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.location = location;
        this.translate = translate;
        // ============================================
        // Declarations
        // ============================================
        this.loading = false;
        this.submitted = false;
        this.serviceConcerne = [
            { libelle: "Service A " },
            { libelle: "Service B" },
            { libelle: "Service C" },
            { libelle: "Service D" },
            { libelle: "Service E" },
            { libelle: "Service F" },
        ];
        this.formBuilder();
    }
    AddMandatComponent.prototype.ngOnInit = function () { };
    // ============================================
    // OnSubmit
    // ============================================
    AddMandatComponent.prototype.onSubmit = function () {
        this.loading = true;
        this.addAssociation();
    };
    // ============================================
    // Ajouter une association
    // ============================================
    AddMandatComponent.prototype.addAssociation = function () {
        var _this = this;
        console.log(JSON.stringify(this.addForm.value));
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.service
            .createObject("/mandatBureau/new", this.addForm.value)
            .subscribe(function (data) {
            _this.location.back();
        }, function (error) {
            alert(error);
        });
    };
    // ============================================
    // Charger les elements du fourmulaire
    // ============================================
    AddMandatComponent.prototype.formBuilder = function () {
        var id = this.route.snapshot.params["id"];
        this.addForm = this.fb.group({
            mandat: [""],
            dateDebut: [""],
            dateFin: [""],
            dureeMandat: [],
            dateRenouvelementBureau: [""],
            derniereAssembleeGene: [""],
            totalMembre: [0],
            totalMMembre: [0],
            totalFMembre: [0],
            president: [""],
            visePresident: [""],
            association: this.fb.group({
                id: [id],
            })
        });
    };
    // ============================================
    // OnReset
    // ============================================
    AddMandatComponent.prototype.onReset = function () {
        this.submitted = false;
        this.addForm.reset();
    };
    // ============================================
    // back to list
    // ============================================
    AddMandatComponent.prototype.back = function () {
        var id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/show-association/" + id]);
    };
    // ============================================
    // Date debut change
    // ============================================
    AddMandatComponent.prototype.dateDemarrageChangeFin = function () {
        var dateDp = this.addForm.controls['derniereAssembleeGene'].value;
        var tmp = new Date(dateDp);
        var mois = Number(dateDp.getMonth());
        var duree = Number(this.addForm.controls['dureeMandat'].value);
        var num = mois + duree;
        tmp.setMonth(num);
        this.addForm.controls['dateFin'].setValue(tmp);
    };
    /*	dateDemarrageChangeDebut() {
            //this.addForm.get("dateFin").reset();
            //this.addForm.controls['dureeMandat'].reset();
            let dateFp = this.addForm.controls['dateFin'].value
            let dateDp = this.addForm.controls['dateDebut'].value
            if (dateFp && dateDp) {
                if (dateFp >= dateDp) {
                    let diffc = dateFp.getTime() - dateDp.getTime();
                    let duree = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
                    this.addForm.controls['dureeMandat'].setValue(duree)
                } else {
                    this.addForm.get("dateFin").reset();
                    this.addForm.controls['dureeMandat'].reset();
                }
            }
        }*/
    // ============================================
    // Date fin change
    // ============================================
    /*dateDemarrageChangeFin() {
        let dateFp = this.addForm.controls['dateFin'].value
        let dateDp = this.addForm.controls['dateDebut'].value
        if (dateFp && dateDp) {
            if (dateFp >= dateDp) {
                let diffc = dateFp.getTime() - dateDp.getTime();
                let duree = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
                this.addForm.controls['dureeMandat'].setValue(duree)
            } else {
                this.addForm.get("dateFin").reset();
                this.addForm.controls['dureeMandat'].reset();
            }
        }
    }*/
    /** ================================================
 * Checking control validation
 *
 * @param controlName: string => Equals to formControlName
 * @param validationType: string => Equals to valitors name
 */
    AddMandatComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.addForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    AddMandatComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-mandat",
            templateUrl: "./add-mandat.component.html",
            styleUrls: ["./add-mandat.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            FormBuilder,
            Location,
            TranslateService])
    ], AddMandatComponent);
    return AddMandatComponent;
}());
export { AddMandatComponent };
//# sourceMappingURL=add-mandat.component.js.map