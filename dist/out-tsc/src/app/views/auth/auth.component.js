import * as tslib_1 from "tslib";
// Angular
import { Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
// Layout
import { LayoutConfigService, SplashScreenService, TranslationService } from '../../core/_base/layout';
// Auth
import { AuthNoticeService } from '../../core/auth';
var AuthComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el
     * @param render
     * @param layoutConfigService: LayoutConfigService
     * @param authNoticeService: authNoticeService
     * @param translationService: TranslationService
     * @param splashScreenService: SplashScreenService
     */
    function AuthComponent(el, render, layoutConfigService, authNoticeService, translationService, splashScreenService) {
        this.el = el;
        this.render = render;
        this.layoutConfigService = layoutConfigService;
        this.authNoticeService = authNoticeService;
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        // Public properties
        this.today = Date.now();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AuthComponent.prototype.ngOnInit = function () {
        this.translationService.setLanguage(this.translationService.getSelectedLanguage());
        this.headerLogo = this.layoutConfigService.getLogo();
        this.splashScreenService.hide();
    };
    /**
     * Load CSS for this specific page only, and destroy when navigate away
     * @param styleUrl
     */
    AuthComponent.prototype.loadCSS = function (styleUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var styleElement = document.createElement('link');
            styleElement.href = styleUrl;
            styleElement.type = 'text/css';
            styleElement.rel = 'stylesheet';
            styleElement.onload = resolve;
            _this.render.appendChild(_this.el.nativeElement, styleElement);
        });
    };
    AuthComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LayoutConfigService,
            AuthNoticeService,
            TranslationService,
            SplashScreenService])
    ], AuthComponent);
    return AuthComponent;
}());
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map