import * as tslib_1 from "tslib";
// Angular
import { Component, Input } from '@angular/core';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
var SubheaderSearchComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param subheaderService: SubheaderService
     */
    function SubheaderSearchComponent(subheaderService) {
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
    SubheaderSearchComponent.prototype.ngOnInit = function () {
    };
    /**
     * After view init
     */
    SubheaderSearchComponent.prototype.ngAfterViewInit = function () {
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
    SubheaderSearchComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SubheaderSearchComponent.prototype, "fluid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SubheaderSearchComponent.prototype, "clear", void 0);
    SubheaderSearchComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-subheader-search',
            templateUrl: './subheader-search.component.html',
            styleUrls: ['./subheader-search.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SubheaderService])
    ], SubheaderSearchComponent);
    return SubheaderSearchComponent;
}());
export { SubheaderSearchComponent };
//# sourceMappingURL=subheader-search.component.js.map