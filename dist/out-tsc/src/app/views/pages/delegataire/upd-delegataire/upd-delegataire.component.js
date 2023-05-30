import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { DelegataireService } from "../service/delegataire/delegataire.service";
var UpdDelegataireComponent = /** @class */ (function () {
    function UpdDelegataireComponent(router, fb, delegataireService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.delegataireService = delegataireService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formDelegataireSubmitted = false;
        // GroupForm delegataireForm
        this.delegataireForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            raisonSocial: [''],
            RC: [''],
            iF: ['', Validators.required],
            ICE: ['', Validators.required],
            numCNSS: ['', Validators.required],
            adresse: [''],
            tel: [''],
            fax: [''],
            email: [''],
            gerant: [''],
            structure: [''],
            capital: [''],
        });
    }
    UpdDelegataireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var delegataire = _a.delegataire;
            _this.delegataireForm.patchValue(tslib_1.__assign({}, delegataire));
        });
        console.log('this.editForm :', this.delegataireForm.value);
        this.delegataireService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabDelegataire = res.body;
            },
            error: function () { },
        });
    };
    UpdDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/delegataires']);
    };
    UpdDelegataireComponent.prototype.updateDelegataire = function () {
        var _this = this;
        this.formDelegataireSubmitted = true;
        console.log('this.editForm :', this.delegataireForm.value.id);
        if (this.delegataireForm.value.id !== undefined) {
            if (this.delegataireForm.valid) {
                this.delegataireService
                    .updateDelegataire(this.delegataireForm.value)
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
                            "/pages/delegataire/delegataires",
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
    UpdDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-delegataire',
            templateUrl: './upd-delegataire.component.html',
            styleUrls: ['./upd-delegataire.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            DelegataireService,
            TranslateService,
            ActivatedRoute])
    ], UpdDelegataireComponent);
    return UpdDelegataireComponent;
}());
export { UpdDelegataireComponent };
//# sourceMappingURL=upd-delegataire.component.js.map