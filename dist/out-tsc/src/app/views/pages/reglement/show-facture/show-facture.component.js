import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var ShowFactureComponent = /** @class */ (function () {
    function ShowFactureComponent(router) {
        this.router = router;
    }
    ShowFactureComponent.prototype.ngOnInit = function () {
    };
    ShowFactureComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/reglement/list-factures"]);
    };
    ShowFactureComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-facture',
            templateUrl: './show-facture.component.html',
            styleUrls: ['./show-facture.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ShowFactureComponent);
    return ShowFactureComponent;
}());
export { ShowFactureComponent };
//# sourceMappingURL=show-facture.component.js.map