import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var EditDemandeComponent = /** @class */ (function () {
    function EditDemandeComponent(router) {
        this.router = router;
        this.isVisible = 1;
        this.isVisible1 = 2;
        this.isSelected = true;
        this.isSelected1 = true;
    }
    EditDemandeComponent.prototype.ngOnInit = function () {
    };
    EditDemandeComponent.prototype.EtapeSuivant = function () {
        this.router.navigate(["pages/demande/edit-demande-etape2"]);
    };
    EditDemandeComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/demande/list-demandes"]);
    };
    EditDemandeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-demande',
            templateUrl: './edit-demande.component.html',
            styleUrls: ['./edit-demande.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditDemandeComponent);
    return EditDemandeComponent;
}());
export { EditDemandeComponent };
//# sourceMappingURL=edit-demande.component.js.map