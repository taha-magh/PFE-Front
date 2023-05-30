import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { delay } from "rxjs/operators";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from 'sweetalert2';
var TabRestaurationComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabRestaurationComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        this.isLoading = true;
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
        this.getRestauration();
    }
    TabRestaurationComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabRestaurationComponent.prototype.getRestauration = function () {
        var _this = this;
        this.isLoading = true;
        this.id = this.route.snapshot.params["id"];
        this.service
            .getAllSubventionListById("/restauration/index/", this.id)
            .pipe(delay(300))
            .subscribe(function (data) {
            _this.isLoading = false;
            _this.dataSource = new MatTableDataSource(data);
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
    TabRestaurationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabRestaurationComponent.prototype.deleteRestauration = function (id) {
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
                    .deleteSubvention("/restauration/delete/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getRestauration();
                });
                _this.service
                    .deletefiles("/PjRestauration/ByIdRestauration/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode d'insertion des associations
    // ============================================
    TabRestaurationComponent.prototype.addRestauration = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["../../restauration/add-restauration"]);
    };
    // ============================================
    // Methode de modification activites
    // ============================================
    TabRestaurationComponent.prototype.editRestauration = function (idResto) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("restoId");
        window.localStorage.setItem("restoId", "" + idResto.id);
        this.router.navigate(["restauration/edit-restauration"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabRestaurationComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataResto", this.translate.instant("PAGES.RESTAURATION.TITRE_INDEX"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabRestaurationComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabRestaurationComponent.prototype, "sort", void 0);
    TabRestaurationComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-restauration",
            templateUrl: "./tab-restauration.component.html",
            styleUrls: ["./tab-restauration.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabRestaurationComponent);
    return TabRestaurationComponent;
}());
export { TabRestaurationComponent };
//# sourceMappingURL=tab-restauration.component.js.map