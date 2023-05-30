import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SpinnerViewComponent } from './spinner/spinner-view/spinner-view.component';
var SpinnerService = /** @class */ (function () {
    function SpinnerService(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    SpinnerService.prototype.start = function (message) {
        var dialogRef = this.dialog.open(SpinnerViewComponent, {
            disableClose: true,
            data: message == '' || message == undefined ? "Loading..." : message
        });
        return dialogRef;
    };
    ;
    SpinnerService.prototype.stop = function (ref) {
        ref.close();
    };
    SpinnerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, MatDialog])
    ], SpinnerService);
    return SpinnerService;
}());
export { SpinnerService };
//# sourceMappingURL=spinner.service.js.map