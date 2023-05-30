import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from '../../page';
var CustomPaginationComponent = /** @class */ (function () {
    function CustomPaginationComponent() {
        this.nextPageEvent = new EventEmitter();
        this.previousPageEvent = new EventEmitter();
        this.pageSizeEvent = new EventEmitter();
    }
    CustomPaginationComponent.prototype.ngOnInit = function () {
        this.pageSize = "10";
    };
    CustomPaginationComponent.prototype.nextPage = function () {
        this.nextPageEvent.emit(null);
    };
    CustomPaginationComponent.prototype.previousPage = function () {
        this.previousPageEvent.emit(null);
    };
    /*
    updatePageSize(pageSize: number): void {
      this.pageSizeEvent.emit(pageSize);
    }
    */
    CustomPaginationComponent.prototype.change = function (event) {
        this.pageSize = event.source.value;
        this.pageSizeEvent.emit(parseInt(this.pageSize));
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Page)
    ], CustomPaginationComponent.prototype, "page", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CustomPaginationComponent.prototype, "nextPageEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CustomPaginationComponent.prototype, "previousPageEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], CustomPaginationComponent.prototype, "pageSizeEvent", void 0);
    CustomPaginationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-custom-pagination',
            templateUrl: './custom-pagination.component.html',
            styleUrls: ['./custom-pagination.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomPaginationComponent);
    return CustomPaginationComponent;
}());
export { CustomPaginationComponent };
//# sourceMappingURL=custom-pagination.component.js.map