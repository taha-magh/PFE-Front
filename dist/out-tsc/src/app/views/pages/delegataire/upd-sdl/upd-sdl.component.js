import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { SdlService } from "../service/sdl/sdl.service";
var UpdSdlComponent = /** @class */ (function () {
    function UpdSdlComponent(router, fb, sdlService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.sdlService = sdlService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formSdlSubmitted = false;
        // GroupForm sdlForm
        this.sdlForm = this.fb.group({
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
    UpdSdlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var sdl = _a.sdl;
            _this.sdlForm.patchValue(tslib_1.__assign({}, sdl));
        });
        console.log('this.editForm :', this.sdlForm.value);
        this.sdlService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabSdl = res.body;
            },
            error: function () { },
        });
    };
    UpdSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/sdl']);
    };
    UpdSdlComponent.prototype.updateSdl = function () {
        var _this = this;
        this.formSdlSubmitted = true;
        console.log('this.editForm :', this.sdlForm.value.id);
        if (this.sdlForm.value.id !== undefined) {
            if (this.sdlForm.valid) {
                this.sdlService
                    .updateSdl(this.sdlForm.value)
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
                            "/pages/delegataire/sdl",
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
    UpdSdlComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-sdl',
            templateUrl: './upd-sdl.component.html',
            styleUrls: ['./upd-sdl.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            SdlService,
            TranslateService,
            ActivatedRoute])
    ], UpdSdlComponent);
    return UpdSdlComponent;
}());
export { UpdSdlComponent };
//# sourceMappingURL=upd-sdl.component.js.map