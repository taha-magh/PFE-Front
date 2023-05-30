import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddTarifsComponent = /** @class */ (function () {
    function AddTarifsComponent(router) {
        this.router = router;
    }
    AddTarifsComponent.prototype.ngOnInit = function () {
    };
    AddTarifsComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-tarifs"]);
    };
    AddTarifsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-tarifs',
            templateUrl: './add-tarifs.component.html',
            styleUrls: ['./add-tarifs.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddTarifsComponent);
    return AddTarifsComponent;
}());
export { AddTarifsComponent };
//# sourceMappingURL=add-tarifs.component.js.map