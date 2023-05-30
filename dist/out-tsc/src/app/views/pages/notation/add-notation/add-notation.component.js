import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddNotationComponent = /** @class */ (function () {
    function AddNotationComponent(router) {
        this.router = router;
    }
    AddNotationComponent.prototype.ngOnInit = function () {
    };
    AddNotationComponent.prototype.back = function () {
        this.router.navigate(["pages/notation/list-notation"]);
    };
    AddNotationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-notation',
            templateUrl: './add-notation.component.html',
            styleUrls: ['./add-notation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddNotationComponent);
    return AddNotationComponent;
}());
export { AddNotationComponent };
//# sourceMappingURL=add-notation.component.js.map