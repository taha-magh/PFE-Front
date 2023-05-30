import * as tslib_1 from "tslib";
import { ActivitesService } from "../../utils/activites.service";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { delay } from "rxjs/operators";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from 'sweetalert2';
var TabActivitesComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabActivitesComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "numAutorisation",
            "dateActivite",
            "objet",
            "typeActivites",
            // "commune",
            // "lieu",
            "populationImpactee",
            // "note",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.getActivities();
    }
    TabActivitesComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabActivitesComponent.prototype.getActivities = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.service
            .getAllActivitiesListById("/activite/count/", this.id)
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
    TabActivitesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabActivitesComponent.prototype.deleteActivities = function (id) {
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
                    .deleteActivite("/activite/delete/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getActivities();
                });
                _this.service
                    .deletefiles("/PjActivite/ByIdActivite/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode de modification activites
    // ============================================
    TabActivitesComponent.prototype.editActivities = function (idActiv) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("activiteId");
        window.localStorage.setItem("activiteId", "" + idActiv.id);
        this.router.navigate(["activites/edit-activites"]);
    };
    // ============================================
    // Methode d'insertion des associations
    // ============================================
    TabActivitesComponent.prototype.addLocal = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        //this.router.navigate(["../../activites/activites/add-activites"]);
        this.router.navigate(["activites/add-activites"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabActivitesComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataActiv", this.translate.instant("PAGES.ACTIVITE.TITRE_INDEX"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabActivitesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabActivitesComponent.prototype, "sort", void 0);
    TabActivitesComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-activites",
            templateUrl: "./tab-activites.component.html",
            styleUrls: ["./tab-activites.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivitesService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabActivitesComponent);
    return TabActivitesComponent;
}());
export { TabActivitesComponent };
//# sourceMappingURL=tab-activites.component.js.map