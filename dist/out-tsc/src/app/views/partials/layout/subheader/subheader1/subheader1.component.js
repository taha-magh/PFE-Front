import * as tslib_1 from "tslib";
// Angular
import { Component, Input } from '@angular/core';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
var Subheader1Component = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param subheaderService: SubheaderService
     */
    function Subheader1Component(subheaderService) {
        this.subheaderService = subheaderService;
        this.today = Date.now();
        this.title = '';
        this.desc = '';
        this.breadcrumbs = [];
        // Private properties
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Subheader1Component.prototype.ngOnInit = function () {
    };
    /**
     * After view init
     */
    Subheader1Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriptions.push(this.subheaderService.title$.subscribe(function (bt) {
            // breadcrumbs title sometimes can be undefined
            if (bt) {
                Promise.resolve(null).then(function () {
                    _this.title = bt.title;
                    _this.desc = bt.desc;
                });
            }
        }));
        this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(function (bc) {
            Promise.resolve(null).then(function () {
                _this.breadcrumbs = bc;
            });
        }));
    };
    /**
     * On destroy
     */
    Subheader1Component.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], Subheader1Component.prototype, "fluid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], Subheader1Component.prototype, "clear", void 0);
    Subheader1Component = tslib_1.__decorate([
        Component({
            selector: 'kt-subheader1',
            templateUrl: './subheader1.component.html',
            styleUrls: ['./subheader1.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SubheaderService])
    ], Subheader1Component);
    return Subheader1Component;
}());
export { Subheader1Component };
//# sourceMappingURL=subheader1.component.js.map