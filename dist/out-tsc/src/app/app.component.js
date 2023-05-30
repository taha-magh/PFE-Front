import * as tslib_1 from "tslib";
// Angular
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// Layout
import { LayoutConfigService, SplashScreenService, TranslationService } from './core/_base/layout';
// language list
import { locale as arLang } from './core/_config/i18n/ar';
import { locale as frLang } from './core/_config/i18n/fr';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
var AppComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     * @param layoutConfigService: LayoutCongifService
     * @param splashScreenService: SplashScreenService
     */
    function AppComponent(translationService, router, translate, layoutConfigService, splashScreenService, document) {
        var _this = this;
        this.translationService = translationService;
        this.router = router;
        this.translate = translate;
        this.layoutConfigService = layoutConfigService;
        this.splashScreenService = splashScreenService;
        this.document = document;
        // Public properties
        this.title = 'Contentieux';
        this.langDir = 'ltr';
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register translations
        this.translationService.loadTranslations(arLang, frLang);
        this.translate.onLangChange.subscribe(function (event) {
            if (event.lang == 'ar') {
                _this.langDir = 'rtl';
                _this.document.getElementById('theme').setAttribute('href', 'assets/css/style.angular.rtl.css');
            }
            else if (event.lang == 'fr') {
                _this.langDir = 'ltr';
                _this.document.getElementById('theme').setAttribute('href', 'assets/css/style.angular.css');
            }
            else {
                _this.document.getElementById('theme').setAttribute('href', 'assets/css/style.angular.rtl.css');
            }
        });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // enable/disable loader
        this.loader = this.layoutConfigService.getConfig('loader.enabled');
        var routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                // hide splash screen
                _this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
                // to display back the body content
                setTimeout(function () {
                    document.body.classList.add('kt-page--loaded');
                }, 500);
            }
        });
        this.unsubscribe.push(routerSubscription);
    };
    /**
     * On Destroy
     */
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'body[kt-root]',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            changeDetection: ChangeDetectionStrategy.Default
        }),
        tslib_1.__param(5, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [TranslationService,
            Router,
            TranslateService,
            LayoutConfigService,
            SplashScreenService,
            Document])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map