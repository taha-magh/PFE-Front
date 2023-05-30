import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var DetailleAvocatComponent = /** @class */ (function () {
    function DetailleAvocatComponent(router) {
        this.router = router;
    }
    DetailleAvocatComponent.prototype.ngOnInit = function () {
    };
    DetailleAvocatComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/avocat"]);
    };
    DetailleAvocatComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detaille-avocat',
            templateUrl: './detaille-avocat.component.html',
            styleUrls: ['./detaille-avocat.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleAvocatComponent);
    return DetailleAvocatComponent;
}());
export { DetailleAvocatComponent };
//# sourceMappingURL=detaille-avocat.component.js.map