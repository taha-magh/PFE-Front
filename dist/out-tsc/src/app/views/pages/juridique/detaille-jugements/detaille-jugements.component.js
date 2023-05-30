import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var DetailleJugementsComponent = /** @class */ (function () {
    function DetailleJugementsComponent(router) {
        this.router = router;
    }
    DetailleJugementsComponent.prototype.ngOnInit = function () {
    };
    DetailleJugementsComponent.prototype.Back = function () {
        this.router.navigate(["pages/juridique/jugements"]);
    };
    DetailleJugementsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detaille-jugements',
            templateUrl: './detaille-jugements.component.html',
            styleUrls: ['./detaille-jugements.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleJugementsComponent);
    return DetailleJugementsComponent;
}());
export { DetailleJugementsComponent };
//# sourceMappingURL=detaille-jugements.component.js.map