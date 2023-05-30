import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var DetailleProgrammeComponent = /** @class */ (function () {
    function DetailleProgrammeComponent(router) {
        this.router = router;
    }
    DetailleProgrammeComponent.prototype.ngOnInit = function () {
    };
    DetailleProgrammeComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Programme/list-programme"]);
    };
    DetailleProgrammeComponent.prototype.PP = function () {
        this.router.navigate(["pages/Convention/detaille-convention"]);
    };
    DetailleProgrammeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detaille-programme',
            templateUrl: './detaille-programme.component.html',
            styleUrls: ['./detaille-programme.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleProgrammeComponent);
    return DetailleProgrammeComponent;
}());
export { DetailleProgrammeComponent };
//# sourceMappingURL=detaille-programme.component.js.map