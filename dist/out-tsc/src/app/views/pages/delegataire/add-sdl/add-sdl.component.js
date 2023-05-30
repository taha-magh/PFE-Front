import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SdlService } from '../service/sdl/sdl.service';
var AddSdlComponent = /** @class */ (function () {
    function AddSdlComponent(router, fb, sdlService, translate) {
        this.router = router;
        this.fb = fb;
        this.sdlService = sdlService;
        this.translate = translate;
        this.formDemandeSubmitted = false;
        // GroupForm avocatForm
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
            // fax: [''],
            capital: [''],
        });
    }
    AddSdlComponent.prototype.ngOnInit = function () { };
    AddSdlComponent.prototype.Back = function () {
        this.router.navigate(['pages/delegataire/sdl']);
    };
    AddSdlComponent.prototype.addSdl = function () {
        var _this = this;
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('sdl form', this.sdlForm.value);
        if (this.sdlForm.valid) {
            this.sdls = {
                raisonSocial: this.sdlForm.value.raisonSocial,
                RC: this.sdlForm.value.RC,
                IF: this.sdlForm.value.IF,
                ICE: this.sdlForm.value.ice,
                numCNSS: this.sdlForm.value.numCNSS,
                adresse: this.sdlForm.value.adresse,
                tel: this.sdlForm.value.tel,
                fax: this.sdlForm.value.fax,
                email: this.sdlForm.value.email,
                gerant: this.sdlForm.value.gerant,
                //structure: this.sdlForm.value.structure,
                capital: this.sdlForm.value.capital,
            };
            this.sdlService.addSdl(this.sdls).subscribe(function (res) {
                if (res.ok) {
                    localStorage.setItem('id_sdl', res.body.id.toString());
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant('PAGES.GENERAL.MSG_SAVED_CONFIRMED'),
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(function () {
                        _this.router.navigate(['pages/delegataire/sdl']);
                        // localStorage.setItem("curentStep", JSON.stringify(1));
                    });
                }
                console.log('res add sdl =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    };
    AddSdlComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-sdl',
            templateUrl: './add-sdl.component.html',
            styleUrls: ['./add-sdl.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            SdlService,
            TranslateService])
    ], AddSdlComponent);
    return AddSdlComponent;
}());
export { AddSdlComponent };
//# sourceMappingURL=add-sdl.component.js.map