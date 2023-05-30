import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { TabSdlService } from '../service/tab-sdl/tab-sdl.service';
var AddTabSdlComponent = /** @class */ (function () {
    function AddTabSdlComponent(router, fb, suiviSdlService, translate) {
        this.router = router;
        this.fb = fb;
        this.suiviSdlService = suiviSdlService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
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
    AddTabSdlComponent.prototype.ngOnInit = function () { };
    AddTabSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/detail-sdl']);
    };
    AddTabSdlComponent.prototype.addSuiviSdl = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('suivi-sdl form', this.suiviSdlForm.value);
        if (this.suiviSdlForm.valid) {
            this.suiviSdls = {
                typeIndicateur: this.suiviSdlForm.value.typeIndicateur,
                nom: this.suiviSdlForm.value.nom,
                desciption: this.suiviSdlForm.value.desciption,
                dateValeur: this.suiviSdlForm.value.dateValeur,
                valeurContractuel: this.suiviSdlForm.value.valeurContractuel,
                valeurConstate: this.suiviSdlForm.value.valeurConstate,
            };
            this.suiviSdlService.addSuiviSdl(this.suiviSdls).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_suiv_sdl', res.body.id.toString());
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant('PAGES.GENERAL.MSG_SAVED_CONFIRMED'),
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(function () {
                        _this.router.navigate(['pages/delegataire/tab-sdl']);
                        // localStorage.setItem("curentStep", JSON.stringify(1));
                    });
                }
                console.log('res add suivi-sdl =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddTabSdlComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-tab-sdl',
            templateUrl: './add-tab-sdl.component.html',
            styleUrls: ['./add-tab-sdl.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TabSdlService,
            TranslateService])
    ], AddTabSdlComponent);
    return AddTabSdlComponent;
}());
export { AddTabSdlComponent };
//# sourceMappingURL=add-tab-sdl.component.js.map