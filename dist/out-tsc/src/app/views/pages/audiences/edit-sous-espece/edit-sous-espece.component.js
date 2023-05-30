import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditSousEspeceComponent = /** @class */ (function () {
    function EditSousEspeceComponent(router) {
        this.router = router;
    }
    EditSousEspeceComponent.prototype.ngOnInit = function () {
    };
    EditSousEspeceComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-sous-espece"]);
    };
    EditSousEspeceComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-sous-espece',
            templateUrl: './edit-sous-espece.component.html',
            styleUrls: ['./edit-sous-espece.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditSousEspeceComponent);
    return EditSousEspeceComponent;
}());
export { EditSousEspeceComponent };
//# sourceMappingURL=edit-sous-espece.component.js.map