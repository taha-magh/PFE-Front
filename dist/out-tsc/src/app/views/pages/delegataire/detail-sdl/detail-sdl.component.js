import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var DetailSdlComponent = /** @class */ (function () {
    function DetailSdlComponent(router) {
        this.router = router;
    }
    DetailSdlComponent.prototype.ngOnInit = function () {
        this.details = {
            num: "1/2022",
            nom: "nom affaire 1 ",
            defendresse: "Test",
            tribunal: "Tech ",
            typeAffaire: "Administratif",
            demandresse: "Partie  ",
            dateDepot: "01-12-2019",
            dateDebut: "01-01-2020",
            objet: "Objet d'affaire",
            ville: "Rabat",
        };
    };
    DetailSdlComponent.prototype.Back = function () {
        this.router.navigate(["pages/delegataire/sdl"]);
    };
    DetailSdlComponent = tslib_1.__decorate([
        Component({
            selector: "kt-detail-sdl",
            templateUrl: "./detail-sdl.component.html",
            styleUrls: ["./detail-sdl.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DetailSdlComponent);
    return DetailSdlComponent;
}());
export { DetailSdlComponent };
//# sourceMappingURL=detail-sdl.component.js.map