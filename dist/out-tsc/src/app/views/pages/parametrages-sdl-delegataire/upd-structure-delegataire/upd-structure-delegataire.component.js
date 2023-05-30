import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { StructureDelegataireService } from '../service/structureDelegataire/structure-delegataire.service';
var UpdStructureDelegataireComponent = /** @class */ (function () {
    function UpdStructureDelegataireComponent(router, fb, structureDelegataireService, translate, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.structureDelegataireService = structureDelegataireService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.formStructureDelegataireSubmitted = false;
        // GroupForm structureDelegataireForm
        this.structureDelegataireForm = this.fb.group({
            objet: [''],
            // isCommuneInformed: [''],
            libelle: [''],
            description: [''],
        });
    }
    UpdStructureDelegataireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var structureDelegataire = _a.structureDelegataire;
            _this.structureDelegataireForm.patchValue(tslib_1.__assign({}, structureDelegataire));
        });
        console.log('this.editForm :', this.structureDelegataireForm.value);
        this.structureDelegataireService.query({ size: 1000 }).subscribe({
            next: function (res) {
                _this.tabStructureDelegataire = res.body;
            },
            error: function () { },
        });
    };
    UpdStructureDelegataireComponent.prototype.Back = function () {
        this.router.navigate(['pages/parametrage/list-structure-delegataire']);
    };
    UpdStructureDelegataireComponent.prototype.updateStructureDelegataire = function () {
        var _this = this;
        this.formStructureDelegataireSubmitted = true;
        console.log('this.editForm :', this.structureDelegataireForm.value.id);
        if (this.structureDelegataireForm.value.id !== undefined) {
            if (this.structureDelegataireForm.valid) {
                this.structureDelegataireService
                    .updateStructureDelegataire(this.structureDelegataireForm.value)
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
                            "pages/parametrage/list-structure-delegataire",
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
    UpdStructureDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-structure-delegataire',
            templateUrl: './upd-structure-delegataire.component.html',
            styleUrls: ['./upd-structure-delegataire.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            StructureDelegataireService,
            TranslateService,
            ActivatedRoute])
    ], UpdStructureDelegataireComponent);
    return UpdStructureDelegataireComponent;
}());
export { UpdStructureDelegataireComponent };
// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
//
// export class UpdStructureDelegataireComponent implements OnInit {
// 	constructor(private router: Router) {}
//
// 	ngOnInit() {}
//
// 	RetourEmbalages(): void {
// 		this.router.navigate(["pages/parametrage/list-structure-delegataire"]);
// 	}
// }
//# sourceMappingURL=upd-structure-delegataire.component.js.map