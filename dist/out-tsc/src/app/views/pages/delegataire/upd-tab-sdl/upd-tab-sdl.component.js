import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { TabSdlService } from '../service/tab-sdl/tab-sdl.service';
var UpdTabSdlComponent = /** @class */ (function () {
    function UpdTabSdlComponent(router, fb, suiviSdlService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.suiviSdlService = suiviSdlService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formSdlSubmitted = false;
        // GroupForm suiviSdlForm
        this.suiviSdlForm = this.fb.group({
            objet: [''],
            typeIndicateur: [''],
            nom: [''],
            desciption: [''],
            dateValeur: ['', Validators.required],
            valeurContractuel: ['', Validators.required],
            valeurConstate: [''],
        });
    }
    UpdTabSdlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var sdl = _a.sdl;
            _this.suiviSdlForm.patchValue(tslib_1.__assign({}, sdl));
        });
        console.log('this.editForm :', this.suiviSdlForm.value);
        this.suiviSdlService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabSdl = res.body;
            },
            error: function () { },
        });
    };
    UpdTabSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/detail-sdl']);
    };
    UpdTabSdlComponent.prototype.updateSuiviSdl = function () {
        var _this = this;
        this.formSdlSubmitted = true;
        console.log('this.editForm :', this.suiviSdlForm.value.id);
        if (this.suiviSdlForm.value.id !== undefined) {
            if (this.suiviSdlForm.valid) {
                this.suiviSdlService
                    .updateSuiviSdl(this.suiviSdlForm.value)
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
                            "/pages/delegataire/detail-sdl",
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
    UpdTabSdlComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-tab-sdl',
            templateUrl: './upd-tab-sdl.component.html',
            styleUrls: ['./upd-tab-sdl.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TabSdlService,
            TranslateService,
            ActivatedRoute])
    ], UpdTabSdlComponent);
    return UpdTabSdlComponent;
}());
export { UpdTabSdlComponent };
//# sourceMappingURL=upd-tab-sdl.component.js.map