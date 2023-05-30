import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddAvocatComponent = /** @class */ (function () {
    function AddAvocatComponent(router) {
        this.router = router;
    }
    AddAvocatComponent.prototype.ngOnInit = function () {
    };
    AddAvocatComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/avocat"]);
    };
    AddAvocatComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-avocat',
            templateUrl: './add-avocat.component.html',
            styleUrls: ['./add-avocat.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddAvocatComponent);
    return AddAvocatComponent;
}());
export { AddAvocatComponent };
//# sourceMappingURL=add-avocat.component.js.map