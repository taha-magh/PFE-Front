import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var DetailTypeTarifictionComponent = /** @class */ (function () {
    function DetailTypeTarifictionComponent(router) {
        this.router = router;
    }
    DetailTypeTarifictionComponent.prototype.ngOnInit = function () {
    };
    DetailTypeTarifictionComponent.prototype.RetourJurdaction = function () {
        this.router.navigate(["pages/Marche/list-type-Tarifiction"]);
    };
    DetailTypeTarifictionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detail-type-tarifiction',
            templateUrl: './detail-type-tarifiction.component.html',
            styleUrls: ['./detail-type-tarifiction.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailTypeTarifictionComponent);
    return DetailTypeTarifictionComponent;
}());
export { DetailTypeTarifictionComponent };
//# sourceMappingURL=detail-type-tarifiction.component.js.map