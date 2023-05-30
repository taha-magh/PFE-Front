import * as tslib_1 from "tslib";
// Angular
import { Component } from '@angular/core';
// Layout
import { LayoutConfigService, MenuHorizontalService } from '../../../../core/_base/layout';
import { HtmlClassService } from '../../html-class.service';
var HeaderMobileComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param htmlClassService: HtmlClassService
     * @param menuHorService: MenuHorService
     */
    function HeaderMobileComponent(menuHorService, layoutConfigService, htmlClassService) {
        this.menuHorService = menuHorService;
        this.layoutConfigService = layoutConfigService;
        this.htmlClassService = htmlClassService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-header__topbar--mobile-on',
            togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderMobileComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getStickyLogo();
        this.asideDisplay = this.layoutConfigService.getConfig('aside.self.display');
    };
    HeaderMobileComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-header-mobile',
            templateUrl: './header-mobile.component.html',
            styleUrls: ['./header-mobile.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MenuHorizontalService, LayoutConfigService, HtmlClassService])
    ], HeaderMobileComponent);
    return HeaderMobileComponent;
}());
export { HeaderMobileComponent };
//# sourceMappingURL=header-mobile.component.js.map