import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// RxJS
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
import { currentUserPermissions } from '../_selectors/auth.selectors';
import { find } from 'lodash';
var ModuleGuard = /** @class */ (function () {
    function ModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    ModuleGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var moduleName = route.data.moduleName;
        console.log(moduleName);
        if (!moduleName) {
            return of(false);
        }
        return this.store
            .pipe(select(currentUserPermissions), map(function (permissions) {
            var _perm = find(permissions, function (elem) {
                return elem.title.toLocaleLowerCase() === moduleName.toLocaleLowerCase();
            });
            return _perm ? true : false;
        }), tap(function (hasAccess) {
            if (!hasAccess) {
                _this.router.navigateByUrl('/error/403');
            }
        }));
    };
    ModuleGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Store, Router])
    ], ModuleGuard);
    return ModuleGuard;
}());
export { ModuleGuard };
//# sourceMappingURL=module.guard.js.map