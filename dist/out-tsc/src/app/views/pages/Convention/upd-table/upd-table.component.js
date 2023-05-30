import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdTableComponent = /** @class */ (function () {
    function UpdTableComponent(router) {
        this.router = router;
    }
    UpdTableComponent.prototype.ngOnInit = function () {
    };
    UpdTableComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Convention/detaille-convention"]);
    };
    UpdTableComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-table',
            templateUrl: './upd-table.component.html',
            styleUrls: ['./upd-table.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdTableComponent);
    return UpdTableComponent;
}());
export { UpdTableComponent };
//# sourceMappingURL=upd-table.component.js.map