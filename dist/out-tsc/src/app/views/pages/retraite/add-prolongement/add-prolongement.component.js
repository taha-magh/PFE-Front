import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddProlongementComponent = /** @class */ (function () {
    function AddProlongementComponent(router) {
        this.router = router;
    }
    AddProlongementComponent.prototype.ngOnInit = function () {
    };
    AddProlongementComponent.prototype.back = function () {
        this.router.navigate(["pages/retraite/list-retraite"]);
    };
    AddProlongementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-prolongement',
            templateUrl: './add-prolongement.component.html',
            styleUrls: ['./add-prolongement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddProlongementComponent);
    return AddProlongementComponent;
}());
export { AddProlongementComponent };
//# sourceMappingURL=add-prolongement.component.js.map