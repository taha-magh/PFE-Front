import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// RxJS
import { Subject } from 'rxjs';
// Object-Path
import * as objectPath from 'object-path';
// Lodash
import { merge } from 'lodash';
var PageConfigService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param router: Router
     */
    function PageConfigService(router) {
        this.router = router;
        // register on config changed event and set default config
        this.onConfigUpdated$ = new Subject();
    }
    /**
     * Get current page config based on route
     */
    PageConfigService.prototype.getCurrentPageConfig = function (path) {
        var configPath = this.cleanUrl(this.router.url);
        if (path) {
            configPath += '.' + path;
        }
        // get page config by path
        return objectPath.get(this.pageConfig, configPath);
    };
    /**
     * Set existing config with a new value
     * @param value: any
     * @param sav: boolean?
     */
    PageConfigService.prototype.setConfig = function (value, save) {
        this.pageConfig = merge(this.pageConfig, value);
        if (save) {
            // not implemented
        }
        // fire off an event that all subscribers will listen
        this.onConfigUpdated$.next(this.pageConfig);
    };
    /**
     * Load confgis
     *
     * @param config: any
     */
    PageConfigService.prototype.loadConfigs = function (config) {
        this.pageConfig = config;
        this.onConfigUpdated$.next(this.pageConfig);
    };
    /**
     * Remove unnecessary params from URL
     * @param url
     */
    PageConfigService.prototype.cleanUrl = function (url) {
        // remove first route (demo name) from url router
        if (new RegExp(/^\/demo/).test(url)) {
            var urls = url.split('/');
            urls.splice(0, 2);
            url = urls.join('/');
        }
        if (url.charAt(0) == '/') {
            url = url.substr(1);
        }
        // we get the page title from config, using url path.
        // we need to remove query from url ?id=1 before we use the path to search in array config.
        var finalUrl = url.replace(/\//g, '.');
        if (finalUrl.indexOf('?') !== -1) {
            finalUrl = finalUrl.substring(0, finalUrl.indexOf('?'));
        }
        return finalUrl;
    };
    PageConfigService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], PageConfigService);
    return PageConfigService;
}());
export { PageConfigService };
//# sourceMappingURL=page-config.service.js.map