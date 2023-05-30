import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var UpdProjetComponent = /** @class */ (function () {
    function UpdProjetComponent(router) {
        this.router = router;
        this.Visible = 1;
        this.isVisible = 1;
        this.isSelected = true;
    }
    UpdProjetComponent.prototype.ngOnInit = function () {
    };
    UpdProjetComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Projet/list-projet"]);
    };
    UpdProjetComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-projet',
            templateUrl: './upd-projet.component.html',
            styleUrls: ['./upd-projet.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdProjetComponent);
    return UpdProjetComponent;
}());
export { UpdProjetComponent };
//# sourceMappingURL=upd-projet.component.js.map