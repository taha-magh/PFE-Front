import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { StructureDelegataireService } from '../service/structureDelegataire/structure-delegataire.service';
var AddStructureDelegataireComponent = /** @class */ (function () {
    function AddStructureDelegataireComponent(router, fb, structureDelegataireService, translate) {
        this.router = router;
        this.fb = fb;
        this.structureDelegataireService = structureDelegataireService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
        // GroupForm delegataireForm
        this.structureDelegataireForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    AddStructureDelegataireComponent.prototype.ngOnInit = function () { };
    AddStructureDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-structure-delegataire']);
    };
    AddStructureDelegataireComponent.prototype.addStructureDelegataire = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('structure delegataire form', this.structureDelegataireForm.value);
        if (this.structureDelegataireForm.valid) {
            this.structureDelegatairess = {
                libelle: this.structureDelegataireForm.value.libelle,
                description: this.structureDelegataireForm.value.description,
            };
            this.structureDelegataireService.addStructureDelegataire(this.structureDelegatairess).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_structure_delegataire', res.body.id.toString());
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant('PAGES.GENERAL.MSG_SAVED_CONFIRMED'),
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(function () {
                        _this.router.navigate(['pages/parametrages-sdl-delegataire/list-structure-delegataire']);
                        // localStorage.setItem("curentStep", JSON.stringify(1));
                    });
                }
                console.log('res add structure Delegataire =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddStructureDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-structure-delegataire',
            templateUrl: './add-structure-delegataire.component.html',
            styleUrls: ['./add-structure-delegataire.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            StructureDelegataireService,
            TranslateService])
    ], AddStructureDelegataireComponent);
    return AddStructureDelegataireComponent;
}());
export { AddStructureDelegataireComponent };
//# sourceMappingURL=add-structure-delegataire.component.js.map