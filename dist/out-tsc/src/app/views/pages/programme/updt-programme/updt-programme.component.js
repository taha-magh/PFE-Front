import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdtProgrammeComponent = /** @class */ (function () {
    function UpdtProgrammeComponent(router) {
        this.router = router;
    }
    UpdtProgrammeComponent.prototype.ngOnInit = function () {
    };
    UpdtProgrammeComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Programme/list-programme"]);
    };
    UpdtProgrammeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-updt-programme',
            templateUrl: './updt-programme.component.html',
            styleUrls: ['./updt-programme.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdtProgrammeComponent);
    return UpdtProgrammeComponent;
}());
export { UpdtProgrammeComponent };
//# sourceMappingURL=updt-programme.component.js.map