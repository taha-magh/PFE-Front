import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AddDemandeRetraiteComponent = /** @class */ (function () {
    function AddDemandeRetraiteComponent(router) {
        this.router = router;
    }
    AddDemandeRetraiteComponent.prototype.ngOnInit = function () {
    };
    AddDemandeRetraiteComponent.prototype.back = function () {
        this.router.navigate(["pages/retraite/list-retraite"]);
    };
    AddDemandeRetraiteComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-demande-retraite',
            templateUrl: './add-demande-retraite.component.html',
            styleUrls: ['./add-demande-retraite.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AddDemandeRetraiteComponent);
    return AddDemandeRetraiteComponent;
}());
export { AddDemandeRetraiteComponent };
//# sourceMappingURL=add-demande-retraite.component.js.map