import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ListAbsenceComponent = /** @class */ (function () {
    function ListAbsenceComponent(router) {
        this.router = router;
    }
    ListAbsenceComponent.prototype.ngOnInit = function () {
    };
    ListAbsenceComponent.prototype.back = function () {
        //this.location.back();
        this.router.navigate(["pages/personnel/show-personnel"]);
    };
    ListAbsenceComponent.prototype.add_absence = function () {
        this.router.navigate(["pages/personnel/add-absence"]);
    };
    ListAbsenceComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-absence',
            templateUrl: './list-absence.component.html',
            styleUrls: ['./list-absence.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ListAbsenceComponent);
    return ListAbsenceComponent;
}());
export { ListAbsenceComponent };
//# sourceMappingURL=list-absence.component.js.map