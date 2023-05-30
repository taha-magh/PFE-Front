import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var ModificationTypeHangarComponent = /** @class */ (function () {
    function ModificationTypeHangarComponent(router) {
        this.router = router;
    }
    ModificationTypeHangarComponent.prototype.ngOnInit = function () {
    };
    ModificationTypeHangarComponent.prototype.RetourAudiance = function () {
        this.router.navigate(["pages/Marche/list-type-Hangar"]);
    };
    ModificationTypeHangarComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-modification-type-hangar',
            templateUrl: './modification-type-hangar.component.html',
            styleUrls: ['./modification-type-hangar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ModificationTypeHangarComponent);
    return ModificationTypeHangarComponent;
}());
export { ModificationTypeHangarComponent };
//# sourceMappingURL=modification-type-hangar.component.js.map