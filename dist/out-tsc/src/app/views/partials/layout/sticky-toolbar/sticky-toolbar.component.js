import * as tslib_1 from "tslib";
// Angular
import { Component } from '@angular/core';
// Layout
import { LayoutConfigService } from '../../../../core/_base/layout';
var StickyToolbarComponent = /** @class */ (function () {
    function StickyToolbarComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        // Public properties
        this.demoPanelOptions = {
            overlay: true,
            baseClass: 'kt-demo-panel',
            closeBy: 'kt_demo_panel_close',
            toggleBy: 'kt_demo_panel_toggle',
        };
        this.baseHref = 'https://keenthemes.com/metronic/preview/angular/';
    }
    StickyToolbarComponent.prototype.isActiveDemo = function (demo) {
        return demo === this.layoutConfigService.getConfig('demo');
    };
    StickyToolbarComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-sticky-toolbar',
            templateUrl: './sticky-toolbar.component.html',
            styleUrls: ['./sticky-toolbar.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
    ], StickyToolbarComponent);
    return StickyToolbarComponent;
}());
export { StickyToolbarComponent };
//# sourceMappingURL=sticky-toolbar.component.js.map