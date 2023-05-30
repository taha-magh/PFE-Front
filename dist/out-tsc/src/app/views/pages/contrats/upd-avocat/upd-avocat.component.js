import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdAvocatComponent = /** @class */ (function () {
    function UpdAvocatComponent(router) {
        this.router = router;
    }
    UpdAvocatComponent.prototype.ngOnInit = function () {
    };
    UpdAvocatComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/avocat"]);
    };
    UpdAvocatComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-avocat',
            templateUrl: './upd-avocat.component.html',
            styleUrls: ['./upd-avocat.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdAvocatComponent);
    return UpdAvocatComponent;
}());
export { UpdAvocatComponent };
//# sourceMappingURL=upd-avocat.component.js.map