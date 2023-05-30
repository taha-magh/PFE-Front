import * as tslib_1 from "tslib";
// Angular
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Layout
import { LayoutConfigService } from '../../../../core/_base/layout';
var ErrorPageComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param route: ActivatedRoute
     * @param layoutConfigService: LayoutConfigService
     */
    function ErrorPageComponent(route, layoutConfigService) {
        this.route = route;
        this.layoutConfigService = layoutConfigService;
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        // set temporary values to the layout config on this page
        this.layoutConfigService.setConfig({ self: { layout: 'blank' } });
        /*
        this.route.queryParams.subscribe(params => {
            this.code = params['code'];
            if (this.code == "403")
            this.desc = 'Forbidden :: you don\'t have the permission to access';
          });
          */
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image = './assets/media/error/bg1.jpg';
        this.sub = this.route.data.subscribe(function (param) {
            if (param.image) {
                _this.image = param.image;
            }
            if (param.code) {
                _this.code = param.code;
            }
            if (param.desc) {
                _this.desc = param.desc;
            }
        });
    };
    /**
     * On destroy
     */
    ErrorPageComponent.prototype.ngOnDestroy = function () {
        // reset config from any temporary values
        this.layoutConfigService.reloadConfigs();
        this.sub.unsubscribe();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ErrorPageComponent.prototype, "image", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ErrorPageComponent.prototype, "code", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ErrorPageComponent.prototype, "desc", void 0);
    ErrorPageComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-error-page',
            templateUrl: './error-page.component.html',
            styleUrls: ['./error-page.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, LayoutConfigService])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());
export { ErrorPageComponent };
//# sourceMappingURL=error-page.component.js.map