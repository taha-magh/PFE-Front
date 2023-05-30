import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddStatusComponent = /** @class */ (function () {
    function AddStatusComponent(router) {
        this.router = router;
    }
    AddStatusComponent.prototype.ngOnInit = function () { };
    AddStatusComponent.prototype.Back = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/show-affaire-judiciare",
        ]);
    };
    AddStatusComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-status",
            templateUrl: "./add-status.component.html",
            styleUrls: ["./add-status.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddStatusComponent);
    return AddStatusComponent;
}());
export { AddStatusComponent };
//# sourceMappingURL=add-status.component.js.map