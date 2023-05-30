import * as tslib_1 from "tslib";
// Angular
import { ChangeDetectorRef, Component, Output } from '@angular/core';
// Auth
import { AuthNoticeService } from '../../../../core/auth/';
var AuthNoticeComponent = /** @class */ (function () {
    /**
     * Component Constructure
     *
     * @param authNoticeService
     * @param cdr
     */
    function AuthNoticeComponent(authNoticeService, cdr) {
        this.authNoticeService = authNoticeService;
        this.cdr = cdr;
        this.message = '';
        // Private properties
        this.subscriptions = [];
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    AuthNoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.authNoticeService.onNoticeChanged$.subscribe(function (notice) {
            notice = Object.assign({}, { message: '', type: '' }, notice);
            _this.message = notice.message;
            _this.type = notice.type;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * On destroy
     */
    AuthNoticeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "message", void 0);
    AuthNoticeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-auth-notice',
            templateUrl: './auth-notice.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [AuthNoticeService, ChangeDetectorRef])
    ], AuthNoticeComponent);
    return AuthNoticeComponent;
}());
export { AuthNoticeComponent };
//# sourceMappingURL=auth-notice.component.js.map