import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var ShowDemandeComponent = /** @class */ (function () {
    function ShowDemandeComponent(router) {
        this.router = router;
    }
    ShowDemandeComponent.prototype.ngOnInit = function () {
    };
    ShowDemandeComponent.prototype.back = function () {
        //this.location.back();
        this.router.navigate(["pages/demande/list-demandes"]);
    };
    ShowDemandeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-demande',
            templateUrl: './show-demande.component.html',
            styleUrls: ['./show-demande.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ShowDemandeComponent);
    return ShowDemandeComponent;
}());
export { ShowDemandeComponent };
//# sourceMappingURL=show-demande.component.js.map