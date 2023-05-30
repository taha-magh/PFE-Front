import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ImprimerAttestationCongeComponent = /** @class */ (function () {
    function ImprimerAttestationCongeComponent(router) {
        this.router = router;
    }
    ImprimerAttestationCongeComponent.prototype.ngOnInit = function () {
    };
    ImprimerAttestationCongeComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/conge/list-conge"]);
    };
    ImprimerAttestationCongeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-imprimer-attestation-conge',
            templateUrl: './imprimer-attestation-conge.component.html',
            styleUrls: ['./imprimer-attestation-conge.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ImprimerAttestationCongeComponent);
    return ImprimerAttestationCongeComponent;
}());
export { ImprimerAttestationCongeComponent };
//# sourceMappingURL=imprimer-attestation-conge.component.js.map