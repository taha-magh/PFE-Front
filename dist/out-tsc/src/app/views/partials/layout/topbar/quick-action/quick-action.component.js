import * as tslib_1 from "tslib";
// Angular
import { Component, Input } from '@angular/core';
var QuickActionComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function QuickActionComponent() {
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-gear';
        // Set skin color, default to light
        this.skin = 'light';
        this.gridNavSkin = 'light';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    QuickActionComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * On init
     */
    QuickActionComponent.prototype.ngOnInit = function () {
    };
    QuickActionComponent.prototype.onSVGInserted = function (svg) {
        svg.classList.add('kt-svg-icon', 'kt-svg-icon--success', 'kt-svg-icon--lg');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuickActionComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], QuickActionComponent.prototype, "iconType", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], QuickActionComponent.prototype, "useSVG", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], QuickActionComponent.prototype, "bgImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], QuickActionComponent.prototype, "skin", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], QuickActionComponent.prototype, "gridNavSkin", void 0);
    QuickActionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-quick-action',
            templateUrl: './quick-action.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuickActionComponent);
    return QuickActionComponent;
}());
export { QuickActionComponent };
//# sourceMappingURL=quick-action.component.js.map