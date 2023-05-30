import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var EditChevillardComponent = /** @class */ (function () {
    function EditChevillardComponent(router) {
        this.router = router;
    }
    EditChevillardComponent.prototype.ngOnInit = function () {
    };
    EditChevillardComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-audiences"]);
    };
    EditChevillardComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-chevillard',
            templateUrl: './edit-chevillard.component.html',
            styleUrls: ['./edit-chevillard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditChevillardComponent);
    return EditChevillardComponent;
}());
export { EditChevillardComponent };
//# sourceMappingURL=edit-chevillard.component.js.map