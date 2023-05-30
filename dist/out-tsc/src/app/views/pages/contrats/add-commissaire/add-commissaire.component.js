import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddCommissaireComponent = /** @class */ (function () {
    function AddCommissaireComponent(router) {
        this.router = router;
    }
    AddCommissaireComponent.prototype.ngOnInit = function () { };
    AddCommissaireComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/commissaire-judiciaire"]);
    };
    AddCommissaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-commissaire",
            templateUrl: "./add-commissaire.component.html",
            styleUrls: ["./add-commissaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddCommissaireComponent);
    return AddCommissaireComponent;
}());
export { AddCommissaireComponent };
//# sourceMappingURL=add-commissaire.component.js.map