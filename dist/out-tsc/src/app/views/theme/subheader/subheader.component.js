import * as tslib_1 from "tslib";
// Angular
import { Component } from '@angular/core';
// Layout
import { LayoutConfigService } from '../../../core/_base/layout';
// Object-Path
import * as objectPath from 'object-path';
var SubheaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function SubheaderComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SubheaderComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
        this.layout = objectPath.get(config, 'subheader.layout');
        this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
        this.clear = objectPath.get(config, 'subheader.clear');
    };
    SubheaderComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-subheader',
            templateUrl: './subheader.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
    ], SubheaderComponent);
    return SubheaderComponent;
}());
export { SubheaderComponent };
//# sourceMappingURL=subheader.component.js.map