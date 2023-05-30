import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ConventionService } from "../../utils/convention.service";
import { delay } from "rxjs/operators";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from 'sweetalert2';
var TabConventionComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabConventionComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "objet",
            "dateDepot",
            "type",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.getConvention();
    }
    TabConventionComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabConventionComponent.prototype.getConvention = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        console.log("id :" + this.id);
        this.service
            .getAllConventionListById("/convention/index/", this.id)
            .pipe(delay(300))
            .subscribe(function (data) {
            _this.dataSource = new MatTableDataSource(data);
            _this.isLoading = false;
            _this.isLoadingResults = false;
            _this.paginator._intl.itemsPerPageLabel = _this.translate.instant("PAGES.GENERAL.ITEMS_PER_PAGE_LABEL");
            _this.paginator._intl.nextPageLabel = _this.translate.instant("PAGES.GENERAL.NEXT_PAGE_LABEL");
            _this.paginator._intl.previousPageLabel = _this.translate.instant("PAGES.GENERAL.PREVIOUS_PAGE_LABEL");
            _this.paginator._intl.lastPageLabel = _this.translate.instant("PAGES.GENERAL.LAST_PAGE_LABEL");
            _this.paginator._intl.firstPageLabel = _this.translate.instant("PAGES.GENERAL.FIRST_PAGE_LABEL");
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    // ============================================
    // Filter de recherche
    // ============================================
    TabConventionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des convention
    // ============================================
    TabConventionComponent.prototype.deleteConvention = function (id) {
        var _this = this;
        Swal.fire({
            title: 'هل تريد مسح هذه المعطيات ؟',
            icon: 'question',
            iconHtml: '؟',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
        }).then(function (result) {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                _this.service
                    .deleteConvention("/convention/delete/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getConvention();
                });
                _this.service
                    .deletefiles("/PjConvention/ByIdConvention/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode d'insertion des convention
    // ============================================
    TabConventionComponent.prototype.addConvention = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["../../convention/add-convention"]);
    };
    // ============================================
    // Methode de modification activites
    // ============================================
    TabConventionComponent.prototype.editConvention = function (idConv) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("convId");
        window.localStorage.setItem("convId", "" + idConv.id);
        this.router.navigate(["convention/edit-convention"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabConventionComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataConv", this.translate.instant("PAGES.CONVENTION.TITRE_INDEX"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabConventionComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabConventionComponent.prototype, "sort", void 0);
    TabConventionComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-convention",
            templateUrl: "./tab-convention.component.html",
            styleUrls: ["./tab-convention.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [ConventionService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabConventionComponent);
    return TabConventionComponent;
}());
export { TabConventionComponent };
//# sourceMappingURL=tab-convention.component.js.map