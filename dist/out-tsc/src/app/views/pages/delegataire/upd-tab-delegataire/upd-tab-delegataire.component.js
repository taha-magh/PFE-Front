import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TabDelegataireService } from '../service/tab-delegataire/tab-delegataire.service';
var UpdTabDelegataireComponent = /** @class */ (function () {
    function UpdTabDelegataireComponent(router, fb, suiviDelegataireService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.suiviDelegataireService = suiviDelegataireService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formSuiviDelegataireSubmitted = false;
        // GroupForm suiviDelegataireForm
        this.suiviDelegataireForm = this.fb.group({
            objet: [''],
            typeIndicateur: [''],
            nom: [''],
            desciption: [''],
            dateValeur: ['', Validators.required],
            valeurContractuel: ['', Validators.required],
            valeurConstate: [''],
        });
    }
    UpdTabDelegataireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var suiviDelegataire = _a.suiviDelegataire;
            _this.suiviDelegataireForm.patchValue(tslib_1.__assign({}, suiviDelegataire));
        });
        console.log('this.editForm :', this.suiviDelegataireForm.value);
        this.suiviDelegataireService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabTabDelegataire = res.body;
            },
            error: function () { },
        });
    };
    UpdTabDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/detail-delegataire']);
    };
    UpdTabDelegataireComponent.prototype.updateSuiviDelegataire = function () {
        var _this = this;
        this.formSuiviDelegataireSubmitted = true;
        console.log('this.editForm :', this.suiviDelegataireForm.value.id);
        if (this.suiviDelegataireForm.value.id !== undefined) {
            if (this.suiviDelegataireForm.valid) {
                this.suiviDelegataireService
                    .updateSuiviDelegataire(this.suiviDelegataireForm.value)
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
                            "/pages/delegataire/detail-delegataire",
                        ]);
                    });
                }, function (error) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_UPDATE_NOCONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    console.log('error ===> ', error);
                });
            }
        }
    };
    UpdTabDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-tab-delegataire',
            templateUrl: './upd-tab-delegataire.component.html',
            styleUrls: ['./upd-tab-delegataire.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TabDelegataireService,
            TranslateService,
            ActivatedRoute])
    ], UpdTabDelegataireComponent);
    return UpdTabDelegataireComponent;
}());
export { UpdTabDelegataireComponent };
//# sourceMappingURL=upd-tab-delegataire.component.js.map