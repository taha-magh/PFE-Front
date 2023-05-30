import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var DetailleMarcheeComponent = /** @class */ (function () {
    function DetailleMarcheeComponent(router) {
        this.router = router;
    }
    DetailleMarcheeComponent.prototype.ngOnInit = function () {
    };
    DetailleMarcheeComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Marchee/list-marche"]);
    };
    DetailleMarcheeComponent.prototype.PP = function () {
        this.router.navigate(["pages/Convention/detaille-convention"]);
    };
    DetailleMarcheeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detaille-marchee',
            templateUrl: './detaille-marchee.component.html',
            styleUrls: ['./detaille-marchee.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleMarcheeComponent);
    return DetailleMarcheeComponent;
}());
export { DetailleMarcheeComponent };
//# sourceMappingURL=detaille-marchee.component.js.map