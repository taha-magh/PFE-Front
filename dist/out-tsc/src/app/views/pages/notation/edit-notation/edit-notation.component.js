import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditNotationComponent = /** @class */ (function () {
    function EditNotationComponent(router) {
        this.router = router;
    }
    EditNotationComponent.prototype.ngOnInit = function () {
    };
    EditNotationComponent.prototype.back = function () {
        this.router.navigate(["pages/notation/list-notation"]);
    };
    EditNotationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-notation',
            templateUrl: './edit-notation.component.html',
            styleUrls: ['./edit-notation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditNotationComponent);
    return EditNotationComponent;
}());
export { EditNotationComponent };
//# sourceMappingURL=edit-notation.component.js.map