import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditSanctionsComponent = /** @class */ (function () {
    function EditSanctionsComponent(router) {
        this.router = router;
    }
    EditSanctionsComponent.prototype.ngOnInit = function () {
    };
    EditSanctionsComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/personnel/show-personnel"]);
    };
    EditSanctionsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-sanctions',
            templateUrl: './edit-sanctions.component.html',
            styleUrls: ['./edit-sanctions.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditSanctionsComponent);
    return EditSanctionsComponent;
}());
export { EditSanctionsComponent };
//# sourceMappingURL=edit-sanctions.component.js.map