import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var EvenementComponent = /** @class */ (function () {
    function EvenementComponent(router) {
        this.router = router;
        this.calendarOptions = {
            initialView: "dayGridMonth",
            events: [
                { title: "event 1", date: "2022-09-01" },
                { title: "event 2", date: "2022-09-15" },
            ],
        };
    }
    EvenementComponent.prototype.addEvenement = function () {
        this.router.navigate(["pages/juridique/add-evenement"]);
    };
    EvenementComponent.prototype.ngOnInit = function () { };
    EvenementComponent = tslib_1.__decorate([
        Component({
            selector: "kt-evenement",
            templateUrl: "./evenement.component.html",
            styleUrls: ["./evenement.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EvenementComponent);
    return EvenementComponent;
}());
export { EvenementComponent };
//# sourceMappingURL=evenement.component.js.map