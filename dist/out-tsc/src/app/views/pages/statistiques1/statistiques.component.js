import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var StatistiquesComponent = /** @class */ (function () {
    function StatistiquesComponent(route) {
        this.route = route;
    }
    StatistiquesComponent.prototype.go = function () {
        this.route.navigate(['/dashboard']); // navigate to other page
    };
    StatistiquesComponent.prototype.ngOnInit = function () {
    };
    StatistiquesComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-statistiques',
            templateUrl: './statistiques.component.html',
            styleUrls: ['./statistiques.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], StatistiquesComponent);
    return StatistiquesComponent;
}());
export { StatistiquesComponent };
//# sourceMappingURL=statistiques.component.js.map