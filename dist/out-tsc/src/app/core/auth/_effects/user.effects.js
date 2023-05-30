import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
// RxJS
import { mergeMap, map, tap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// Services
import { AuthService } from '../../../core/auth/_services';
import { UserActionTypes, UsersPageLoaded, UserCreated, UsersActionToggleLoading, UsersPageToggleLoading } from '../_actions/user.actions';
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, auth, store) {
        var _this = this;
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.showPageLoadingDistpatcher = new UsersPageToggleLoading({ isLoading: true });
        this.hidePageLoadingDistpatcher = new UsersPageToggleLoading({ isLoading: false });
        this.showActionLoadingDistpatcher = new UsersActionToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new UsersActionToggleLoading({ isLoading: false });
        this.loadUsersPage$ = this.actions$
            .pipe(ofType(UserActionTypes.UsersPageRequested), mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showPageLoadingDistpatcher);
            var requestToServer = _this.auth.findUsers(payload.page);
            var lastQuery = of(payload.page);
            return forkJoin(requestToServer, lastQuery);
        }), map(function (response) {
            var result = response[0];
            var lastQuery = response[1];
            return new UsersPageLoaded({
                users: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteUser$ = this.actions$
            .pipe(ofType(UserActionTypes.UserDeleted), mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.deleteUser(payload.id);
        }), map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateUser$ = this.actions$
            .pipe(ofType(UserActionTypes.UserUpdated), mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.updateUser(payload.user);
        }), map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.createUser$ = this.actions$
            .pipe(ofType(UserActionTypes.UserOnServerCreated), mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.createUser(payload.user).pipe(tap(function (res) {
                _this.store.dispatch(new UserCreated({ user: res }));
            }));
        }), map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
    }
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "loadUsersPage$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "deleteUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "updateUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "createUser$", void 0);
    UserEffects = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions, AuthService, Store])
    ], UserEffects);
    return UserEffects;
}());
export { UserEffects };
//# sourceMappingURL=user.effects.js.map