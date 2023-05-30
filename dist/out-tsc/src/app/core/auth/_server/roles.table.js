var RolesTable = /** @class */ (function () {
    function RolesTable() {
    }
    RolesTable.roles = [
        {
            id: 1,
            title: 'Administrator',
            isCoreRole: true,
            permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            title: 'collaborater',
            isCoreRole: false,
            permissions: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            title: 'collaborater2',
            isCoreRole: false,
            permissions: [1, 3, 4, 5]
        },
        {
            id: 4,
            title: 'Guest',
            isCoreRole: false,
            permissions: [11]
        }
    ];
    return RolesTable;
}());
export { RolesTable };
//# sourceMappingURL=roles.table.js.map