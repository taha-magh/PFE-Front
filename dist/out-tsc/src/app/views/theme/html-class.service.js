import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';
// RxJS
import { BehaviorSubject } from 'rxjs';
var HtmlClassService = /** @class */ (function () {
    /**
     * Component constructor
     */
    function HtmlClassService() {
        // Private properties
        this.loaded = [];
        this.onClassesUpdated$ = new BehaviorSubject(this.classes);
    }
    /**
     * Build html element classes from layout config
     * @param layoutConfig
     */
    HtmlClassService.prototype.setConfig = function (layoutConfig) {
        this.config = layoutConfig;
        // scope list of classes
        this.classes = {
            header: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: [],
        };
        // init base layout
        this.initLayout();
        this.initLoader();
        // init header and subheader menu
        this.initHeader();
        this.initSubheader();
        // init aside and aside menu
        this.initAside();
        // init footer
        this.initFooter();
        this.onClassesUpdated$.next(this.classes);
    };
    /**
     * Returns Classes
     *
     * @param path: string
     * @param toString boolean
     */
    HtmlClassService.prototype.getClasses = function (path, toString) {
        if (path) {
            var classes = objectPath.get(this.classes, path) || '';
            if (toString && Array.isArray(classes)) {
                return classes.join(' ');
            }
            return classes.toString();
        }
        return this.classes;
    };
    /**
     * Init Layout
     */
    HtmlClassService.prototype.initLayout = function () {
        if (objectPath.has(this.config, 'self.body.class')) {
            var selfBodyClass = (objectPath.get(this.config, 'self.body.class')).toString();
            if (selfBodyClass) {
                var bodyClasses = selfBodyClass.split(' ');
                bodyClasses.forEach(function (cssClass) { return document.body.classList.add(cssClass); });
            }
        }
        if (objectPath.get(this.config, 'self.layout') === 'boxed' && objectPath.has(this.config, 'self.body.background-image')) {
            document.body.style.backgroundImage = 'url("' + objectPath.get(this.config, 'self.body.background-image') + '")';
        }
        if (objectPath.has(this.config, 'width')) {
            document.body.classList.add('kt-page--' + objectPath.get(this.config, 'width'));
        }
        // Offcanvas directions
        document.body.classList.add('kt-quick-panel--right');
        document.body.classList.add('kt-demo-panel--right');
        document.body.classList.add('kt-offcanvas-panel--right');
    };
    /**
     * Init Loader
     */
    HtmlClassService.prototype.initLoader = function () {
    };
    /**
     * Init Header
     */
    HtmlClassService.prototype.initHeader = function () {
        // Fixed header
        if (objectPath.get(this.config, 'header.self.fixed.desktop.enabled')) {
            document.body.classList.add('kt-header--fixed');
            objectPath.push(this.classes, 'header', 'kt-header--fixed');
            document.body.classList.add('kt-header--minimize-' + objectPath.get(this.config, 'header.self.fixed.desktop.mode'));
        }
        else {
            document.body.classList.add('kt-header--static');
        }
        if (objectPath.get(this.config, 'header.self.fixed.mobile')) {
            document.body.classList.add('kt-header-mobile--fixed');
            objectPath.push(this.classes, 'header_mobile', 'kt-header-mobile--fixed');
        }
    };
    /**
     * Inin Subheader
     */
    HtmlClassService.prototype.initSubheader = function () {
        // Fixed content head
        if (objectPath.get(this.config, 'subheader.fixed')) {
            document.body.classList.add('kt-subheader--fixed');
        }
        if (objectPath.get(this.config, 'subheader.display')) {
            document.body.classList.add('kt-subheader--enabled');
        }
        if (objectPath.has(this.config, 'subheader.style')) {
            document.body.classList.add('kt-subheader--' + objectPath.get(this.config, 'subheader.style'));
        }
    };
    /**
     * Init Aside
     */
    HtmlClassService.prototype.initAside = function () {
        if (objectPath.get(this.config, 'aside.self.display') !== true) {
            return;
        }
        document.body.classList.add('kt-aside--enabled');
        if (objectPath.get(this.config, 'aside.self.skin')) {
            objectPath.push(this.classes, 'aside', 'kt-aside--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            document.body.classList.add('kt-aside--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            objectPath.push(this.classes, 'aside_menu', 'kt-aside-menu--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            document.body.classList.add('kt-aside__brand--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            objectPath.push(this.classes, 'brand', 'kt-aside__brand--skin-' + objectPath.get(this.config, 'aside.self.skin'));
        }
        // Fixed Aside
        if (objectPath.get(this.config, 'aside.self.fixed')) {
            document.body.classList.add('kt-aside--fixed');
            objectPath.push(this.classes, 'aside', 'kt-aside--fixed');
        }
        else {
            document.body.classList.add('kt-aside--static');
        }
        // Default fixed
        if (objectPath.get(this.config, 'aside.self.minimize.default')) {
            document.body.classList.add('kt-aside--minimize');
        }
        // Menu
        // Dropdown Submenu
        if (objectPath.get(this.config, 'aside.self.fixed') !== true && objectPath.get(this.config, 'aside.menu.dropdown')) {
            objectPath.push(this.classes, 'aside_menu', 'kt-aside-menu--dropdown');
            // enable menu dropdown
        }
    };
    /**
     * Init Footer
     */
    HtmlClassService.prototype.initFooter = function () {
        // Fixed header
        if (objectPath.get(this.config, 'footer.self.fixed')) {
            document.body.classList.add('kt-footer--fixed');
        }
    };
    HtmlClassService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], HtmlClassService);
    return HtmlClassService;
}());
export { HtmlClassService };
//# sourceMappingURL=html-class.service.js.map