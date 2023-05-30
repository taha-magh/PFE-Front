import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LaucauxService } from '../../utils/locaux.service';
import { delay } from 'rxjs/operators';
import { FilesUtilsService } from '../../utils/files-utils.service';
import Swal from 'sweetalert2';
var TabLocauxComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabLocauxComponent(associationService, translate, router, route, fileService) {
        this.associationService = associationService;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "nomLocal",
            // "localisation",
            "dateDemrrageGestion",
            "typeLocal",
            "dateFinGestion",
            //"duree",
            "adresseLocal",
            "statutGestion",
            //"commune",
            "actions"
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.getSubvention();
    }
    TabLocauxComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabLocauxComponent.prototype.getSubvention = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.associationService
            .getAllLocauxListById("/locaux/index/", this.id)
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
    TabLocauxComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabLocauxComponent.prototype.deleteLocaux = function (id) {
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
                    .deleteLocaux("/locaux/delete/", id)
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
                _this.associationService
                    .deletefiles("/PjLocaux/ByIdAssociation/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode d'insertion des locaux
    // ============================================
    TabLocauxComponent.prototype.addLocal = function () {
        this.id = this.route.snapshot.params['id'];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["../../locaux/add-locaux"]);
    };
    // ============================================
    // Methode de modification local
    // ============================================
    TabLocauxComponent.prototype.editLocaux = function (idLocal) {
        this.id = this.route.snapshot.params['id'];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("localId");
        window.localStorage.setItem("localId", "" + idLocal.id);
        this.router.navigate(["locaux/edit-locaux"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabLocauxComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataLocaux", this.translate.instant("PAGES.LOCAUX.TITRE_INDEX"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabLocauxComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabLocauxComponent.prototype, "sort", void 0);
    TabLocauxComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-locaux",
            templateUrl: "./tab-locaux.component.html",
            styleUrls: ["./tab-locaux.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [LaucauxService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabLocauxComponent);
    return TabLocauxComponent;
}());
export { TabLocauxComponent };
//# sourceMappingURL=tab-locaux.component.js.map