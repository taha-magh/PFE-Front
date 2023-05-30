import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddTypeProduitComponent = /** @class */ (function () {
    function AddTypeProduitComponent(router) {
        this.router = router;
    }
    AddTypeProduitComponent.prototype.ngOnInit = function () {
    };
    AddTypeProduitComponent.prototype.RetourFichier = function () {
        this.router.navigate(["pages/Marche/list-type-Produit"]);
    };
    AddTypeProduitComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-type-Produit',
            templateUrl: './add-type-Produit.component.html',
            styleUrls: ['./add-type-Produit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddTypeProduitComponent);
    return AddTypeProduitComponent;
}());
export { AddTypeProduitComponent };
//# sourceMappingURL=add-type-produit.component.js.map