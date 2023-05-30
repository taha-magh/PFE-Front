import * as tslib_1 from "tslib";
// Angular
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
// RxJS
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
var ActionNotificationComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param data: any
     */
    function ActionNotificationComponent(data) {
        this.data = data;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ActionNotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data.showUndoButton || (this.data.undoButtonDuration >= this.data.duration)) {
            return;
        }
        this.delayForUndoButton(this.data.undoButtonDuration).subscribe(function () {
            _this.data.showUndoButton = false;
        });
    };
    /*
     *	Returns delay
     *
     * @param timeToDelay: any
     */
    ActionNotificationComponent.prototype.delayForUndoButton = function (timeToDelay) {
        return of('').pipe(delay(timeToDelay));
    };
    /**
     * Dismiss with Action
     */
    ActionNotificationComponent.prototype.onDismissWithAction = function () {
        this.data.snackBar.dismiss();
    };
    /**
     * Dismiss
     */
    ActionNotificationComponent.prototype.onDismiss = function () {
        this.data.snackBar.dismiss();
    };
    ActionNotificationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-action-natification',
            templateUrl: './action-notification.component.html',
            changeDetection: ChangeDetectionStrategy.Default
        }),
        tslib_1.__param(0, Inject(MAT_SNACK_BAR_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ActionNotificationComponent);
    return ActionNotificationComponent;
}());
export { ActionNotificationComponent };
//# sourceMappingURL=action-notification.component.js.map