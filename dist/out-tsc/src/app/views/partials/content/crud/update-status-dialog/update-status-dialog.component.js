import * as tslib_1 from "tslib";
// Angular
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
var UpdateStatusDialogComponent = /** @class */ (function () {
    function UpdateStatusDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.selectedStatusForUpdate = new FormControl('');
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
    }
    UpdateStatusDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        setTimeout(function () {
            _this.viewLoading = false;
        }, 2500);
    };
    UpdateStatusDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UpdateStatusDialogComponent.prototype.updateStatus = function () {
        var _this = this;
        if (this.selectedStatusForUpdate.value.length === 0) {
            return;
        }
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        this.loadingAfterSubmit = true;
        setTimeout(function () {
            _this.dialogRef.close(_this.selectedStatusForUpdate.value); // Keep only this row
        }, 2500);
    };
    UpdateStatusDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-update-status-dialog',
            templateUrl: './update-status-dialog.component.html'
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], UpdateStatusDialogComponent);
    return UpdateStatusDialogComponent;
}());
export { UpdateStatusDialogComponent };
//# sourceMappingURL=update-status-dialog.component.js.map