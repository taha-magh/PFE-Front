import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
var EditCotationComponent = /** @class */ (function () {
    function EditCotationComponent(router) {
        this.router = router;
    }
    EditCotationComponent.prototype.ngOnInit = function () {
    };
    EditCotationComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-cotation"]);
    };
    EditCotationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-cotation',
            templateUrl: './edit-cotation.component.html',
            styleUrls: ['./edit-cotation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditCotationComponent);
    return EditCotationComponent;
}());
export { EditCotationComponent };
//# sourceMappingURL=edit-cotation.component.js.map