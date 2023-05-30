import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
// NGRX
import { Effect, Actions } from '@ngrx/effects';
// Services
import { AuthService } from '../_services';
// Actions
import { AllPermissionsRequested } from '../_actions/permission.actions';
var PermissionEffects = /** @class */ (function () {
    function PermissionEffects(actions$, auth) {
        this.actions$ = actions$;
        this.auth = auth;
        this.init$ = defer(function () {
            return of(new AllPermissionsRequested());
        });
    }
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], PermissionEffects.prototype, "init$", void 0);
    PermissionEffects = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions, AuthService])
    ], PermissionEffects);
    return PermissionEffects;
}());
export { PermissionEffects };
//# sourceMappingURL=permission.effects.js.map