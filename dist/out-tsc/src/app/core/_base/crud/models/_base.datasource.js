// RxJS
import { BehaviorSubject, of } from 'rxjs';
// CRUD
import { HttpExtenstionsModel } from './http-extentsions-model';
import { skip, distinctUntilChanged } from 'rxjs/operators';
// Why not use MatTableDataSource?
/*  In this example, we will not be using the built-in MatTableDataSource because its designed for filtering,
    sorting and pagination of a client - side data array.
    Read the article: 'https://blog.angular-university.io/angular-material-data-table/'
**/
var BaseDataSource = /** @class */ (function () {
    function BaseDataSource() {
        var _this = this;
        this.entitySubject = new BehaviorSubject([]);
        this.hasItems = true; // Need to show message: 'No records found'
        this.isPreloadTextViewed$ = of(true);
        // Paginator | Paginators count
        this.paginatorTotalSubject = new BehaviorSubject(0);
        this.subscriptions = [];
        this.paginatorTotal$ = this.paginatorTotalSubject.asObservable();
        // subscribe hasItems to (entitySubject.length==0)
        var hasItemsSubscription = this.paginatorTotal$.pipe(distinctUntilChanged(), skip(1)).subscribe(function (res) { return _this.hasItems = res > 0; });
        this.subscriptions.push(hasItemsSubscription);
    }
    BaseDataSource.prototype.connect = function (collectionViewer) {
        // Connecting data source
        return this.entitySubject.asObservable();
    };
    BaseDataSource.prototype.disconnect = function (collectionViewer) {
        // Disonnecting data source
        this.entitySubject.complete();
        this.paginatorTotalSubject.complete();
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    BaseDataSource.prototype.baseFilter = function (_entities, _queryParams, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new HttpExtenstionsModel();
        return httpExtention.baseFilter(_entities, _queryParams, _filtrationFields);
    };
    BaseDataSource.prototype.sortArray = function (_incomingArray, _sortField, _sortOrder) {
        if (_sortField === void 0) { _sortField = ''; }
        if (_sortOrder === void 0) { _sortOrder = 'asc'; }
        var httpExtention = new HttpExtenstionsModel();
        return httpExtention.sortArray(_incomingArray, _sortField, _sortOrder);
    };
    BaseDataSource.prototype.searchInArray = function (_incomingArray, _queryObj, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new HttpExtenstionsModel();
        return httpExtention.searchInArray(_incomingArray, _queryObj, _filtrationFields);
    };
    return BaseDataSource;
}());
export { BaseDataSource };
//# sourceMappingURL=_base.datasource.js.map