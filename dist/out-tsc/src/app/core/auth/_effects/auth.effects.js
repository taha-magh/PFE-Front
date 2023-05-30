import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import { filter, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { defer, Observable, of } from 'rxjs';
// NGRX
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
// Auth actions
import { AuthActionTypes, Login, Logout, UserLoaded, UserRequested } from '../_actions/auth.actions';
import { AuthService } from '../_services/index';
import { environment } from '../../../../environments/environment';
import { isUserLoaded } from '../_selectors/auth.selectors';
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, router, auth, store) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.login$ = this.actions$.pipe(ofType(AuthActionTypes.Login), tap(function (action) {
            localStorage.setItem(environment.authTokenKey, action.payload.authToken);
            _this.store.dispatch(new UserRequested());
        }));
        this.logout$ = this.actions$.pipe(ofType(AuthActionTypes.Logout), tap(function () {
            localStorage.removeItem(environment.authTokenKey);
            localStorage.removeItem('menu');
            localStorage.removeItem('layoutConfig');
            location.reload();
            //this.router.navigate(['/auth/login']);
        }));
        this.register$ = this.actions$.pipe(ofType(AuthActionTypes.Register), tap(function (action) {
            localStorage.setItem(environment.authTokenKey, action.payload.authToken);
        }));
        this.loadUser$ = this.actions$
            .pipe(ofType(AuthActionTypes.UserRequested), withLatestFrom(this.store.pipe(select(isUserLoaded))), filter(function (_a) {
            var action = _a[0], _isUserLoaded = _a[1];
            return !_isUserLoaded;
        }), mergeMap(function (_a) {
            var action = _a[0], _isUserLoaded = _a[1];
            return _this.auth.getUserByToken();
        }), tap(function (_user) {
            if (_user) {
                _this.store.dispatch(new UserLoaded({ user: _user }));
            }
            else {
                _this.store.dispatch(new Logout());
            }
        }));
        this.init$ = defer(function () {
            var userToken = localStorage.getItem(environment.authTokenKey);
            var observableResult = of({ type: 'NO_ACTION' });
            if (userToken) {
                observableResult = of(new Login({ authToken: userToken }));
            }
            return observableResult;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                _this.returnUrl = event.url;
            }
        });
    }
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "register$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "loadUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AuthEffects.prototype, "init$", void 0);
    AuthEffects = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions,
            Router,
            AuthService,
            Store])
    ], AuthEffects);
    return AuthEffects;
}());
export { AuthEffects };
//# sourceMappingURL=auth.effects.js.map