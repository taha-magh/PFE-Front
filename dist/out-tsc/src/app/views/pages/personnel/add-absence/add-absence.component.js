import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddAbsenceComponent = /** @class */ (function () {
    function AddAbsenceComponent(router) {
        this.router = router;
    }
    AddAbsenceComponent.prototype.ngOnInit = function () { };
    AddAbsenceComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/personnel/show-personnel"]);
    };
    AddAbsenceComponent.prototype.sanction = function () {
        this.router.navigate(["pages/personnel/appliquer-sanctions"]);
    };
    AddAbsenceComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-absence",
            templateUrl: "./add-absence.component.html",
            styleUrls: ["./add-absence.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddAbsenceComponent);
    return AddAbsenceComponent;
}());
export { AddAbsenceComponent };
//# sourceMappingURL=add-absence.component.js.map