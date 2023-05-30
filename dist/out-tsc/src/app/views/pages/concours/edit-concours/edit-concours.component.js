import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditConcoursComponent = /** @class */ (function () {
    function EditConcoursComponent(router) {
        this.router = router;
    }
    EditConcoursComponent.prototype.ngOnInit = function () {
    };
    EditConcoursComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/concours/list-concours"]);
    };
    EditConcoursComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-concours',
            templateUrl: './edit-concours.component.html',
            styleUrls: ['./edit-concours.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditConcoursComponent);
    return EditConcoursComponent;
}());
export { EditConcoursComponent };
//# sourceMappingURL=edit-concours.component.js.map