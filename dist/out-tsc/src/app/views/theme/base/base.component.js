import * as tslib_1 from "tslib";
// Angular
import { Component, ViewEncapsulation } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';
// Layout
import { LayoutConfigService, MenuConfigService, PageConfigService } from '../../../core/_base/layout';
import { HtmlClassService } from '../html-class.service';
import { LayoutConfig } from '../../../core/_config/layout.config';
import { MenuConfig } from '../../../core/_config/menu.config';
import { PageConfig } from '../../../core/_config/page.config';
// User permissions
import { currentUserPermissions } from '../../../core/auth';
import { select, Store } from '@ngrx/store';
var BaseComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param menuConfigService: MenuConfifService
     * @param pageConfigService: PageConfigService
     * @param htmlClassService: HtmlClassService
     * @param store
     * @param permissionsService
     */
    function BaseComponent(layoutConfigService, menuConfigService, pageConfigService, htmlClassService, store) {
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.menuConfigService = menuConfigService;
        this.pageConfigService = pageConfigService;
        this.htmlClassService = htmlClassService;
        this.store = store;
        // Private properties
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register configs by demos
        this.layoutConfigService.loadConfigs(new LayoutConfig().configs);
        this.menuConfigService.loadConfigs(new MenuConfig().configs);
        this.pageConfigService.loadConfigs(new PageConfig().configs);
        // setup element classes
        this.htmlClassService.setConfig(this.layoutConfigService.getConfig());
        var subscr = this.layoutConfigService.onConfigUpdated$.subscribe(function (layoutConfig) {
            // reset body class based on global and page level layout config, refer to html-class.service.ts
            document.body.className = '';
            _this.htmlClassService.setConfig(layoutConfig);
        });
        this.unsubscribe.push(subscr);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.layoutConfigService.getConfig();
        this.selfLayout = objectPath.get(config, 'self.layout');
        this.asideDisplay = objectPath.get(config, 'aside.self.display');
        this.subheaderDisplay = objectPath.get(config, 'subheader.display');
        this.fluid = objectPath.get(config, 'content.width') === 'fluid';
        // let the layout type change
        var subscr = this.layoutConfigService.onConfigUpdated$.subscribe(function (cfg) {
            setTimeout(function () {
                _this.selfLayout = objectPath.get(cfg, 'self.layout');
            });
        });
        this.unsubscribe.push(subscr);
    };
    /**
     * On destroy
     */
    BaseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * NGX Permissions, init roles
     */
    BaseComponent.prototype.loadRolesWithPermissions = function () {
        this.currentUserPermissions$ = this.store.pipe(select(currentUserPermissions));
        var subscr = this.currentUserPermissions$.subscribe(function (res) {
            if (!res || res.length === 0) {
                return;
            }
        });
        this.unsubscribe.push(subscr);
    };
    BaseComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-base',
            templateUrl: './base.component.html',
            styleUrls: ['./base.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [LayoutConfigService,
            MenuConfigService,
            PageConfigService,
            HtmlClassService,
            Store])
    ], BaseComponent);
    return BaseComponent;
}());
export { BaseComponent };
//# sourceMappingURL=base.component.js.map