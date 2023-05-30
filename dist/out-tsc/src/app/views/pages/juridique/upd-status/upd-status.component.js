import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdStatusComponent = /** @class */ (function () {
    function UpdStatusComponent(router) {
        this.router = router;
    }
    UpdStatusComponent.prototype.ngOnInit = function () {
    };
    UpdStatusComponent.prototype.Back = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/show-affaire-judiciare",
        ]);
    };
    UpdStatusComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-status',
            templateUrl: './upd-status.component.html',
            styleUrls: ['./upd-status.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdStatusComponent);
    return UpdStatusComponent;
}());
export { UpdStatusComponent };
//# sourceMappingURL=upd-status.component.js.map