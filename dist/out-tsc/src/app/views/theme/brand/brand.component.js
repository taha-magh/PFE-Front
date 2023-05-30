import * as tslib_1 from "tslib";
// Angular
import { Component } from "@angular/core";
// Layout
import { LayoutConfigService, MenuHorizontalService, } from "../../../core/_base/layout";
import { HtmlClassService } from "../html-class.service";
import { Router } from "@angular/router";
var BrandComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param htmlClassService: HtmlClassService
     * @param menuHorService: MenuHorService
     */
    function BrandComponent(menuHorService, layoutConfigService, router, htmlClassService) {
        this.menuHorService = menuHorService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.htmlClassService = htmlClassService;
        this.toggleOptions = {
            target: "body",
            targetState: "kt-aside--minimize",
            togglerState: "kt-aside__brand-aside-toggler--active",
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BrandComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
    };
    /**
     * On after view init
     */
    BrandComponent.prototype.Parammetre = function () {
        this.router.navigate(["pages/delegataire/delegataires"]);
    };
    BrandComponent.prototype.Con = function () {
        this.router.navigate(["pages/delegataire/delegataires"]);
    };
    BrandComponent.prototype.ngAfterViewInit = function () { };
    BrandComponent = tslib_1.__decorate([
        Component({
            selector: "kt-brand",
            templateUrl: "./brand.component.html",
        }),
        tslib_1.__metadata("design:paramtypes", [MenuHorizontalService,
            LayoutConfigService,
            Router,
            HtmlClassService])
    ], BrandComponent);
    return BrandComponent;
}());
export { BrandComponent };
//# sourceMappingURL=brand.component.js.map