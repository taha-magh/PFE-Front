import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var EditEvenementComponent = /** @class */ (function () {
    function EditEvenementComponent(router) {
        this.router = router;
    }
    EditEvenementComponent.prototype.ngOnInit = function () {
    };
    EditEvenementComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/evenement/list-evenement"]);
    };
    EditEvenementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-evenement',
            templateUrl: './edit-evenement.component.html',
            styleUrls: ['./edit-evenement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditEvenementComponent);
    return EditEvenementComponent;
}());
export { EditEvenementComponent };
//# sourceMappingURL=edit-evenement.component.js.map