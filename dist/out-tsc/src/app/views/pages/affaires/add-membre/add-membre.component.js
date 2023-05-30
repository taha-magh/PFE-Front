import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AssociationService } from '../../utils/association.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";
var AddMembreComponent = /** @class */ (function () {
    function AddMembreComponent(service, router, route, fb, translate, location) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.translate = translate;
        this.location = location;
        // ============================================
        // Declarations
        // ============================================
        this.loading = false;
        this.submitted = false;
        this.formBuilder();
    }
    AddMembreComponent.prototype.ngOnInit = function () { };
    // ============================================
    // OnSubmit
    // ============================================
    AddMembreComponent.prototype.onSubmit = function () {
        this.loading = true;
        this.addAssociation();
    };
    // ============================================
    // Ajouter une association
    // ============================================
    AddMembreComponent.prototype.addAssociation = function () {
        var _this = this;
        console.log(JSON.stringify(this.addForm.value));
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.service
            .createObject("/membreBureau/new", this.addForm.value)
            .subscribe(function (data) {
            _this.location.back();
        }, function (error) {
            alert(error);
        });
    };
    // ============================================
    // Charger les elements du fourmulaire
    // ============================================
    AddMembreComponent.prototype.formBuilder = function () {
        var id = this.route.snapshot.params["id"];
        this.addForm = this.fb.group({
            id: [],
            nom: ["", Validators.required],
            prenom: ["", Validators.required],
            cin: [""],
            fonction: [""],
            adresse: [""],
            sexe: [""],
            trancheAge: [""],
            poste: [""],
            niveauScolaire: [""],
            mandatBureaus: this.fb.array([
                this.fb.group({
                    id: [id],
                })
            ])
        });
    };
    // ============================================
    // OnReset
    // ============================================
    AddMembreComponent.prototype.onReset = function () {
        this.submitted = false;
        this.addForm.reset();
    };
    // =====================================
    // back to list
    // =====================================
    AddMembreComponent.prototype.back = function () {
        var id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/show-mandat/" + id]);
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
    AddMembreComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.addForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) &&
            (control.dirty || control.touched);
        return result;
    };
    AddMembreComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-membre',
            templateUrl: './add-membre.component.html',
            styleUrls: ['./add-membre.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            FormBuilder,
            TranslateService,
            Location])
    ], AddMembreComponent);
    return AddMembreComponent;
}());
export { AddMembreComponent };
//# sourceMappingURL=add-membre.component.js.map