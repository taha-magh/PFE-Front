import { UsersTable } from './users.table';
import { PermissionsTable } from './permissions.table';
import { RolesTable } from './roles.table';
// Wrapper class
var AuthDataContext = /** @class */ (function () {
    function AuthDataContext() {
    }
    AuthDataContext.users = UsersTable.users;
    AuthDataContext.roles = RolesTable.roles;
    AuthDataContext.permissions = PermissionsTable.permissions;
    return AuthDataContext;
}());
export { AuthDataContext };
//# sourceMappingURL=auth.data-context.js.map