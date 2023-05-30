import * as tslib_1 from "tslib";
// Angular
import { Component } from '@angular/core';
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
    }
    /**
     * Access to jamaati administrator
     */
    TopbarComponent.prototype.communication = function () {
        console.log('admin');
    };
    TopbarComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-topbar',
            templateUrl: './topbar.component.html',
            styleUrls: ['./topbar.component.scss'],
        })
    ], TopbarComponent);
    return TopbarComponent;
}());
export { TopbarComponent };
//# sourceMappingURL=topbar.component.js.map