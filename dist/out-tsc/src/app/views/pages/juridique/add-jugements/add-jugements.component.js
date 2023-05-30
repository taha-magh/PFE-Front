import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AddJugementsComponent = /** @class */ (function () {
    function AddJugementsComponent(router) {
        this.router = router;
    }
    AddJugementsComponent.prototype.ngOnInit = function () { };
    AddJugementsComponent.prototype.Back = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/show-affaire-judiciare",
        ]);
    };
    AddJugementsComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-jugements",
            templateUrl: "./add-jugements.component.html",
            styleUrls: ["./add-jugements.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddJugementsComponent);
    return AddJugementsComponent;
}());
export { AddJugementsComponent };
//# sourceMappingURL=add-jugements.component.js.map