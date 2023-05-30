import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var ModificationTypeProduitComponent = /** @class */ (function () {
    function ModificationTypeProduitComponent(router) {
        this.router = router;
    }
    ModificationTypeProduitComponent.prototype.ngOnInit = function () {
    };
    ModificationTypeProduitComponent.prototype.RetourFichier = function () {
        this.router.navigate(["pages/Marche/list-type-Produit"]);
    };
    ModificationTypeProduitComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-modification-type-produit',
            templateUrl: './modification-type-produit.component.html',
            styleUrls: ['./modification-type-produit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ModificationTypeProduitComponent);
    return ModificationTypeProduitComponent;
}());
export { ModificationTypeProduitComponent };
//# sourceMappingURL=modification-type-produit.component.js.map