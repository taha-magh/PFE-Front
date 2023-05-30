import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddProjetComponent = /** @class */ (function () {
    function AddProjetComponent(router) {
        this.router = router;
        this.isVisible = 0;
        this.Visible = 0;
        this.isSelected = false;
    }
    AddProjetComponent.prototype.ngOnInit = function () {
    };
    AddProjetComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Projet/list-projet"]);
    };
    AddProjetComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-projet',
            templateUrl: './add-projet.component.html',
            styleUrls: ['./add-projet.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddProjetComponent);
    return AddProjetComponent;
}());
export { AddProjetComponent };
//# sourceMappingURL=add-projet.component.js.map