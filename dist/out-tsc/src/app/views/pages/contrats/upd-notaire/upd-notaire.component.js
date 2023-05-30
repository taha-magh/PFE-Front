import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var UpdNotaireComponent = /** @class */ (function () {
    function UpdNotaireComponent(router) {
        this.router = router;
    }
    UpdNotaireComponent.prototype.ngOnInit = function () { };
    UpdNotaireComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/notaire"]);
    };
    UpdNotaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-upd-notaire",
            templateUrl: "./upd-notaire.component.html",
            styleUrls: ["./upd-notaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdNotaireComponent);
    return UpdNotaireComponent;
}());
export { UpdNotaireComponent };
//# sourceMappingURL=upd-notaire.component.js.map