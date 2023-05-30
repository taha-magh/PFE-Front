import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { TypeIndicDelegataireService } from "../service/typeIndicDelegataire/type-indic-delegataire.service";
var UpdTypeIndicateurDelegataireComponent = /** @class */ (function () {
    function UpdTypeIndicateurDelegataireComponent(router, fb, typeIndicDelegataireService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.typeIndicDelegataireService = typeIndicDelegataireService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formDelegataireSubmitted = false;
        // GroupForm typeIndicDelegataireForm
        this.typeIndicDelegataireForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    UpdTypeIndicateurDelegataireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var typeIndicDelegataire = _a.typeIndicDelegataire;
            _this.typeIndicDelegataireForm.patchValue(tslib_1.__assign({}, typeIndicDelegataire));
        });
        console.log('this.editForm :', this.typeIndicDelegataireForm.value);
        this.typeIndicDelegataireService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabTypeIndicDelegataire = res.body;
            },
            error: function () { },
        });
    };
    UpdTypeIndicateurDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-type-indicateur-delegataire']);
    };
    UpdTypeIndicateurDelegataireComponent.prototype.updateTypeIndicDelegataire = function () {
        var _this = this;
        this.formDelegataireSubmitted = true;
        console.log('this.editForm :', this.typeIndicDelegataireForm.value.id);
        if (this.typeIndicDelegataireForm.value.id !== undefined) {
            if (this.typeIndicDelegataireForm.valid) {
                this.typeIndicDelegataireService
                    .updateTypeIndicDelegataire(this.typeIndicDelegataireForm.value)
                    .subscribe(function (res) {
                    console.log('res ==> ', res.body);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_UPDATE_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(function (result) {
                        _this.router.navigate([
                            "pages/parametrages-sdl-delegataire/list-type-indicateur-delegataire",
                        ]);
                    });
                }, function (error) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: _this.translate.instant(
                        // tslint:disable-next-line:indent
                        "PAGES.GENERAL.MSG_UPDATE_NOCONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    console.log('error ===> ', error);
                });
            }
        }
    };
    UpdTypeIndicateurDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-upd-type-indicateur-delegataire",
            templateUrl: "./upd-type-indicateur-delegataire.component.html",
            styleUrls: ["./upd-type-indicateur-delegataire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TypeIndicDelegataireService,
            TranslateService,
            ActivatedRoute])
    ], UpdTypeIndicateurDelegataireComponent);
    return UpdTypeIndicateurDelegataireComponent;
}());
export { UpdTypeIndicateurDelegataireComponent };
//# sourceMappingURL=upd-type-indicateur-delegataire.component.js.map