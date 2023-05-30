import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { StructureSdlService } from '../service/structureSdl/structure-sdl.service';
var AddStructureSdlComponent = /** @class */ (function () {
    function AddStructureSdlComponent(router, fb, structureSdlService, translate) {
        this.router = router;
        this.fb = fb;
        this.structureSdlService = structureSdlService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
        // GroupForm sdlForm
        this.structureSdlForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    AddStructureSdlComponent.prototype.ngOnInit = function () { };
    AddStructureSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-structure-sdl']);
    };
    AddStructureSdlComponent.prototype.addStructureSdl = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('structure sdl form', this.structureSdlForm.value);
        if (this.structureSdlForm.valid) {
            this.structureSdlss = {
                libelle: this.structureSdlForm.value.libelle,
                description: this.structureSdlForm.value.description,
            };
            this.structureSdlService.addStructureSdl(this.structureSdlss).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_structure_sdl', res.body.id.toString());
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
                console.log('res add structure Sdl =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddStructureSdlComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-structure-sdl',
            templateUrl: './add-structure-sdl.component.html',
            styleUrls: ['./add-structure-sdl.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            StructureSdlService,
            TranslateService])
    ], AddStructureSdlComponent);
    return AddStructureSdlComponent;
}());
export { AddStructureSdlComponent };
//# sourceMappingURL=add-structure-sdl.component.js.map