import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddDemandeComponent = /** @class */ (function () {
    function AddDemandeComponent(router) {
        this.router = router;
        this.isVisible = 1;
        this.isVisible1 = 2;
        this.isSelected = true;
        this.isSelected1 = false;
    }
    AddDemandeComponent.prototype.ngOnInit = function () { };
    AddDemandeComponent.prototype.EtapeSuivant = function () {
        this.router.navigate(["pages/demande/add-demande-etape2"]);
    };
    AddDemandeComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/demande/list-demandes"]);
    };
    AddDemandeComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-demande",
            templateUrl: "./add-demande.component.html",
            styleUrls: ["./add-demande.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddDemandeComponent);
    return AddDemandeComponent;
}());
export { AddDemandeComponent };
//# sourceMappingURL=add-demande.component.js.map