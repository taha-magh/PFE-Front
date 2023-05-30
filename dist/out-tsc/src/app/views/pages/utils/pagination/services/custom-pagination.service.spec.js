import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomPaginationService } from './custom-pagination.service';
import { Page } from '../page';
import { Pageable } from '../pageable';
describe('CustomPaginationService', function () {
    var injector;
    var service;
    var page;
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CustomPaginationService],
            imports: [HttpClientTestingModule]
        });
        injector = getTestBed();
        service = injector.get(CustomPaginationService);
        page = new Page();
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should increment page number', function () {
        page.last = false;
        page.pageable.pageNumber = 0;
        var result = service.getNextPage(page);
        expect(result.pageNumber).toEqual(1);
    });
    it('should not increment page number if it is currently on the last page', function () {
        page.last = true;
        page.pageable.pageNumber = 0;
        var result = service.getNextPage(page);
        expect(result.pageNumber).toEqual(0);
    });
    it('should decrement page number', function () {
        page.first = false;
        page.pageable.pageNumber = 1;
        var result = service.getPreviousPage(page);
        expect(result.pageNumber).toEqual(0);
    });
    it('should not decrement page number if it is currently on the first page', function () {
        page.first = true;
        page.pageable.pageNumber = Pageable.FIRST_PAGE_NUMBER;
        var result = service.getPreviousPage(page);
        expect(result.pageNumber).toEqual(Pageable.FIRST_PAGE_NUMBER);
    });
    it('should get page in new size', function () {
        page.pageable.pageSize = 10;
        var result = service.getPageInNewSize(page, 20);
        expect(result.pageSize).toEqual(20);
    });
    it('should refresh page number when getting page in new size', function () {
        page.pageable.pageSize = 10;
        page.pageable.pageNumber = 1;
        var result = service.getPageInNewSize(page, 20);
        expect(result.pageSize).toEqual(20);
        expect(result.pageNumber).toEqual(Pageable.FIRST_PAGE_NUMBER);
    });
});
//# sourceMappingURL=custom-pagination.service.spec.js.map