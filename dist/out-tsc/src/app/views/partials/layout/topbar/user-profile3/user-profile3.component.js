import * as tslib_1 from "tslib";
// Angular
import { Component, Input } from '@angular/core';
// NGRX
import { select, Store } from '@ngrx/store';
import { currentUser, Logout } from '../../../../../core/auth';
var UserProfile3Component = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    function UserProfile3Component(store) {
        this.store = store;
        this.avatar = true;
        this.greeting = true;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserProfile3Component.prototype.ngOnInit = function () {
        this.user$ = this.store.pipe(select(currentUser));
    };
    /**
     * Log out
     */
    UserProfile3Component.prototype.logout = function () {
        this.store.dispatch(new Logout());
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UserProfile3Component.prototype, "avatar", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UserProfile3Component.prototype, "greeting", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserProfile3Component.prototype, "badge", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserProfile3Component.prototype, "icon", void 0);
    UserProfile3Component = tslib_1.__decorate([
        Component({
            selector: 'kt-user-profile3',
            templateUrl: './user-profile3.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [Store])
    ], UserProfile3Component);
    return UserProfile3Component;
}());
export { UserProfile3Component };
//# sourceMappingURL=user-profile3.component.js.map