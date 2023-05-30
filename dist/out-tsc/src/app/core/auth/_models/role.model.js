import * as tslib_1 from "tslib";
import { BaseModel } from '../../_base/crud';
var Role = /** @class */ (function (_super) {
    tslib_1.__extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCoreRole = false;
        return _this;
    }
    Role.prototype.clear = function () {
        this.id = undefined;
        this.title = '';
        this.description = '';
        this.permissions = [];
        this.isCoreRole = false;
    };
    return Role;
}(BaseModel));
export { Role };
//# sourceMappingURL=role.model.js.map