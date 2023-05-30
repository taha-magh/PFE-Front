import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
// Object-Path
import * as objectPath from 'object-path';
// Services
import { PageConfigService } from './page-config.service';
import { MenuConfigService } from './menu-config.service';
var SubheaderService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param router: Router
     * @param pageConfigService: PageConfigServie
     * @param menuConfigService: MenuConfigService
     */
    function SubheaderService(router, pageConfigService, menuConfigService) {
        var _this = this;
        this.router = router;
        this.pageConfigService = pageConfigService;
        this.menuConfigService = menuConfigService;
        // Public properties
        this.title$ = new BehaviorSubject({ title: '', desc: '' });
        this.breadcrumbs$ = new BehaviorSubject([]);
        this.disabled$ = new Subject();
        // Private properties
        this.manualBreadcrumbs = {};
        this.appendingBreadcrumbs = {};
        this.manualTitle = {};
        var initBreadcrumb = function () {
            // get updated title current page config
            _this.pageConfig = _this.pageConfigService.getCurrentPageConfig();
            _this.headerMenus = objectPath.get(_this.menuConfigService.getMenus(), 'header');
            _this.asideMenus = objectPath.get(_this.menuConfigService.getMenus(), 'aside');
            // update breadcrumb on initial page load
            _this.updateBreadcrumbs();
            if (objectPath.get(_this.manualTitle, _this.router.url)) {
                _this.setTitle(_this.manualTitle[_this.router.url]);
            }
            else {
                // get updated page title on every route changed
                _this.title$.next(objectPath.get(_this.pageConfig, 'page'));
                // subheader enable/disable
                var hideSubheader = objectPath.get(_this.pageConfig, 'page.subheader');
                _this.disabled$.next(typeof hideSubheader !== 'undefined' && !hideSubheader);
                if (objectPath.get(_this.manualBreadcrumbs, _this.router.url)) {
                    // breadcrumbs was set manually
                    _this.setBreadcrumbs(_this.manualBreadcrumbs[_this.router.url]);
                }
                else {
                    // get updated breadcrumbs on every route changed
                    _this.updateBreadcrumbs();
                    // breadcrumbs was appended before, reuse it for this page
                    if (objectPath.get(_this.appendingBreadcrumbs, _this.router.url)) {
                        _this.appendBreadcrumbs(_this.appendingBreadcrumbs[_this.router.url]);
                    }
                }
            }
        };
        initBreadcrumb();
        // subscribe to router events
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(initBreadcrumb);
    }
    /**
     * Update breadCrumbs
     */
    SubheaderService.prototype.updateBreadcrumbs = function () {
        // get breadcrumbs from header menu
        var breadcrumbs = this.getBreadcrumbs(this.headerMenus);
        // if breadcrumbs empty from header menu
        if (breadcrumbs.length === 0) {
            // get breadcrumbs from aside menu
            breadcrumbs = this.getBreadcrumbs(this.asideMenus);
        }
        if (
        // if breadcrumb has only 1 item
        breadcrumbs.length === 1 &&
            // and breadcrumb title is same as current page title
            breadcrumbs[0].title.indexOf(objectPath.get(this.pageConfig, 'page.title')) !== -1) {
            // no need to display on frontend
            breadcrumbs = [];
        }
        this.breadcrumbs$.next(breadcrumbs);
    };
    /**
     * Manually set full breadcrumb paths
     */
    SubheaderService.prototype.setBreadcrumbs = function (breadcrumbs) {
        this.manualBreadcrumbs[this.router.url] = breadcrumbs;
        this.breadcrumbs$.next(breadcrumbs);
    };
    /**
     * Append breadcrumb to the last existing breadcrumbs
     * @param breadcrumbs
     */
    SubheaderService.prototype.appendBreadcrumbs = function (breadcrumbs) {
        this.appendingBreadcrumbs[this.router.url] = breadcrumbs;
        var prev = this.breadcrumbs$.getValue();
        this.breadcrumbs$.next(prev.concat(breadcrumbs));
    };
    /**
     * Get breadcrumbs from menu items
     * @param menus
     */
    SubheaderService.prototype.getBreadcrumbs = function (menus) {
        var url = this.pageConfigService.cleanUrl(this.router.url);
        url = url.replace(new RegExp(/\./, 'g'), '/');
        var breadcrumbs = [];
        var menuPath = this.getPath(menus, url) || [];
        menuPath.forEach(function (key) {
            menus = menus[key];
            if (typeof menus !== 'undefined' && menus.title) {
                breadcrumbs.push(menus);
            }
        });
        return breadcrumbs;
    };
    /**
     * Set title
     *
     * @param title: string
     */
    SubheaderService.prototype.setTitle = function (title) {
        this.manualTitle[this.router.url] = title;
        this.title$.next({ title: title });
    };
    /**
     * Get object path by value
     * @param obj
     * @param value
     */
    SubheaderService.prototype.getPath = function (obj, value) {
        if (typeof obj !== 'object') {
            return;
        }
        var path = [];
        var found = false;
        var search = function (haystack) {
            // tslint:disable-next-line:forin
            for (var key in haystack) {
                path.push(key);
                if (haystack[key] === value) {
                    found = true;
                    break;
                }
                if (typeof haystack[key] === 'object') {
                    search(haystack[key]);
                    if (found) {
                        break;
                    }
                }
                path.pop();
            }
        };
        search(obj);
        return path;
    };
    SubheaderService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router,
            PageConfigService,
            MenuConfigService])
    ], SubheaderService);
    return SubheaderService;
}());
export { SubheaderService };
//# sourceMappingURL=subheader.service.js.map