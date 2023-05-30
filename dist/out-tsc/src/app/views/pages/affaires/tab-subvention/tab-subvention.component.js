import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { delay } from "rxjs/operators";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from 'sweetalert2';
var TabSubventionComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabSubventionComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "typeEchange",
            "dateEchange",
            "typeEchange",
            "deposePar",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.getSubvention();
    }
    TabSubventionComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabSubventionComponent.prototype.getSubvention = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        if (this.id != null) {
            this.service
                .getAllSubventionListById("/subventionFinance/index/", this.id)
                .pipe(delay(300))
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.dataSource = new MatTableDataSource(data);
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
            });
        }
    };
    // ============================================
    // Filter de recherche
    // ============================================
    TabSubventionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabSubventionComponent.prototype.deleteSubvention = function (id) {
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
                    .deleteSubvention("/subvention/delete/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getSubvention();
                });
                _this.service
                    .deletefiles("/PjSubvention/ByIdSubvention/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode d'insertion des subventions
    // ============================================
    TabSubventionComponent.prototype.addSubvention = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["../../subventions/add-subventions"]);
    };
    // ============================================
    // Methode de modification subvention
    // ============================================
    TabSubventionComponent.prototype.editSubvention = function (idSub) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("subId");
        window.localStorage.setItem("subId", "" + idSub.id);
        this.router.navigate(["subventions/edit-subventions"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabSubventionComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataSub", this.translate.instant("PAGES.SUBVENTION.TITRE_INDEX"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabSubventionComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabSubventionComponent.prototype, "sort", void 0);
    TabSubventionComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-subvention",
            templateUrl: "./tab-subvention.component.html",
            styleUrls: ["./tab-subvention.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabSubventionComponent);
    return TabSubventionComponent;
}());
export { TabSubventionComponent };
//# sourceMappingURL=tab-subvention.component.js.map