import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddConcoursComponent = /** @class */ (function () {
    function AddConcoursComponent(router) {
        this.router = router;
    }
    AddConcoursComponent.prototype.ngOnInit = function () {
    };
    AddConcoursComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/concours/list-concours"]);
    };
    AddConcoursComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-concours',
            templateUrl: './add-concours.component.html',
            styleUrls: ['./add-concours.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddConcoursComponent);
    return AddConcoursComponent;
}());
export { AddConcoursComponent };
//# sourceMappingURL=add-concours.component.js.map