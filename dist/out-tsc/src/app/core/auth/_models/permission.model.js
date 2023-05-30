import * as tslib_1 from "tslib";
import { BaseModel } from '../../_base/crud';
var Permission = /** @class */ (function (_super) {
    tslib_1.__extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Permission.prototype.clear = function () {
        this.id = undefined;
        this.title = '';
        this.level = 1;
        this.parentId = undefined;
        this.isSelected = false;
        this.name = '';
        this._children = [];
    };
    return Permission;
}(BaseModel));
export { Permission };
//# sourceMappingURL=permission.model.js.map