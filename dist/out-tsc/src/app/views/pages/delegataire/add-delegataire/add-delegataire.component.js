import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { DelegataireService } from '../service/delegataire/delegataire.service';
var AddDelegataireComponent = /** @class */ (function () {
    function AddDelegataireComponent(router, fb, delegataireService, translate) {
        this.router = router;
        this.fb = fb;
        this.delegataireService = delegataireService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
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
            // structure: [''],
            capital: [''],
        });
    }
    AddDelegataireComponent.prototype.ngOnInit = function () { };
    AddDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/delegataires']);
    };
    AddDelegataireComponent.prototype.addDelegataire = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('delegataire form', this.delegataireForm.value);
        if (this.delegataireForm.valid) {
            this.delegatairess = {
                raisonSocial: this.delegataireForm.value.raisonSocial,
                RC: this.delegataireForm.value.RC,
                IF: this.delegataireForm.value.IF,
                ICE: this.delegataireForm.value.ice,
                numCNSS: this.delegataireForm.value.numCNSS,
                adresse: this.delegataireForm.value.adresse,
                tel: this.delegataireForm.value.tel,
                fax: this.delegataireForm.value.fax,
                email: this.delegataireForm.value.email,
                gerant: this.delegataireForm.value.gerant,
                //structure: this.delegataireForm.value.structure,
                capital: this.delegataireForm.value.capital,
            };
            this.delegataireService.addDelegataire(this.delegatairess).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_delegataire', res.body.id.toString());
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant('PAGES.GENERAL.MSG_SAVED_CONFIRMED'),
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(function () {
                        _this.router.navigate(['pages/delegataire/delegataires']);
                        // localStorage.setItem("curentStep", JSON.stringify(1));
                    });
                }
                console.log('res add delegataire =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-delegataire',
            templateUrl: './add-delegataire.component.html',
            styleUrls: ['./add-delegataire.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            DelegataireService,
            TranslateService])
    ], AddDelegataireComponent);
    return AddDelegataireComponent;
}());
export { AddDelegataireComponent };
//# sourceMappingURL=add-delegataire.component.js.map