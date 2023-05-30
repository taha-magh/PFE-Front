import * as XLSX from "xlsx";
var getFileName = function (name) {
    var timeSpan = new Date().toISOString();
    var sheetName = name || "ExportResult";
    var fileName = sheetName + "-" + timeSpan;
    return {
        sheetName: sheetName,
        fileName: fileName
    };
};
var TableUtil = /** @class */ (function () {
    function TableUtil() {
    }
    TableUtil.prototype.exportTableToExcel = function (tableId, name) {
        var _a = getFileName(name), sheetName = _a.sheetName, fileName = _a.fileName;
        var targetTableElm = document.getElementById(tableId);
        var wb = XLSX.utils.table_to_book(targetTableElm, {
            sheet: sheetName
        });
        XLSX.writeFile(wb, fileName + ".xlsx");
    };
    TableUtil.prototype.exportArrayToExcel = function (arr, name) {
        var _a = getFileName(name), sheetName = _a.sheetName, fileName = _a.fileName;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.json_to_sheet(arr);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        XLSX.writeFile(wb, fileName + ".xlsx");
    };
    return TableUtil;
}());
export { TableUtil };
//# sourceMappingURL=table-util.js.map