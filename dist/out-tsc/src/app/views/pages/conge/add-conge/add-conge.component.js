import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddCongeComponent = /** @class */ (function () {
    function AddCongeComponent(router) {
        this.router = router;
    }
    AddCongeComponent.prototype.ngOnInit = function () {
    };
    AddCongeComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/conge/list-conge"]);
    };
    AddCongeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-conge',
            templateUrl: './add-conge.component.html',
            styleUrls: ['./add-conge.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddCongeComponent);
    return AddCongeComponent;
}());
export { AddCongeComponent };
//# sourceMappingURL=add-conge.component.js.map