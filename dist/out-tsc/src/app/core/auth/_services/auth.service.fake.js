import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RxJS
import { of, forkJoin } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
// Lodash
import { filter, some, find, each } from 'lodash';
// Environment
import { environment } from '../../../../environments/environment';
// CRUD
import { HttpUtilsService } from '../../_base/crud';
var API_USERS_URL = 'api/users';
var API_PERMISSION_URL = 'api/permissions';
var API_ROLES_URL = 'api/roles';
var AuthService = /** @class */ (function () {
    function AuthService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // Authentication/Authorization
    AuthService.prototype.login = function (email, password) {
        if (!email || !password) {
            return of(null);
        }
        return this.getAllUsers().pipe(map(function (result) {
            if (result.length <= 0) {
                return null;
            }
            var user = find(result, function (item) {
                return (item.email.toLowerCase() === email.toLowerCase() && item.password === password);
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }));
    };
    AuthService.prototype.register = function (user) {
        user.roles = [2]; // Manager
        user.accessToken = 'access-token-' + Math.random();
        user.refreshToken = 'access-token-' + Math.random();
        user.pic = './assets/media/users/default.jpg';
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL, user, { headers: httpHeaders })
            .pipe(map(function (res) {
            return res;
        }), catchError(function (err) {
            return null;
        }));
    };
    AuthService.prototype.requestPassword = function (email) {
        return this.http.get(API_USERS_URL).pipe(map(function (users) {
            if (users.length <= 0) {
                return null;
            }
            var user = find(users, function (item) {
                return (item.email.toLowerCase() === email.toLowerCase());
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }), catchError(this.handleError('forgot-password', [])));
    };
    AuthService.prototype.getUserByToken = function () {
        var userToken = localStorage.getItem(environment.authTokenKey);
        if (!userToken) {
            return of(null);
        }
        return this.getAllUsers().pipe(map(function (result) {
            if (result.length <= 0) {
                return null;
            }
            var user = find(result, function (item) {
                return (item.accessToken === userToken.toString());
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }));
    };
    AuthService.prototype.createUser = function (user) {
        var httpHeaders = new HttpHeaders();
        // Note: Add headers if needed (tokens/bearer)
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL, user, { headers: httpHeaders });
    };
    // READ
    AuthService.prototype.getAllUsers = function () {
        return this.http.get(API_USERS_URL);
    };
    AuthService.prototype.getUserById = function (userId) {
        if (!userId) {
            return of(null);
        }
        return this.http.get(API_USERS_URL + ("/" + userId));
    };
    // DELETE => delete the user from the server
    AuthService.prototype.deleteUser = function (userId) {
        var url = API_USERS_URL + "/" + userId;
        return this.http.delete(url);
    };
    // UPDATE => PUT: update the user on the server
    AuthService.prototype.updateUser = function (_user) {
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_USERS_URL, _user, { headers: httpHeaders }).pipe(catchError(function (err) {
            return of(null);
        }));
    };
    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
    // items => filtered/sorted result
    AuthService.prototype.findUsers = function (queryParams) {
        var _this = this;
        // This code imitates server calls
        return this.getAllUsers().pipe(mergeMap(function (response) {
            var result = _this.httpUtils.baseFilter(response, queryParams, []);
            return of(result);
        }));
    };
    // Permissions
    AuthService.prototype.getAllPermissions = function () {
        return this.http.get(API_PERMISSION_URL);
    };
    AuthService.prototype.getRolePermissions = function (roleId) {
        var _this = this;
        var allRolesRequest = this.http.get(API_PERMISSION_URL);
        var roleRequest = roleId ? this.getRoleById(roleId) : of(null);
        return forkJoin(allRolesRequest, roleRequest).pipe(map(function (res) {
            var _allPermissions = res[0];
            var _role = res[1];
            if (!_allPermissions || _allPermissions.length === 0) {
                return [];
            }
            var _rolePermission = _role ? _role.permissions : [];
            var result = _this.getRolePermissionsTree(_allPermissions, _rolePermission);
            return result;
        }));
    };
    AuthService.prototype.getRolePermissionsTree = function (_allPermission, _rolePermissionIds) {
        var _this = this;
        if (_allPermission === void 0) { _allPermission = []; }
        if (_rolePermissionIds === void 0) { _rolePermissionIds = []; }
        var result = [];
        var _root = filter(_allPermission, function (item) { return !item.parentId; });
        each(_root, function (_rootItem) {
            _rootItem._children = [];
            _rootItem._children = _this.collectChildrenPermission(_allPermission, _rootItem.id, _rolePermissionIds);
            _rootItem.isSelected = (some(_rolePermissionIds, function (id) { return id === _rootItem.id; }));
            result.push(_rootItem);
        });
        return result;
    };
    AuthService.prototype.collectChildrenPermission = function (_allPermission, _parentId, _rolePermissionIds) {
        var _this = this;
        if (_allPermission === void 0) { _allPermission = []; }
        if (_rolePermissionIds === void 0) { _rolePermissionIds = []; }
        var result = [];
        var _children = filter(_allPermission, function (item) { return item.parentId === _parentId; });
        if (_children.length === 0) {
            return result;
        }
        each(_children, function (_childItem) {
            _childItem._children = [];
            _childItem._children = _this.collectChildrenPermission(_allPermission, _childItem.id, _rolePermissionIds);
            _childItem.isSelected = (some(_rolePermissionIds, function (id) { return id === _childItem.id; }));
            result.push(_childItem);
        });
        return result;
    };
    // Roles
    AuthService.prototype.getAllRoles = function () {
        return this.http.get(API_ROLES_URL);
    };
    AuthService.prototype.getRoleById = function (roleId) {
        return this.http.get(API_ROLES_URL + ("/" + roleId));
    };
    // CREATE =>  POST: add a new role to the server
    AuthService.prototype.createRole = function (role) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_ROLES_URL, role, { headers: httpHeaders });
    };
    // UPDATE => PUT: update the role on the server
    AuthService.prototype.updateRole = function (role) {
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
    };
    // DELETE => delete the role from the server
    AuthService.prototype.deleteRole = function (roleId) {
        var url = API_ROLES_URL + "/" + roleId;
        return this.http.delete(url);
    };
    AuthService.prototype.findRoles = function (queryParams) {
        var _this = this;
        // This code imitates server calls
        return this.http.get(API_ROLES_URL).pipe(mergeMap(function (res) {
            var result = _this.httpUtils.baseFilter(res, queryParams, []);
            return of(result);
        }));
    };
    // Check Role Before deletion
    AuthService.prototype.isRoleAssignedToUsers = function (roleId) {
        return this.getAllUsers().pipe(map(function (users) {
            if (some(users, function (user) { return some(user.roles, function (_roleId) { return _roleId === roleId; }); })) {
                return true;
            }
            return false;
        }));
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            HttpUtilsService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.fake.js.map