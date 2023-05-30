import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { environment } from "./../../../../environments/environment";
import * as XLSX from "xlsx";
import * as $ from "jquery";
import { DatePipe } from '@angular/common';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var BACKEND_URL = environment.API_BUREAU_ORDRE_URL;
var GED_URL = environment.API_ALFRESCO_URL;
var BoServiceService = /** @class */ (function () {
    function BoServiceService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.apiURL = "" + BACKEND_URL;
        this.AlfrescoURL = "" + GED_URL;
    }
    // get division & servive & peesonnel
    BoServiceService.prototype.getRessourceById = function (id, url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.apiURL + url + id).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BoServiceService.prototype.getPersonnelById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.apiURL + '/personnels/show/' + id).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BoServiceService.prototype.getData = function () {
        var type = this.http.get(this.apiURL + "/typeCourriers/index");
        var origineCE_PM = this.http.get(this.apiURL + "/origineCourierEntrants/type/pm");
        var topOrigineCE_PM = this.http.get(this.apiURL + "/origineCourierEntrants/top10/pm");
        //let origineCE_PP = this.http.get(this.apiURL + "/origineCourierEntrants/type/pp");
        var criticite = this.http.get(this.apiURL + "/criticiteCourriers/index");
        //let origineCS = this.http.get(this.apiURL + "/origineCourrierSortants/index");
        return forkJoin([type, origineCE_PM, topOrigineCE_PM, criticite]);
    };
    // ====================================
    // methodes service statistiques
    // ====================================
    // ====================================
    // methodes service courriers entrants
    // ====================================
    BoServiceService.prototype.getDivisionById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    BoServiceService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    BoServiceService.prototype.getAllObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    BoServiceService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    BoServiceService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    BoServiceService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    BoServiceService.prototype.deleteObject = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    BoServiceService.prototype.getNumCorrierByAnnee = function (url, id) {
        return this.http.get(this.apiURL + url + id, { responseType: 'text' });
    };
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Qurey service With paginator updated on 03.02.2021 param !: (path: string, pageable: Pageable, sortableColumn: Sort)
    BoServiceService.prototype.getAllObjectByPage = function (path, pageable) {
        var url = this.apiURL + path
            + '?page=' + pageable.pageNumber
            + '&size=' + pageable.pageSize
            + '&sort=id,desc';
        return this.http.get(url);
    };
    // filter & pagination
    BoServiceService.prototype.getAllObjectByFilterPage = function (path, filter, pageable) {
        var url = this.apiURL + path
            + '?keyword=' + filter
            + '&page=' + pageable.pageNumber
            + '&size=' + pageable.pageSize
            + '&sort=id,desc';
        return this.http.get(url);
    };
    // filter & pagination with two param
    BoServiceService.prototype.filterByRefOrDatePage = function (path, ref, dt, pageable) {
        var url = this.apiURL + path
            + '?ref=' + ref
            + '&dt=' + dt
            + '&page=' + pageable.pageNumber
            + '&size=' + pageable.pageSize
            + '&sort=id,desc';
        return this.http.get(url);
    };
    // sort methode ++++++++++++++++++++++++++++++++++++++
    BoServiceService.prototype.getSortParameters = function (sortableColumn) {
        if (sortableColumn == null) {
            return '&sort=id,desc';
        }
        return '&sort=' + sortableColumn.active + ',' + sortableColumn.direction;
    };
    // ====================================
    // Upload file
    // ====================================
    BoServiceService.prototype.updloadFiles = function (v, id) {
        console.log("taille de fichier :" + v.length);
        console.log('id file ' + id);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjCourriersEntrants/multiplefile", formda, { responseType: 'blob' });
    };
    // ====================================
    // Multiple Upload file / speciale case
    // ====================================
    BoServiceService.prototype.updloadFilesSC = function (file, idCE) {
        console.log("taille de fichier :" + file.length);
        for (var i = 0; i < file.length; i++) {
            console.info("ID_COURRIER :: " + idCE + " & File :: " + file[i].name);
            idCE = idCE + 1;
        }
        return console.log("taille de fichier :" + file.length);
    };
    BoServiceService.prototype.updloadFilesToServer = function (file, idCE) {
        var formda = new FormData();
        console.info("fSize :: " + file.size);
        //for (var i = 0; i < file.length; i++) {
        console.info("ID_COURRIER :: " + idCE + " & File :: " + file.name);
        formda.append("file", file);
        formda.append("id", idCE);
        //idCE = idCE +1;
        //}
        return this.http.post(this.AlfrescoURL + "/PjCourriersEntrants/multiplefile", formda, { responseType: 'blob' });
    };
    // =====================================
    BoServiceService.prototype.getByIdCourrierFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjCourriersEntrants/Allpjs/" + f);
    };
    BoServiceService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    // ==================== pour le test
    BoServiceService.prototype.updloadFiles2 = function (v, id) {
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjCourriersSortants/multiplefile", formda, { responseType: 'blob' });
    };
    BoServiceService.prototype.getByIdCourrierFiles2 = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjCourriersSortants/Allpjs/" + f);
    };
    // export data as excel file
    BoServiceService.prototype.exportToExcel = function (tableId, name) {
        var now = new Date();
        var timeSpan = this.datePipe.transform(now, "ddMMyyyyHHmmss");
        //let timeSpans = new Date().toISOString();
        var prefix = name;
        var fileName = prefix + "-" + timeSpan;
        var targetTableElm = document.getElementById(tableId);
        var wb = XLSX.utils.table_to_book(targetTableElm, { sheet: prefix });
        XLSX.writeFile(wb, fileName + ".xlsx");
    };
    // ====================================
    // file size detector
    // ====================================
    BoServiceService.prototype.fileSizeDetector = function () {
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
                    var input = $(this).parents(".input-group").find(":text"), log = numFiles > 1 ? numFiles + " وثائق مختارة" : label;
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
    // options file
    BoServiceService.prototype.getFileName = function (file) {
        if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0)
            return file.substring(0, file.lastIndexOf("."));
    };
    // extrension file
    BoServiceService.prototype.getExtensionFile = function (file) {
        if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0) {
            var ext = file.substring(file.lastIndexOf(".") + 1);
            switch (ext) {
                case 'txt':
                    return 'txt.svg';
                case 'pdf':
                    return 'pdf.svg';
                case 'jpg':
                    return 'jpg.svg';
                case 'png':
                    return 'png.svg';
                case 'doc':
                    return 'doc.svg';
                case 'docx':
                    return 'doc.svg';
                case 'xls':
                    return 'xls.svg';
                case 'xlsx':
                    return 'xls.svg';
                case 'ppt':
                    return 'ppt.svg';
                case 'pptx':
                    return 'ppt.svg';
                case 'csv':
                    return 'csv.svg';
                case 'xml':
                    return 'xml.svg';
                case 'zip':
                    return 'zip.svg';
                case 'rar':
                    return 'zip.svg';
                case 'html':
                    return 'html.svg';
                default:
                    return 'file.svg';
            }
        }
        else
            return "";
    };
    BoServiceService.prototype.PrintGenerator = function (id) {
        var httpOptions = {
            responseType: 'arraybuffer'
        };
        return this.http.get(this.apiURL + "/courrierEntrants/print/" + id, httpOptions);
    };
    // ============================================
    // File size converter
    // ============================================
    BoServiceService.prototype.getFormattedFileSizeService = function (size) {
        if (size < 1024)
            return size + ' B';
        var i = Math.floor(Math.log(size) / Math.log(1024));
        this.numF = (size / Math.pow(1024, i));
        var round = Math.round(this.numF);
        this.numF = round < 10 ? this.numF.toFixed(2) : round < 100 ? this.numF.toFixed(1) : round;
        return this.numF + " " + 'KMGTPEZY'[i - 1] + "B";
    };
    BoServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, DatePipe])
    ], BoServiceService);
    return BoServiceService;
}());
export { BoServiceService };
//# sourceMappingURL=bo-service.service.js.map