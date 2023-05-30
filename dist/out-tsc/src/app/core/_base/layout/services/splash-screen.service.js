import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';
var SplashScreenService = /** @class */ (function () {
    /**
     * Service constctuctor
     *
     * @param animationBuilder: AnimationBuilder
     */
    function SplashScreenService(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    SplashScreenService.prototype.init = function (element) {
        this.el = element;
    };
    /**
     * Hide
     */
    SplashScreenService.prototype.hide = function () {
        var _this = this;
        if (this.stopped) {
            return;
        }
        var player = this.animationBuilder.build([
            style({ opacity: '1' }),
            animate(800, style({ opacity: '0' }))
        ]).create(this.el.nativeElement);
        player.onDone(function () {
            if (typeof _this.el.nativeElement.remove === 'function') {
                _this.el.nativeElement.remove();
            }
            else {
                _this.el.nativeElement.style.display = 'none';
            }
            _this.stopped = true;
        });
        setTimeout(function () { return player.play(); }, 300);
    };
    SplashScreenService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AnimationBuilder])
    ], SplashScreenService);
    return SplashScreenService;
}());
export { SplashScreenService };
//# sourceMappingURL=splash-screen.service.js.map