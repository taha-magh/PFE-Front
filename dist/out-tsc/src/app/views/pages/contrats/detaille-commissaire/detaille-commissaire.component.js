import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var DetailleCommissaireComponent = /** @class */ (function () {
    function DetailleCommissaireComponent(router) {
        this.router = router;
    }
    DetailleCommissaireComponent.prototype.ngOnInit = function () { };
    DetailleCommissaireComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/notaire"]);
    };
    DetailleCommissaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-detaille-commissaire",
            templateUrl: "./detaille-commissaire.component.html",
            styleUrls: ["./detaille-commissaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleCommissaireComponent);
    return DetailleCommissaireComponent;
}());
export { DetailleCommissaireComponent };
//# sourceMappingURL=detaille-commissaire.component.js.map