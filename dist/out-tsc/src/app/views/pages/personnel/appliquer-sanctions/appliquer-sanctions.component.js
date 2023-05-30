import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AppliquerSanctionsComponent = /** @class */ (function () {
    function AppliquerSanctionsComponent(router) {
        this.router = router;
    }
    AppliquerSanctionsComponent.prototype.ngOnInit = function () {
    };
    AppliquerSanctionsComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/personnel/show-personnel"]);
    };
    AppliquerSanctionsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-appliquer-sanctions',
            templateUrl: './appliquer-sanctions.component.html',
            styleUrls: ['./appliquer-sanctions.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AppliquerSanctionsComponent);
    return AppliquerSanctionsComponent;
}());
export { AppliquerSanctionsComponent };
//# sourceMappingURL=appliquer-sanctions.component.js.map