import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditEspeceComponent = /** @class */ (function () {
    function EditEspeceComponent(router) {
        this.router = router;
    }
    EditEspeceComponent.prototype.ngOnInit = function () {
    };
    EditEspeceComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-espece"]);
    };
    EditEspeceComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-espece',
            templateUrl: './edit-espece.component.html',
            styleUrls: ['./edit-espece.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditEspeceComponent);
    return EditEspeceComponent;
}());
export { EditEspeceComponent };
//# sourceMappingURL=edit-espece.component.js.map