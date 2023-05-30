import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdEvenementComponent = /** @class */ (function () {
    function UpdEvenementComponent(router) {
        this.router = router;
    }
    UpdEvenementComponent.prototype.ngOnInit = function () {
    };
    UpdEvenementComponent.prototype.Back = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/show-affaire-judiciare",
        ]);
    };
    UpdEvenementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-evenement',
            templateUrl: './upd-evenement.component.html',
            styleUrls: ['./upd-evenement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdEvenementComponent);
    return UpdEvenementComponent;
}());
export { UpdEvenementComponent };
//# sourceMappingURL=upd-evenement.component.js.map