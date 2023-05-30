import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddTypeEmbalageComponent = /** @class */ (function () {
    function AddTypeEmbalageComponent(router) {
        this.router = router;
    }
    AddTypeEmbalageComponent.prototype.ngOnInit = function () {
    };
    AddTypeEmbalageComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Marche/list-type-embalage"]);
    };
    AddTypeEmbalageComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-type-embalage',
            templateUrl: './add-type-embalage.component.html',
            styleUrls: ['./add-type-embalage.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddTypeEmbalageComponent);
    return AddTypeEmbalageComponent;
}());
export { AddTypeEmbalageComponent };
//# sourceMappingURL=add-type-embalage.component.js.map