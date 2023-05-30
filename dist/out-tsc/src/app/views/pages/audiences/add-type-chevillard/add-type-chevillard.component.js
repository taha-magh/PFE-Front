import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddTypeChevillardComponent = /** @class */ (function () {
    function AddTypeChevillardComponent(router) {
        this.router = router;
    }
    AddTypeChevillardComponent.prototype.ngOnInit = function () {
    };
    AddTypeChevillardComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-audiences"]);
    };
    AddTypeChevillardComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-type-chevillard',
            templateUrl: './add-type-chevillard.component.html',
            styleUrls: ['./add-type-chevillard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddTypeChevillardComponent);
    return AddTypeChevillardComponent;
}());
export { AddTypeChevillardComponent };
//# sourceMappingURL=add-type-chevillard.component.js.map