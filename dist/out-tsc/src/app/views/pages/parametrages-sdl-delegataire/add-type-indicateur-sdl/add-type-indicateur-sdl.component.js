import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TypeIndicSdlService } from '../service/typeIndicSdl/type-indic-sdl.service';
var AddTypeIndicateurSdlComponent = /** @class */ (function () {
    function AddTypeIndicateurSdlComponent(router, fb, typeIndicSdlService, translate) {
        this.router = router;
        this.fb = fb;
        this.typeIndicSdlService = typeIndicSdlService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
        // GroupForm sdlForm
        this.typeIndicSdlForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    AddTypeIndicateurSdlComponent.prototype.ngOnInit = function () { };
    AddTypeIndicateurSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-type-indicateur-sdl']);
    };
    AddTypeIndicateurSdlComponent.prototype.addTypeIndicSdl = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('type indicateur sdl form', this.typeIndicSdlForm.value);
        if (this.typeIndicSdlForm.valid) {
            this.typeIndicSdlServicess = {
                libelle: this.typeIndicSdlForm.value.libelle,
                description: this.typeIndicSdlForm.value.description,
            };
            this.typeIndicSdlService.addTypeIndicSdl(this.typeIndicSdlServicess).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_type_indicateur_sdl', res.body.id.toString());
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant('PAGES.GENERAL.MSG_SAVED_CONFIRMED'),
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(function () {
                        _this.router.navigate(['pages/parametrages-sdl-delegataire/list-structure-sdl']);
                        // localStorage.setItem("curentStep", JSON.stringify(1));
                    });
                }
                console.log('res add type indicateur Sdl =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddTypeIndicateurSdlComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-type-indicateur-sdl",
            templateUrl: "./add-type-indicateur-sdl.component.html",
            styleUrls: ["./add-type-indicateur-sdl.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TypeIndicSdlService,
            TranslateService])
    ], AddTypeIndicateurSdlComponent);
    return AddTypeIndicateurSdlComponent;
}());
export { AddTypeIndicateurSdlComponent };
//# sourceMappingURL=add-type-indicateur-sdl.component.js.map