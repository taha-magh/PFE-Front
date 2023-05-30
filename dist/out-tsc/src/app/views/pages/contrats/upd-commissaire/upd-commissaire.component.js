import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var UpdCommissaireComponent = /** @class */ (function () {
    function UpdCommissaireComponent(router) {
        this.router = router;
    }
    UpdCommissaireComponent.prototype.ngOnInit = function () { };
    UpdCommissaireComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/commissaire-judiciaire"]);
    };
    UpdCommissaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-upd-commissaire",
            templateUrl: "./upd-commissaire.component.html",
            styleUrls: ["./upd-commissaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdCommissaireComponent);
    return UpdCommissaireComponent;
}());
export { UpdCommissaireComponent };
//# sourceMappingURL=upd-commissaire.component.js.map