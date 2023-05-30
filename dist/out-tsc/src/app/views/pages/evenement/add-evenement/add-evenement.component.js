import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddEvenementComponent = /** @class */ (function () {
    function AddEvenementComponent(router) {
        this.router = router;
    }
    AddEvenementComponent.prototype.ngOnInit = function () {
    };
    AddEvenementComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/evenement/list-evenement"]);
    };
    AddEvenementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-evenement',
            templateUrl: './add-evenement.component.html',
            styleUrls: ['./add-evenement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddEvenementComponent);
    return AddEvenementComponent;
}());
export { AddEvenementComponent };
//# sourceMappingURL=add-evenement.component.js.map