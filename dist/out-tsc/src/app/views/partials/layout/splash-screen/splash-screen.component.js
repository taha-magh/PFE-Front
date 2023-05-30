import * as tslib_1 from "tslib";
// Angular
import { Component, ElementRef, ViewChild } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';
// Layout
import { LayoutConfigService, SplashScreenService } from '../../../../core/_base/layout';
var SplashScreenComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el: ElementRef
     * @param layoutConfigService: LayoutConfigService
     * @param splashScreenService: SplachScreenService
     */
    function SplashScreenComponent(el, layoutConfigService, splashScreenService) {
        this.el = el;
        this.layoutConfigService = layoutConfigService;
        this.splashScreenService = splashScreenService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SplashScreenComponent.prototype.ngOnInit = function () {
        // init splash screen, see loader option in layout.config.ts
        var loaderConfig = this.layoutConfigService.getConfig('loader');
        this.loaderLogo = objectPath.get(loaderConfig, 'logo');
        this.loaderType = objectPath.get(loaderConfig, 'type');
        this.loaderMessage = objectPath.get(loaderConfig, 'message');
        this.splashScreenService.init(this.splashScreen);
    };
    tslib_1.__decorate([
        ViewChild('splashScreen', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], SplashScreenComponent.prototype, "splashScreen", void 0);
    SplashScreenComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-splash-screen',
            templateUrl: './splash-screen.component.html',
            styleUrls: ['./splash-screen.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            LayoutConfigService,
            SplashScreenService])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());
export { SplashScreenComponent };
//# sourceMappingURL=splash-screen.component.js.map