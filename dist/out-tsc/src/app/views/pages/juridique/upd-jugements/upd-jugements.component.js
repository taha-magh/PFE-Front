import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdJugementsComponent = /** @class */ (function () {
    function UpdJugementsComponent(router) {
        this.router = router;
    }
    UpdJugementsComponent.prototype.ngOnInit = function () {
    };
    UpdJugementsComponent.prototype.Back = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/show-affaire-judiciare",
        ]);
    };
    UpdJugementsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-upd-jugements',
            templateUrl: './upd-jugements.component.html',
            styleUrls: ['./upd-jugements.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdJugementsComponent);
    return UpdJugementsComponent;
}());
export { UpdJugementsComponent };
//# sourceMappingURL=upd-jugements.component.js.map