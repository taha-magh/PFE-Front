import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddPersonnelComponent = /** @class */ (function () {
    function AddPersonnelComponent(router) {
        this.router = router;
    }
    AddPersonnelComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/personnel/list-personnel"]);
    };
    AddPersonnelComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-personnel',
            templateUrl: './add-personnel.component.html',
            styleUrls: ['./add-personnel.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddPersonnelComponent);
    return AddPersonnelComponent;
}());
export { AddPersonnelComponent };
//# sourceMappingURL=add-personnel.component.js.map