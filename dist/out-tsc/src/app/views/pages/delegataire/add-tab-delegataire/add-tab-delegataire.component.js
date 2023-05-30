import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { TabDelegataireService } from "../service/tab-delegataire/tab-delegataire.service";
var AddTabDelegataireComponent = /** @class */ (function () {
    function AddTabDelegataireComponent(router, fb, suiviDelegataireService, translate) {
        this.router = router;
        this.fb = fb;
        this.suiviDelegataireService = suiviDelegataireService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
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
    AddTabDelegataireComponent.prototype.ngOnInit = function () { };
    AddTabDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/detail-delegataire']);
    };
    AddTabDelegataireComponent.prototype.addSuiviDelegataire = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('suivi-delegataire form', this.suiviDelegataireForm.value);
        if (this.suiviDelegataireForm.valid) {
            this.suiviDelegataires = {
                typeIndicateur: this.suiviDelegataireForm.value.typeIndicateur,
                nom: this.suiviDelegataireForm.value.nom,
                desciption: this.suiviDelegataireForm.value.desciption,
                dateValeur: this.suiviDelegataireForm.value.dateValeur,
                valeurContractuel: this.suiviDelegataireForm.value.valeurContractuel,
                valeurConstate: this.suiviDelegataireForm.value.valeurConstate,
            };
            this.suiviDelegataireService.addSuiviDelegataire(this.suiviDelegataires).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_suiv_delegataire', res.body.id.toString());
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant('PAGES.GENERAL.MSG_SAVED_CONFIRMED'),
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(function () {
                        _this.router.navigate(['pages/delegataire/tab-delegataire']);
                        // localStorage.setItem("curentStep", JSON.stringify(1));
                    });
                }
                console.log('res add suivi-delegataire =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddTabDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-tab-delegataire',
            templateUrl: './add-tab-delegataire.component.html',
            styleUrls: ['./add-tab-delegataire.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TabDelegataireService,
            TranslateService])
    ], AddTabDelegataireComponent);
    return AddTabDelegataireComponent;
}());
export { AddTabDelegataireComponent };
//# sourceMappingURL=add-tab-delegataire.component.js.map