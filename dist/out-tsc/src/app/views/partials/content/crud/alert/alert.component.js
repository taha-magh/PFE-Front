import * as tslib_1 from "tslib";
// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.duration = 0;
        this.showCloseButton = true;
        this.close = new EventEmitter();
        this.alertShowing = true;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.duration === 0) {
            return;
        }
        setTimeout(function () {
            _this.closeAlert();
        }, this.duration);
    };
    /**
     * close alert
     */
    AlertComponent.prototype.closeAlert = function () {
        this.close.emit();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AlertComponent.prototype, "duration", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AlertComponent.prototype, "showCloseButton", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AlertComponent.prototype, "close", void 0);
    AlertComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-alert',
            templateUrl: './alert.component.html'
        })
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map