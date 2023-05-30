import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditPersonnelComponent = /** @class */ (function () {
    function EditPersonnelComponent(router) {
        this.router = router;
    }
    EditPersonnelComponent.prototype.ngOnInit = function () {
    };
    EditPersonnelComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/personnel/list-personnel"]);
    };
    EditPersonnelComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-personnel',
            templateUrl: './edit-personnel.component.html',
            styleUrls: ['./edit-personnel.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditPersonnelComponent);
    return EditPersonnelComponent;
}());
export { EditPersonnelComponent };
//# sourceMappingURL=edit-personnel.component.js.map