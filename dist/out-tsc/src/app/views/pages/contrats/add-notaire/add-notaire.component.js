import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddNotaireComponent = /** @class */ (function () {
    function AddNotaireComponent(router) {
        this.router = router;
    }
    AddNotaireComponent.prototype.ngOnInit = function () { };
    AddNotaireComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/notaire"]);
    };
    AddNotaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-notaire",
            templateUrl: "./add-notaire.component.html",
            styleUrls: ["./add-notaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddNotaireComponent);
    return AddNotaireComponent;
}());
export { AddNotaireComponent };
//# sourceMappingURL=add-notaire.component.js.map