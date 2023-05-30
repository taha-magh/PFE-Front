import * as tslib_1 from "tslib";
// NGRX
import { select } from '@ngrx/store';
// CRUD
import { BaseDataSource } from '../../_base/crud';
// Selectirs
import { selectQueryResult, selectRolesPageLoading, selectRolesShowInitWaitingMessage } from '../_selectors/role.selectors';
var RolesDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(RolesDataSource, _super);
    function RolesDataSource(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.loading$ = _this.store.pipe(select(selectRolesPageLoading));
        _this.isPreloadTextViewed$ = _this.store.pipe(select(selectRolesShowInitWaitingMessage));
        _this.store.pipe(select(selectQueryResult)).subscribe(function (response) {
            _this.paginatorTotalSubject.next(response.totalCount);
            _this.entitySubject.next(response.items);
        });
        return _this;
    }
    return RolesDataSource;
}(BaseDataSource));
export { RolesDataSource };
//# sourceMappingURL=roles.datasource.js.map