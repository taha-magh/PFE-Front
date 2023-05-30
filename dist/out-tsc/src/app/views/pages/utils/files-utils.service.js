import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { DatePipe } from '@angular/common';
import * as XLSX from "xlsx";
import * as $ from "jquery";
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
var FilesUtilsService = /** @class */ (function () {
    function FilesUtilsService(http, datePipe, translate) {
        this.http = http;
        this.datePipe = datePipe;
        this.translate = translate;
    }
    // =====================================================
    // export data as excel file
    // =====================================================
    FilesUtilsService.prototype.exportToExcel = function (tableId, name) {
        var now = new Date();
        var timeSpan = this.datePipe.transform(now, "ddMMyyyyHHmmss");
        //let timeSpans = new Date().toISOString();
        var prefix = name;
        var fileName = prefix + "-" + timeSpan;
        var targetTableElm = document.getElementById(tableId);
        var wb = XLSX.utils.table_to_book(targetTableElm, { sheet: prefix });
        XLSX.writeFile(wb, fileName + ".xlsx");
    };
    // =====================================================
    // file size detector
    // =====================================================
    FilesUtilsService.prototype.fileSizeDetector = function () {
        $(function () {
            // We can attach the `fileselect` event to all file inputs on the page
            $(document).on("change", ":file", function () {
                var input = $(this), numFiles = input.get(0).files
                    ? input.get(0).files.length
                    : 1, label = input.val().replace(/\\/g, "/").replace(/.*\//, "");
                input.trigger("fileselect", [numFiles, label]);
            });
            // We can watch for our custom `fileselect` event like this
            $(document).ready(function () {
                $(":file").on("fileselect", function (event, numFiles, label) {
                    var input = $(this).parents(".input-group").find(":text"), log = numFiles > 1 ? numFiles + " وثائق مختارة" : label; // this.translate.instant("PAGES.GENERAL.??");
                    if (input.length) {
                        input.val(log);
                    }
                    else {
                        if (log)
                            alert(log);
                    }
                });
            });
        });
    };
    // =====================================================
    // options file
    // =====================================================
    FilesUtilsService.prototype.getFileName = function (file) {
        if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0)
            return file.substring(0, file.lastIndexOf("."));
    };
    // =====================================================
    // extrension file
    // =====================================================
    FilesUtilsService.prototype.getExtensionFile = function (file) {
        if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0) {
            var ext = file.substring(file.lastIndexOf(".") + 1);
            switch (ext) {
                case "txt":
                    return "txt.svg";
                case "pdf":
                    return "pdf.svg";
                case "jpg":
                    return "jpg.svg";
                case "png":
                    return "png.svg";
                case "doc":
                    return "doc.svg";
                case "docx":
                    return "doc.svg";
                case "xls":
                    return "xls.svg";
                case "xlsx":
                    return "xls.svg";
                case "ppt":
                    return "ppt.svg";
                case "pptx":
                    return "ppt.svg";
                case "csv":
                    return "csv.svg";
                case "xml":
                    return "xml.svg";
                case "zip":
                    return "zip.svg";
                case "rar":
                    return "zip.svg";
                case "html":
                    return "html.svg";
                default:
                    return "file.svg";
            }
        }
        else
            return "";
    };
    FilesUtilsService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            DatePipe,
            TranslateService])
    ], FilesUtilsService);
    return FilesUtilsService;
}());
export { FilesUtilsService };
//# sourceMappingURL=files-utils.service.js.map