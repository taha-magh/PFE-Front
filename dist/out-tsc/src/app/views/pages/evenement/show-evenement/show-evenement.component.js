import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var ShowEvenementComponent = /** @class */ (function () {
    function ShowEvenementComponent(router) {
        this.router = router;
    }
    ShowEvenementComponent.prototype.ngOnInit = function () { };
    ShowEvenementComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/evenement/list-evenement"]);
    };
    ShowEvenementComponent = tslib_1.__decorate([
        Component({
            selector: "kt-show-evenement",
            templateUrl: "./show-evenement.component.html",
            styleUrls: ["./show-evenement.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ShowEvenementComponent);
    return ShowEvenementComponent;
}());
export { ShowEvenementComponent };
//# sourceMappingURL=show-evenement.component.js.map