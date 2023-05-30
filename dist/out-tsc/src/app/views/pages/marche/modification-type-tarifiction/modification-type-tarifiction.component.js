import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var ModificationTypeTarifictionComponent = /** @class */ (function () {
    function ModificationTypeTarifictionComponent(router) {
        this.router = router;
    }
    ModificationTypeTarifictionComponent.prototype.ngOnInit = function () {
    };
    ModificationTypeTarifictionComponent.prototype.RetourJurdaction = function () {
        this.router.navigate(["pages/Marche/list-type-Tarifiction"]);
    };
    ModificationTypeTarifictionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-modification-type-tarifiction',
            templateUrl: './modification-type-tarifiction.component.html',
            styleUrls: ['./modification-type-tarifiction.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ModificationTypeTarifictionComponent);
    return ModificationTypeTarifictionComponent;
}());
export { ModificationTypeTarifictionComponent };
//# sourceMappingURL=modification-type-tarifiction.component.js.map