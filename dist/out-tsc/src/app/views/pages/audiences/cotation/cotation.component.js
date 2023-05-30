import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var CotationComponent = /** @class */ (function () {
    function CotationComponent(router) {
        this.router = router;
    }
    CotationComponent.prototype.ngOnInit = function () {
    };
    CotationComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-cotation"]);
    };
    CotationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-cotation',
            templateUrl: './cotation.component.html',
            styleUrls: ['./cotation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], CotationComponent);
    return CotationComponent;
}());
export { CotationComponent };
//# sourceMappingURL=cotation.component.js.map