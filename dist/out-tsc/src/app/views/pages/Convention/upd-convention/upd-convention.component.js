import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdConventionComponent = /** @class */ (function () {
    function UpdConventionComponent(router) {
        this.router = router;
    }
    UpdConventionComponent.prototype.ngOnInit = function () {
    };
    UpdConventionComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Convention/list-convention"]);
    };
    UpdConventionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-convention',
            templateUrl: './upd-convention.component.html',
            styleUrls: ['./upd-convention.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdConventionComponent);
    return UpdConventionComponent;
}());
export { UpdConventionComponent };
//# sourceMappingURL=upd-convention.component.js.map