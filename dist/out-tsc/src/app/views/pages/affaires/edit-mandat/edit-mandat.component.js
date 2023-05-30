import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, Validators } from '@angular/forms';
import { AssociationService } from '../../utils/association.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
var EditMandatComponent = /** @class */ (function () {
    function EditMandatComponent(service, router, route, fb, location, translate) {
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
        this.formBuilder();
    }
    EditMandatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/mandatBureau/show/", this.id)
            .subscribe(function (data) {
            _this.addForm.patchValue(data);
            _this.addForm.controls['dateDebut'].patchValue(new Date(data.dateDebut).toISOString());
            _this.addForm.controls['dateFin'].patchValue(new Date(data.dateFin).toISOString());
            _this.addForm.controls['dateRenouvelementBureau'].patchValue(new Date(data.dateRenouvelementBureau).toISOString());
            _this.addForm.controls['derniereAssembleeGene'].patchValue(new Date(data.derniereAssembleeGene).toISOString());
        });
    };
    // ============================================
    // OnSubmit
    // ============================================
    EditMandatComponent.prototype.onSubmit = function () {
        this.loading = true;
        this.addAssociation();
    };
    // ============================================
    // Ajouter une association
    // ============================================
    EditMandatComponent.prototype.addAssociation = function () {
        var _this = this;
        console.log(JSON.stringify(this.addForm.value));
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.service
            .createObject("/mandatBureau/new", this.addForm.value)
            .pipe(first())
            .subscribe(function (data) {
            _this.location.back();
        }, function (error) {
            alert(error);
        });
    };
    // ============================================
    // Charger les elements du fourmulaire
    // ============================================
    EditMandatComponent.prototype.formBuilder = function () {
        var id = this.route.snapshot.params["id"];
        this.addForm = this.fb.group({
            id: [],
            mandat: ["", Validators.required],
            dateDebut: ["", Validators.required],
            dateFin: ["", Validators.required],
            dureeMandat: [0, Validators.required],
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
    EditMandatComponent.prototype.onReset = function () {
        this.submitted = false;
        this.addForm.reset();
    };
    // =====================================
    // back to list
    // =====================================
    EditMandatComponent.prototype.back = function () {
        this.location.back();
    };
    // ============================================
    // Date debut change
    // ============================================
    EditMandatComponent.prototype.dateDemarrageChangeDebut = function () {
        //this.addForm.get("dateFin").reset();
        //this.addForm.controls['dureeMandat'].reset();
        var dateFp = this.addForm.controls['dateFin'].value;
        var dateDp = this.addForm.controls['dateDebut'].value;
        if (dateFp && dateDp) {
            if (dateFp >= dateDp) {
                var diffc = dateFp.getTime() - dateDp.getTime();
                var duree = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
                this.addForm.controls['dureeMandat'].setValue(duree);
            }
            else {
                this.addForm.get("dateFin").reset();
                this.addForm.controls['dureeMandat'].reset();
            }
        }
    };
    // ============================================
    // Date fin change
    // ============================================
    EditMandatComponent.prototype.dateDemarrageChangeFin = function () {
        var dateFp = this.addForm.controls['dateFin'].value;
        var dateDp = this.addForm.controls['dateDebut'].value;
        if (dateFp && dateDp) {
            if (dateFp >= dateDp) {
                var diffc = dateFp.getTime() - dateDp.getTime();
                var duree = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
                this.addForm.controls['dureeMandat'].setValue(duree);
            }
            else {
                this.addForm.get("dateFin").reset();
                this.addForm.controls['dureeMandat'].reset();
            }
        }
    };
    /** ================================================
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    EditMandatComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.addForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    EditMandatComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-mandat',
            templateUrl: './edit-mandat.component.html',
            styleUrls: ['./edit-mandat.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            FormBuilder,
            Location,
            TranslateService])
    ], EditMandatComponent);
    return EditMandatComponent;
}());
export { EditMandatComponent };
//# sourceMappingURL=edit-mandat.component.js.map