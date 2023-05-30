import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var AuthNoticeService = /** @class */ (function () {
    function AuthNoticeService() {
        this.onNoticeChanged$ = new BehaviorSubject(null);
    }
    AuthNoticeService.prototype.setNotice = function (message, type) {
        var notice = {
            message: message,
            type: type
        };
        this.onNoticeChanged$.next(notice);
    };
    AuthNoticeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthNoticeService);
    return AuthNoticeService;
}());
export { AuthNoticeService };
//# sourceMappingURL=auth-notice.service.js.map