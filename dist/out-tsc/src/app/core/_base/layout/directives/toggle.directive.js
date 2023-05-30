import * as tslib_1 from "tslib";
// Angular
import { Directive, ElementRef, Input } from '@angular/core';
/**
 * Toggle
 */
var ToggleDirective = /** @class */ (function () {
    /**
     * Directive constructor
     * @param el: ElementRef
     */
    function ToggleDirective(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ToggleDirective.prototype.ngAfterViewInit = function () {
        this.toggle = new KTToggle(this.el.nativeElement, this.options);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ToggleDirective.prototype, "options", void 0);
    ToggleDirective = tslib_1.__decorate([
        Directive({
            selector: '[ktToggle]',
            exportAs: 'ktToggle'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], ToggleDirective);
    return ToggleDirective;
}());
export { ToggleDirective };
//# sourceMappingURL=toggle.directive.js.map