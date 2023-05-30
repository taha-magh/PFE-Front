import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddTypeHangarComponent = /** @class */ (function () {
    function AddTypeHangarComponent(router) {
        this.router = router;
    }
    AddTypeHangarComponent.prototype.ngOnInit = function () {
    };
    AddTypeHangarComponent.prototype.RetourAudiance = function () {
        this.router.navigate(["pages/Marche/list-type-Hangar"]);
    };
    AddTypeHangarComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-type-Hangar',
            templateUrl: './add-type-Hangar.component.html',
            styleUrls: ['./add-type-Hangar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddTypeHangarComponent);
    return AddTypeHangarComponent;
}());
export { AddTypeHangarComponent };
//# sourceMappingURL=add-type-hangar.component.js.map