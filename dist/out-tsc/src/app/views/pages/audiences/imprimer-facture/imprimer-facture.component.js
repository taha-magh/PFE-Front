import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var ImprimerFactureComponent = /** @class */ (function () {
    function ImprimerFactureComponent(router) {
        this.router = router;
    }
    ImprimerFactureComponent.prototype.ngOnInit = function () {
    };
    ImprimerFactureComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/edit-facture"]);
    };
    ImprimerFactureComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-imprimer-facture',
            templateUrl: './imprimer-facture.component.html',
            styleUrls: ['./imprimer-facture.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ImprimerFactureComponent);
    return ImprimerFactureComponent;
}());
export { ImprimerFactureComponent };
//# sourceMappingURL=imprimer-facture.component.js.map