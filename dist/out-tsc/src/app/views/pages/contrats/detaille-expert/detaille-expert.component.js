import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var DetailleExpertComponent = /** @class */ (function () {
    function DetailleExpertComponent(router) {
        this.router = router;
    }
    DetailleExpertComponent.prototype.ngOnInit = function () { };
    DetailleExpertComponent.prototype.Back = function () {
        this.router.navigate(["pages/contrats/expert"]);
    };
    DetailleExpertComponent = tslib_1.__decorate([
        Component({
            selector: "kt-detaille-expert",
            templateUrl: "./detaille-expert.component.html",
            styleUrls: ["./detaille-expert.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailleExpertComponent);
    return DetailleExpertComponent;
}());
export { DetailleExpertComponent };
//# sourceMappingURL=detaille-expert.component.js.map