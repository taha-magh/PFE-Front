import * as tslib_1 from "tslib";
// Angular
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var FetchEntityDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<FetchEntityDialogComponent>,
     * @param data: any
     */
    function FetchEntityDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * Close dialog with false result
     */
    FetchEntityDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /** UI */
    /**
     * Returns CSS Class Name by status type
     * @param status: number
     */
    FetchEntityDialogComponent.prototype.getItemCssClassByStatus = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0: return 'success';
            case 1: return 'metal';
            case 2: return 'danger';
            default: return 'success';
        }
    };
    FetchEntityDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-fetch-entity-dialog',
            templateUrl: './fetch-entity-dialog.component.html'
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], FetchEntityDialogComponent);
    return FetchEntityDialogComponent;
}());
export { FetchEntityDialogComponent };
//# sourceMappingURL=fetch-entity-dialog.component.js.map