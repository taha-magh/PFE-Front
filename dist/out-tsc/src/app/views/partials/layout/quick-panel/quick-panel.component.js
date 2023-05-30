import * as tslib_1 from "tslib";
// Angular
import { Component } from '@angular/core';
var QuickPanelComponent = /** @class */ (function () {
    function QuickPanelComponent() {
        // Public properties
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'kt-quick-panel',
            closeBy: 'kt_quick_panel_close_btn',
            toggleBy: 'kt_quick_panel_toggler_btn'
        };
    }
    QuickPanelComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-quick-panel',
            templateUrl: './quick-panel.component.html',
            styleUrls: ['./quick-panel.component.scss']
        })
    ], QuickPanelComponent);
    return QuickPanelComponent;
}());
export { QuickPanelComponent };
//# sourceMappingURL=quick-panel.component.js.map