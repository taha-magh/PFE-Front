import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddProgrammeComponent = /** @class */ (function () {
    function AddProgrammeComponent(router) {
        this.router = router;
        this.Visible = 0;
        this.isSelected = false;
    }
    AddProgrammeComponent.prototype.ngOnInit = function () {
    };
    AddProgrammeComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Programme/list-programme"]);
    };
    AddProgrammeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-programme',
            templateUrl: './add-programme.component.html',
            styleUrls: ['./add-programme.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddProgrammeComponent);
    return AddProgrammeComponent;
}());
export { AddProgrammeComponent };
//# sourceMappingURL=add-programme.component.js.map