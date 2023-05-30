import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { AssociationService } from '../../utils/association.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
var EditMembreComponent = /** @class */ (function () {
    function EditMembreComponent(service, router, route, fb, location, translate) {
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
    EditMembreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/membreBureau/show/", this.id)
            .subscribe(function (data) {
            _this.addForm.patchValue(data);
        });
    };
    // ============================================
    // OnSubmit
    // ============================================
    EditMembreComponent.prototype.onSubmit = function () {
        this.loading = true;
        this.addAssociation();
    };
    // ============================================
    // Ajouter une association
    // ============================================
    EditMembreComponent.prototype.addAssociation = function () {
        var _this = this;
        console.log(JSON.stringify(this.addForm.value));
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.service
            .updateObject("/membreBureau/edit/", this.addForm.value)
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
    EditMembreComponent.prototype.formBuilder = function () {
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
    EditMembreComponent.prototype.onReset = function () {
        this.submitted = false;
        this.addForm.reset();
    };
    // =====================================
    // back to list
    // =====================================
    EditMembreComponent.prototype.back = function () {
        this.location.back();
    };
    EditMembreComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-membre',
            templateUrl: './edit-membre.component.html',
            styleUrls: ['./edit-membre.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            FormBuilder,
            Location,
            TranslateService])
    ], EditMembreComponent);
    return EditMembreComponent;
}());
export { EditMembreComponent };
//# sourceMappingURL=edit-membre.component.js.map