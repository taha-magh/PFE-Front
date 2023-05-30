import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var SpinnerViewComponent = /** @class */ (function () {
    function SpinnerViewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SpinnerViewComponent.prototype.ngOnInit = function () {
    };
    SpinnerViewComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-spinner-view',
            templateUrl: './spinner-view.component.html',
            styleUrls: ['./spinner-view.component.scss']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], SpinnerViewComponent);
    return SpinnerViewComponent;
}());
export { SpinnerViewComponent };
//# sourceMappingURL=spinner-view.component.js.map