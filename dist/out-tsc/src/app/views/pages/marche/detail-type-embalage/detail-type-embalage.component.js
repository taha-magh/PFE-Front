import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var DetailTypeEmbalageComponent = /** @class */ (function () {
    function DetailTypeEmbalageComponent(router) {
        this.router = router;
    }
    DetailTypeEmbalageComponent.prototype.ngOnInit = function () {
    };
    DetailTypeEmbalageComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Marche/list-type-embalage"]);
    };
    DetailTypeEmbalageComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detail-type-embalage',
            templateUrl: './detail-type-embalage.component.html',
            styleUrls: ['./detail-type-embalage.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailTypeEmbalageComponent);
    return DetailTypeEmbalageComponent;
}());
export { DetailTypeEmbalageComponent };
//# sourceMappingURL=detail-type-embalage.component.js.map