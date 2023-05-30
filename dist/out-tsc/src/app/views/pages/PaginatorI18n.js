import { MatPaginatorIntl } from '@angular/material';
var PaginatorI18n = /** @class */ (function () {
    function PaginatorI18n(translate) {
        this.translate = translate;
    }
    PaginatorI18n.prototype.getPaginatorIntl = function () {
        var paginatorIntl = new MatPaginatorIntl();
        paginatorIntl.itemsPerPageLabel = this.translate.instant('PAGES.GENERAL.ITEMS_PER_PAGE_LABEL');
        paginatorIntl.nextPageLabel = this.translate.instant('PAGES.GENERAL.NEXT_PAGE_LABEL');
        paginatorIntl.previousPageLabel = this.translate.instant('PAGES.GENERAL.PREVIOUS_PAGE_LABEL');
        paginatorIntl.firstPageLabel = this.translate.instant('PAGES.GENERAL.FIRST_PAGE_LABEL');
        paginatorIntl.lastPageLabel = this.translate.instant('PAGES.GENERAL.LAST_PAGE_LABEL');
        paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
        return paginatorIntl;
    };
    PaginatorI18n.prototype.getRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return this.translate.instant('PAGES.GENERAL.RANGE_PAGE_LABEL_1', { length: length });
        }
        length = Math.max(length, 0);
        var startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return this.translate.instant('PAGES.GENERAL.RANGE_PAGE_LABEL_2', { startIndex: startIndex + 1, endIndex: endIndex, length: length });
    };
    return PaginatorI18n;
}());
export { PaginatorI18n };
//# sourceMappingURL=PaginatorI18n.js.map