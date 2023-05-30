import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var DetailleNotaireComponent = /** @class */ (function () {
    function DetailleNotaireComponent(router) {
        this.router = router;
    }
    DetailleNotaireComponent.prototype.ngOnInit = function () { };
    DetailleNotaireComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/notaire"]);
    };
    DetailleNotaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-detaille-notaire",
            templateUrl: "./detaille-notaire.component.html",
            styleUrls: ["./detaille-notaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleNotaireComponent);
    return DetailleNotaireComponent;
}());
export { DetailleNotaireComponent };
//# sourceMappingURL=detaille-notaire.component.js.map