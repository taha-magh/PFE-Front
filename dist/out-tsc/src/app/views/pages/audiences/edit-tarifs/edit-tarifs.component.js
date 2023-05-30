import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditTarifsComponent = /** @class */ (function () {
    function EditTarifsComponent(router) {
        this.router = router;
    }
    EditTarifsComponent.prototype.ngOnInit = function () {
    };
    EditTarifsComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-tarifs"]);
    };
    EditTarifsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-tarifs',
            templateUrl: './edit-tarifs.component.html',
            styleUrls: ['./edit-tarifs.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditTarifsComponent);
    return EditTarifsComponent;
}());
export { EditTarifsComponent };
//# sourceMappingURL=edit-tarifs.component.js.map