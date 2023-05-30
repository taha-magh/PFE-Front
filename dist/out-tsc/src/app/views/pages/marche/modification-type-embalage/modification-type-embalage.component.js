import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var ModificationTypeEmbalageComponent = /** @class */ (function () {
    function ModificationTypeEmbalageComponent(router) {
        this.router = router;
    }
    ModificationTypeEmbalageComponent.prototype.ngOnInit = function () {
    };
    ModificationTypeEmbalageComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Marche/list-type-embalage"]);
    };
    ModificationTypeEmbalageComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-type-embalage',
            templateUrl: './modification-type-embalage.component.html',
            styleUrls: ['./modification-type-embalage.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ModificationTypeEmbalageComponent);
    return ModificationTypeEmbalageComponent;
}());
export { ModificationTypeEmbalageComponent };
//# sourceMappingURL=modification-type-embalage.component.js.map