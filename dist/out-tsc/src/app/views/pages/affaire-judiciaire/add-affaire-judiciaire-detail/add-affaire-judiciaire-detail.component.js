import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddAffaireJudiciaireDetailComponent = /** @class */ (function () {
    function AddAffaireJudiciaireDetailComponent(router) {
        this.router = router;
    }
    AddAffaireJudiciaireDetailComponent.prototype.ngOnInit = function () {
    };
    AddAffaireJudiciaireDetailComponent.prototype.back = function () {
        this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
    };
    AddAffaireJudiciaireDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-affaire-judiciaire-detail',
            templateUrl: './add-affaire-judiciaire-detail.component.html',
            styleUrls: ['./add-affaire-judiciaire-detail.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddAffaireJudiciaireDetailComponent);
    return AddAffaireJudiciaireDetailComponent;
}());
export { AddAffaireJudiciaireDetailComponent };
//# sourceMappingURL=add-affaire-judiciaire-detail.component.js.map