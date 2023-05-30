import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddPeseeComponent = /** @class */ (function () {
    function AddPeseeComponent(router) {
        this.router = router;
    }
    AddPeseeComponent.prototype.ngOnInit = function () { };
    AddPeseeComponent.prototype.EtapeSuivant = function () {
        this.router.navigate(["pages/pesee/add-pesee-etape2"]);
    };
    AddPeseeComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/pesee/list-pesees"]);
    };
    AddPeseeComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-pesee",
            templateUrl: "./add-pesee.component.html",
            styleUrls: ["./add-pesee.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddPeseeComponent);
    return AddPeseeComponent;
}());
export { AddPeseeComponent };
//# sourceMappingURL=add-pesee.component.js.map