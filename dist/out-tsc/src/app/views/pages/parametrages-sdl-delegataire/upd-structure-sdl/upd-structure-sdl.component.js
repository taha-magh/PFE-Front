import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { StructureSdlService } from "../service/structureSdl/structure-sdl.service";
var UpdStructureSdlComponent = /** @class */ (function () {
    function UpdStructureSdlComponent(router, fb, structureSdlService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.structureSdlService = structureSdlService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formSdlSubmitted = false;
        // GroupForm structureSdlForm
        this.structureSdlForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    UpdStructureSdlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var structureSdl = _a.structureSdl;
            _this.structureSdlForm.patchValue(tslib_1.__assign({}, structureSdl));
        });
        console.log('this.editForm :', this.structureSdlForm.value);
        this.structureSdlService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabStructureSdl = res.body;
            },
            error: function () { },
        });
    };
    UpdStructureSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-structure-sdl']);
    };
    UpdStructureSdlComponent.prototype.updateStructureSdl = function () {
        var _this = this;
        this.formSdlSubmitted = true;
        console.log('this.editForm :', this.structureSdlForm.value.id);
        if (this.structureSdlForm.value.id !== undefined) {
            if (this.structureSdlForm.valid) {
                this.structureSdlService
                    .updateStructureSdl(this.structureSdlForm.value)
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
                            "pages/parametrage/list-structure-sdl",
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
    UpdStructureSdlComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-structure-sdl',
            templateUrl: './upd-structure-sdl.component.html',
            styleUrls: ['./upd-structure-sdl.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            StructureSdlService,
            TranslateService,
            ActivatedRoute])
    ], UpdStructureSdlComponent);
    return UpdStructureSdlComponent;
}());
export { UpdStructureSdlComponent };
//# sourceMappingURL=upd-structure-sdl.component.js.map