import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
// Layout
import { SplashScreenService } from '../../../../core/_base/layout';
var SpinnerScreenComponent = /** @class */ (function () {
    function SpinnerScreenComponent(splashScreenService) {
        this.splashScreenService = splashScreenService;
    }
    SpinnerScreenComponent.prototype.ngOnInit = function () {
        // init splash screen, see loader option in layout.config.ts
        this.splashScreenService.init(this.splashScreen);
    };
    tslib_1.__decorate([
        ViewChild('splashScreen', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], SpinnerScreenComponent.prototype, "splashScreen", void 0);
    SpinnerScreenComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-spinner-screen',
            templateUrl: './spinner-screen.component.html',
            styleUrls: ['./spinner-screen.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SplashScreenService])
    ], SpinnerScreenComponent);
    return SpinnerScreenComponent;
}());
export { SpinnerScreenComponent };
//# sourceMappingURL=spinner-screen.component.js.map