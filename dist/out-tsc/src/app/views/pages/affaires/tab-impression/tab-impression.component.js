import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from '../../utils/subventions.service';
import { delay } from 'rxjs/operators';
import { FilesUtilsService } from '../../utils/files-utils.service';
import Swal from 'sweetalert2';
var TabImpressionComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabImpressionComponent(associationService, translate, router, route, fileService) {
        this.associationService = associationService;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "objet",
            "tribunal",
            "date",
            "type",
            "actions"
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.getImpression();
    }
    TabImpressionComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabImpressionComponent.prototype.getImpression = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.associationService
            .getAllSubventionListById("/impression/index/", this.id)
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
    TabImpressionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabImpressionComponent.prototype.deleteImpression = function (id) {
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
                _this.associationService
                    .deleteSubvention("/impression/delete/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getImpression();
                });
                _this.associationService
                    .deletefiles("/PjImpression/ByIdImpression/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode d'insertion des associations
    // ============================================
    TabImpressionComponent.prototype.addImpression = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["../../impression/add-impression"]);
    };
    // ============================================
    // Methode de modification activites
    // ============================================
    TabImpressionComponent.prototype.editImpression = function (idPrint) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("printId");
        window.localStorage.setItem("printId", "" + idPrint.id);
        this.router.navigate(["impression/edit-impression"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabImpressionComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataPrint", this.translate.instant("PAGES.IMPRESSION.TITRE_INDEX"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabImpressionComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabImpressionComponent.prototype, "sort", void 0);
    TabImpressionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-tab-impression',
            templateUrl: './tab-impression.component.html',
            styleUrls: ['./tab-impression.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabImpressionComponent);
    return TabImpressionComponent;
}());
export { TabImpressionComponent };
//# sourceMappingURL=tab-impression.component.js.map