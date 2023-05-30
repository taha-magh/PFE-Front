import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddSousEspeceComponent = /** @class */ (function () {
    function AddSousEspeceComponent(router) {
        this.router = router;
    }
    AddSousEspeceComponent.prototype.ngOnInit = function () {
    };
    AddSousEspeceComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-sous-espece"]);
    };
    AddSousEspeceComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-sous-espece',
            templateUrl: './add-sous-espece.component.html',
            styleUrls: ['./add-sous-espece.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddSousEspeceComponent);
    return AddSousEspeceComponent;
}());
export { AddSousEspeceComponent };
//# sourceMappingURL=add-sous-espece.component.js.map