import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdMarcheeComponent = /** @class */ (function () {
    function UpdMarcheeComponent(router) {
        this.router = router;
        this.isVisible = 0;
        this.Presentation = 2;
        this.Visible = 0;
        this.Type = 2;
        this.B = 5;
        this.A = 2;
        this.selected = 'option 2';
        this.isSelected = false;
    }
    UpdMarcheeComponent.prototype.ngOnInit = function () {
    };
    UpdMarcheeComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Marchee/list-marche"]);
    };
    UpdMarcheeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-marchee',
            templateUrl: './upd-marchee.component.html',
            styleUrls: ['./upd-marchee.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdMarcheeComponent);
    return UpdMarcheeComponent;
}());
export { UpdMarcheeComponent };
//# sourceMappingURL=upd-marchee.component.js.map