import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ShowConcoursComponent = /** @class */ (function () {
    function ShowConcoursComponent(router) {
        this.router = router;
    }
    ShowConcoursComponent.prototype.ngOnInit = function () {
    };
    ShowConcoursComponent.prototype.back = function () {
        this.router.navigate(["pages/concours/list-concours"]);
    };
    ShowConcoursComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-concours',
            templateUrl: './show-concours.component.html',
            styleUrls: ['./show-concours.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ShowConcoursComponent);
    return ShowConcoursComponent;
}());
export { ShowConcoursComponent };
//# sourceMappingURL=show-concours.component.js.map