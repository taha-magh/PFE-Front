import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var DetailleProjetComponent = /** @class */ (function () {
    function DetailleProjetComponent(router) {
        this.router = router;
    }
    DetailleProjetComponent.prototype.ngOnInit = function () {
    };
    DetailleProjetComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Projet/list-projet"]);
    };
    DetailleProjetComponent.prototype.PP = function () {
        this.router.navigate(["pages/Convention/detaille-convention"]);
    };
    DetailleProjetComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detaille-projet',
            templateUrl: './detaille-projet.component.html',
            styleUrls: ['./detaille-projet.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleProjetComponent);
    return DetailleProjetComponent;
}());
export { DetailleProjetComponent };
//# sourceMappingURL=detaille-projet.component.js.map