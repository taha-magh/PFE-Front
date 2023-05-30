import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
/**
 * Listen Tab click
 */
var TabClickEventDirective = /** @class */ (function () {
    /**
     * Directive Constructor
     * @param el: ElementRef
     * @param render: Renderer2
     */
    function TabClickEventDirective(el, render) {
        this.el = el;
        this.render = render;
    }
    /**
     * A directive handler the tab click event for active tab
     * @param target
     */
    TabClickEventDirective.prototype.onClick = function (target) {
        // remove previous active tab
        var parent = target.closest('[role="tablist"]');
        var activeLink = parent.querySelector('[role="tab"].active');
        if (activeLink) {
            this.render.removeClass(activeLink, 'active');
        }
        // set active tab
        var link = target.closest('[role="tab"]');
        if (link) {
            this.render.addClass(link, 'active');
        }
    };
    tslib_1.__decorate([
        HostListener('click', ['$event.target']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [HTMLElement]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TabClickEventDirective.prototype, "onClick", null);
    TabClickEventDirective = tslib_1.__decorate([
        Directive({
            selector: '[ktTabClickEvent]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TabClickEventDirective);
    return TabClickEventDirective;
}());
export { TabClickEventDirective };
//# sourceMappingURL=tab-click-event.directive.js.map