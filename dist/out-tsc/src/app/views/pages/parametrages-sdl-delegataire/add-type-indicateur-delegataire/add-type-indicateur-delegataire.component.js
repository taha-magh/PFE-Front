import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TypeIndicDelegataireService } from '../service/typeIndicDelegataire/type-indic-delegataire.service';
var AddTypeIndicateurDelegataireComponent = /** @class */ (function () {
    function AddTypeIndicateurDelegataireComponent(router, fb, typeIndicDelegataireService, translate) {
        this.router = router;
        this.fb = fb;
        this.typeIndicDelegataireService = typeIndicDelegataireService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
        // GroupForm delegataireForm
        this.typeIndicDelegataireForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    AddTypeIndicateurDelegataireComponent.prototype.ngOnInit = function () { };
    AddTypeIndicateurDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-type-indicateur-delegataire']);
    };
    AddTypeIndicateurDelegataireComponent.prototype.addTypeIndicDelegataire = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('type indicateur delegataire form', this.typeIndicDelegataireForm.value);
        if (this.typeIndicDelegataireForm.valid) {
            this.typeIndicDelegataireServicess = {
                libelle: this.typeIndicDelegataireForm.value.libelle,
                description: this.typeIndicDelegataireForm.value.description,
            };
            this.typeIndicDelegataireService.addTypeIndicDelegataire(this.typeIndicDelegataireServicess).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_type_indicateur_delegataire', res.body.id.toString());
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
                console.log('res add type indicateur Delegataire =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddTypeIndicateurDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-type-indicateur-delegataire",
            templateUrl: "./add-type-indicateur-delegataire.component.html",
            styleUrls: ["./add-type-indicateur-delegataire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            TypeIndicDelegataireService,
            TranslateService])
    ], AddTypeIndicateurDelegataireComponent);
    return AddTypeIndicateurDelegataireComponent;
}());
export { AddTypeIndicateurDelegataireComponent };
// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
//
// })
// export class AddTypeIndicateurDelegataireComponent implements OnInit {
// 	constructor(private router: Router) {}
//
// 	ngOnInit() {}
//
// 	RetourEmbalages(): void {
// 		this.router.navigate([
// 			"pages/parametrage/list-type-indicateur-delegataire",
// 		]);
// 	}
// }
//# sourceMappingURL=add-type-indicateur-delegataire.component.js.map