import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditAbsenceComponent = /** @class */ (function () {
    function EditAbsenceComponent(router) {
        this.router = router;
    }
    EditAbsenceComponent.prototype.ngOnInit = function () {
    };
    EditAbsenceComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/personnel/show-personnel"]);
    };
    EditAbsenceComponent.prototype.sanction = function () {
        this.router.navigate(["pages/personnel/appliquer-sanctions"]);
    };
    EditAbsenceComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-absence',
            templateUrl: './edit-absence.component.html',
            styleUrls: ['./edit-absence.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditAbsenceComponent);
    return EditAbsenceComponent;
}());
export { EditAbsenceComponent };
//# sourceMappingURL=edit-absence.component.js.map