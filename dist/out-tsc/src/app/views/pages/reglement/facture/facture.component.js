import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var FactureComponent = /** @class */ (function () {
    function FactureComponent(router) {
        this.router = router;
    }
    FactureComponent.prototype.ngOnInit = function () {
    };
    FactureComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/reglement/list-factures"]);
    };
    FactureComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-facture',
            templateUrl: './facture.component.html',
            styleUrls: ['./facture.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], FactureComponent);
    return FactureComponent;
}());
export { FactureComponent };
//# sourceMappingURL=facture.component.js.map