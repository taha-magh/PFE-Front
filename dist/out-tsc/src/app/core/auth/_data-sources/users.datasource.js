import * as tslib_1 from "tslib";
// NGRX
import { select } from '@ngrx/store';
// CRUD
import { BaseDataSource } from '../../_base/crud';
import { selectUsersInStore, selectUsersPageLoading, selectUsersShowInitWaitingMessage } from '../_selectors/user.selectors';
var UsersDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(UsersDataSource, _super);
    function UsersDataSource(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.loading$ = _this.store.pipe(select(selectUsersPageLoading));
        _this.isPreloadTextViewed$ = _this.store.pipe(select(selectUsersShowInitWaitingMessage));
        _this.store.pipe(select(selectUsersInStore)).subscribe(function (response) {
            _this.paginatorTotalSubject.next(response.totalCount);
            _this.entitySubject.next(response.items);
        });
        return _this;
    }
    return UsersDataSource;
}(BaseDataSource));
export { UsersDataSource };
//# sourceMappingURL=users.datasource.js.map