import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddEspeceComponent = /** @class */ (function () {
    function AddEspeceComponent(router) {
        this.router = router;
    }
    AddEspeceComponent.prototype.ngOnInit = function () {
    };
    AddEspeceComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-espece"]);
    };
    AddEspeceComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-espece',
            templateUrl: './add-espece.component.html',
            styleUrls: ['./add-espece.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddEspeceComponent);
    return AddEspeceComponent;
}());
export { AddEspeceComponent };
//# sourceMappingURL=add-espece.component.js.map