import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ShowCongeComponent = /** @class */ (function () {
    function ShowCongeComponent(router) {
        this.router = router;
    }
    ShowCongeComponent.prototype.ngOnInit = function () {
    };
    ShowCongeComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/conge/list-conge"]);
    };
    ShowCongeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-conge',
            templateUrl: './show-conge.component.html',
            styleUrls: ['./show-conge.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ShowCongeComponent);
    return ShowCongeComponent;
}());
export { ShowCongeComponent };
//# sourceMappingURL=show-conge.component.js.map