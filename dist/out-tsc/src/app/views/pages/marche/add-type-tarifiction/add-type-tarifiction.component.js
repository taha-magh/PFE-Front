import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddTypeTarifictionComponent = /** @class */ (function () {
    function AddTypeTarifictionComponent(router) {
        this.router = router;
    }
    AddTypeTarifictionComponent.prototype.ngOnInit = function () {
    };
    AddTypeTarifictionComponent.prototype.RetourJurdaction = function () {
        this.router.navigate(["pages/Marche/list-type-Tarifiction"]);
    };
    AddTypeTarifictionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-type-Tarifiction',
            templateUrl: './add-type-Tarifiction.component.html',
            styleUrls: ['./add-type-Tarifiction.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddTypeTarifictionComponent);
    return AddTypeTarifictionComponent;
}());
export { AddTypeTarifictionComponent };
//# sourceMappingURL=add-type-tarifiction.component.js.map