import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditCongeComponent = /** @class */ (function () {
    function EditCongeComponent(router) {
        this.router = router;
    }
    EditCongeComponent.prototype.ngOnInit = function () {
    };
    EditCongeComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/conge/list-conge"]);
    };
    EditCongeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-conge',
            templateUrl: './edit-conge.component.html',
            styleUrls: ['./edit-conge.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditCongeComponent);
    return EditCongeComponent;
}());
export { EditCongeComponent };
//# sourceMappingURL=edit-conge.component.js.map