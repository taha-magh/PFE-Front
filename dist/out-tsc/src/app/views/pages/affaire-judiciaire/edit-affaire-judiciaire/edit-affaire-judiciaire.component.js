import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var EditAffaireJudiciaireComponent = /** @class */ (function () {
    function EditAffaireJudiciaireComponent(router) {
        this.router = router;
    }
    EditAffaireJudiciaireComponent.prototype.ngOnInit = function () {
    };
    EditAffaireJudiciaireComponent.prototype.back = function () {
        this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
    };
    EditAffaireJudiciaireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-affaire-judiciaire',
            templateUrl: './edit-affaire-judiciaire.component.html',
            styleUrls: ['./edit-affaire-judiciaire.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditAffaireJudiciaireComponent);
    return EditAffaireJudiciaireComponent;
}());
export { EditAffaireJudiciaireComponent };
//# sourceMappingURL=edit-affaire-judiciaire.component.js.map