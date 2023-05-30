import * as tslib_1 from "tslib";
// Angular
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var DeleteEntityDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<DeleteEntityDialogComponent>
     * @param data: any
     */
    function DeleteEntityDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Public properties
        this.viewLoading = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    DeleteEntityDialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * Close dialog with false result
     */
    DeleteEntityDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /**
     * Close dialog with true result
     */
    DeleteEntityDialogComponent.prototype.onYesClick = function () {
        var _this = this;
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        setTimeout(function () {
            _this.dialogRef.close(true); // Keep only this row
        }, 2500);
    };
    DeleteEntityDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-delete-entity-dialog',
            templateUrl: './delete-entity-dialog.component.html'
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], DeleteEntityDialogComponent);
    return DeleteEntityDialogComponent;
}());
export { DeleteEntityDialogComponent };
//# sourceMappingURL=delete-entity-dialog.component.js.map