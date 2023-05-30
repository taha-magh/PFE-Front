import * as tslib_1 from "tslib";
// Angular
import { Component, Input } from '@angular/core';
// NGRX
import { select, Store } from '@ngrx/store';
import { currentUser, Logout } from '../../../../../core/auth';
var UserProfile2Component = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    function UserProfile2Component(store) {
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
    UserProfile2Component.prototype.ngOnInit = function () {
        this.user$ = this.store.pipe(select(currentUser));
    };
    /**
     * Log out
     */
    UserProfile2Component.prototype.logout = function () {
        this.store.dispatch(new Logout());
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UserProfile2Component.prototype, "avatar", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UserProfile2Component.prototype, "greeting", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserProfile2Component.prototype, "badge", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserProfile2Component.prototype, "icon", void 0);
    UserProfile2Component = tslib_1.__decorate([
        Component({
            selector: 'kt-user-profile2',
            templateUrl: './user-profile2.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [Store])
    ], UserProfile2Component);
    return UserProfile2Component;
}());
export { UserProfile2Component };
//# sourceMappingURL=user-profile2.component.js.map