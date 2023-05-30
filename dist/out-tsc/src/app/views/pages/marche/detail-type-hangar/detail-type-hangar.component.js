import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var DetailTypeHangarComponent = /** @class */ (function () {
    function DetailTypeHangarComponent(router) {
        this.router = router;
    }
    DetailTypeHangarComponent.prototype.ngOnInit = function () {
    };
    DetailTypeHangarComponent.prototype.RetourAudiance = function () {
        this.router.navigate(["pages/Marche/list-type-Hangar"]);
    };
    DetailTypeHangarComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detail-type-hangar',
            templateUrl: './detail-type-hangar.component.html',
            styleUrls: ['./detail-type-hangar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailTypeHangarComponent);
    return DetailTypeHangarComponent;
}());
export { DetailTypeHangarComponent };
//# sourceMappingURL=detail-type-hangar.component.js.map