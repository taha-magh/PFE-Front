import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var DetailleTableComponent = /** @class */ (function () {
    function DetailleTableComponent(router) {
        this.router = router;
    }
    DetailleTableComponent.prototype.ngOnInit = function () {
    };
    DetailleTableComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Convention/detaille-convention"]);
    };
    DetailleTableComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detaille-table',
            templateUrl: './detaille-table.component.html',
            styleUrls: ['./detaille-table.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleTableComponent);
    return DetailleTableComponent;
}());
export { DetailleTableComponent };
//# sourceMappingURL=detaille-table.component.js.map