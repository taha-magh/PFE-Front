import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var DetailTypeProduitComponent = /** @class */ (function () {
    function DetailTypeProduitComponent(router) {
        this.router = router;
    }
    DetailTypeProduitComponent.prototype.ngOnInit = function () {
    };
    DetailTypeProduitComponent.prototype.RetourFichier = function () {
        this.router.navigate(["pages/Marche/list-type-Produit"]);
    };
    DetailTypeProduitComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detail-type-produit',
            templateUrl: './detail-type-produit.component.html',
            styleUrls: ['./detail-type-produit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailTypeProduitComponent);
    return DetailTypeProduitComponent;
}());
export { DetailTypeProduitComponent };
//# sourceMappingURL=detail-type-produit.component.js.map