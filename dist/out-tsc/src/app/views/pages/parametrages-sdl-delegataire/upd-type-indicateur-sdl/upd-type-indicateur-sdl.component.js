import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { TypeIndicSdlService } from "../service/typeIndicSdl/type-indic-sdl.service";
var UpdTypeIndicateurSdlComponent = /** @class */ (function () {
    function UpdTypeIndicateurSdlComponent(router, fb, typeIndicSdlService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.typeIndicSdlService = typeIndicSdlService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formSdlSubmitted = false;
        // GroupForm typeIndicSdlForm
        this.typeIndicSdlForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    UpdTypeIndicateurSdlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var typeIndicSdl = _a.typeIndicSdl;
            _this.typeIndicSdlForm.patchValue(tslib_1.__assign({}, typeIndicSdl));
        });
        console.log('this.editForm :', this.typeIndicSdlForm.value);
        this.typeIndicSdlService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabTypeIndicSdl = res.body;
            },
            error: function () { },
        });
    };
    UpdTypeIndicateurSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-type-indicateur-sdl']);
    };
    UpdTypeIndicateurSdlComponent.prototype.updateTypeIndicSdl = function () {
        var _this = this;
        this.formSdlSubmitted = true;
        console.log('this.editForm :', this.typeIndicSdlForm.value.id);
        if (this.typeIndicSdlForm.value.id !== undefined) {
            if (this.typeIndicSdlForm.valid) {
                this.typeIndicSdlService
                    .updateTypeIndicSdl(this.typeIndicSdlForm.value)
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
                            "pages/parametrage/list-type-indicateur-sdl",
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
    UpdTypeIndicateurSdlComponent = tslib_1.__decorate([
        Component({
            selector: "kt-upd-type-indicateur-sdl",
            templateUrl: "./upd-type-indicateur-sdl.component.html",
            styleUrls: ["./upd-type-indicateur-sdl.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TypeIndicSdlService,
            TranslateService,
            ActivatedRoute])
    ], UpdTypeIndicateurSdlComponent);
    return UpdTypeIndicateurSdlComponent;
}());
export { UpdTypeIndicateurSdlComponent };
//# sourceMappingURL=upd-type-indicateur-sdl.component.js.map