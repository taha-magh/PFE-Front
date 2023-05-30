import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddTableComponent = /** @class */ (function () {
    function AddTableComponent(router) {
        this.router = router;
    }
    AddTableComponent.prototype.ngOnInit = function () {
    };
    AddTableComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Convention/detaille-convention"]);
    };
    AddTableComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-table',
            templateUrl: './add-table.component.html',
            styleUrls: ['./add-table.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddTableComponent);
    return AddTableComponent;
}());
export { AddTableComponent };
//# sourceMappingURL=add-table.component.js.map