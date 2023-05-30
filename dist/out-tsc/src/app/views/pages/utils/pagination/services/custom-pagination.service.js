import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Pageable } from '../pageable';
var CustomPaginationService = /** @class */ (function () {
    function CustomPaginationService() {
    }
    CustomPaginationService.prototype.getNextPage = function (page) {
        if (!page.last) {
            page.pageable.pageNumber = page.pageable.pageNumber + 1;
        }
        return page.pageable;
    };
    CustomPaginationService.prototype.getPreviousPage = function (page) {
        if (!page.first) {
            page.pageable.pageNumber = page.pageable.pageNumber - 1;
        }
        return page.pageable;
    };
    CustomPaginationService.prototype.getPageInNewSize = function (page, pageSize) {
        page.pageable.pageSize = pageSize;
        page.pageable.pageNumber = Pageable.FIRST_PAGE_NUMBER;
        return page.pageable;
    };
    CustomPaginationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomPaginationService);
    return CustomPaginationService;
}());
export { CustomPaginationService };
//# sourceMappingURL=custom-pagination.service.js.map