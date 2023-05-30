import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewCourrierComponent } from '../new-courrier/new-courrier.component';
var ListCourriersComponent = /** @class */ (function () {
    function ListCourriersComponent(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    ListCourriersComponent.prototype.ngOnInit = function () {
    };
    ListCourriersComponent.prototype.new = function () {
        this.dialogRef.open(NewCourrierComponent);
    };
    ListCourriersComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-courriers',
            templateUrl: './list-courriers.component.html',
            styleUrls: ['./list-courriers.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, MatDialog])
    ], ListCourriersComponent);
    return ListCourriersComponent;
}());
export { ListCourriersComponent };
//# sourceMappingURL=list-courriers.component.js.map