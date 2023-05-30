import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddConventionComponent = /** @class */ (function () {
    function AddConventionComponent(router) {
        this.router = router;
        this.isSelected = false;
    }
    AddConventionComponent.prototype.ngOnInit = function () { };
    AddConventionComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Convention/list-convention"]);
    };
    AddConventionComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-convention",
            templateUrl: "./add-convention.component.html",
            styleUrls: ["./add-convention.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddConventionComponent);
    return AddConventionComponent;
}());
export { AddConventionComponent };
//# sourceMappingURL=add-convention.component.js.map