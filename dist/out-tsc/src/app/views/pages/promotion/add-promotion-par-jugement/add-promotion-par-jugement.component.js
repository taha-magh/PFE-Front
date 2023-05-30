import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddPromotionParJugementComponent = /** @class */ (function () {
    function AddPromotionParJugementComponent(router) {
        this.router = router;
    }
    AddPromotionParJugementComponent.prototype.ngOnInit = function () {
    };
    AddPromotionParJugementComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/promotion/list-promotion"]);
    };
    AddPromotionParJugementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-promotion-par-jugement',
            templateUrl: './add-promotion-par-jugement.component.html',
            styleUrls: ['./add-promotion-par-jugement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddPromotionParJugementComponent);
    return AddPromotionParJugementComponent;
}());
export { AddPromotionParJugementComponent };
//# sourceMappingURL=add-promotion-par-jugement.component.js.map