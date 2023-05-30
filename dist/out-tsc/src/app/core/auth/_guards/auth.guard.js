import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
import { isLoggedIn } from '../_selectors/auth.selectors';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.store
            .pipe(select(isLoggedIn), tap(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigateByUrl('/auth/login');
            }
        }));
    };
    AuthGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Store, Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map