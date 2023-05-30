import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var AddAffaireJudiciaireComponent = /** @class */ (function () {
    function AddAffaireJudiciaireComponent(router) {
        this.router = router;
    }
    AddAffaireJudiciaireComponent.prototype.ngOnInit = function () {
    };
    AddAffaireJudiciaireComponent.prototype.back = function () {
        this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
    };
    AddAffaireJudiciaireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-affaire-judiciaire',
            templateUrl: './add-affaire-judiciaire.component.html',
            styleUrls: ['./add-affaire-judiciaire.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddAffaireJudiciaireComponent);
    return AddAffaireJudiciaireComponent;
}());
export { AddAffaireJudiciaireComponent };
//# sourceMappingURL=add-affaire-judiciaire.component.js.map