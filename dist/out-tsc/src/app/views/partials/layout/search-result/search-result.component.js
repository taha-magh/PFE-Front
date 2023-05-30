import * as tslib_1 from "tslib";
// Angular
import { Component, Input } from '@angular/core';
var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SearchResultComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SearchResultComponent.prototype, "noRecordText", void 0);
    SearchResultComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-search-result',
            templateUrl: './search-result.component.html',
            styleUrls: ['./search-result.component.scss']
        })
    ], SearchResultComponent);
    return SearchResultComponent;
}());
export { SearchResultComponent };
//# sourceMappingURL=search-result.component.js.map