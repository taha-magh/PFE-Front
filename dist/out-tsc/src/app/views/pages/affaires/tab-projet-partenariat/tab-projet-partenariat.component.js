import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { delay } from "rxjs/operators";
import { ProjetService } from "../../utils/projet-part.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from 'sweetalert2';
var TabProjetPartenariatComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabProjetPartenariatComponent(service, translate, router, route, fileService) {
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
            "nomProjet",
            "objet",
            //"populationImpactee",
            "typeProjetPartenariat",
            "dateDemarrage",
            "dateFin",
            "budgetAlloue",
            //"commune",
            //"finaliteProjet",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.getSubvention();
    }
    TabProjetPartenariatComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabProjetPartenariatComponent.prototype.getSubvention = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.service
            .getAllProjetPartenariatListById("/projetPartenariat/index/", this.id)
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
    TabProjetPartenariatComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabProjetPartenariatComponent.prototype.deleteProjetPartenariat = function (id) {
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
                    .deleteProjetPartenariat("/projetPartenariat/delete/", id)
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
                    .deletefiles("/PjProjetPartenariat/ByIdLocaux/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode d'insertion des associations
    // ============================================
    TabProjetPartenariatComponent.prototype.addProjetPartenariat = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate([
            "../../projet-partenariat/add-projet-partenariat",
        ]);
    };
    // ============================================
    // Methode de modification activites
    // ============================================
    TabProjetPartenariatComponent.prototype.editProjetPartenariat = function (idProjet) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("projetId");
        window.localStorage.setItem("projetId", "" + idProjet.id);
        this.router.navigate(["projet-partenariat/edit-projet-partenariat"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabProjetPartenariatComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataProjetPart", this.translate.instant("PAGES.PROJET_PART.TITRE_INDEX"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabProjetPartenariatComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabProjetPartenariatComponent.prototype, "sort", void 0);
    TabProjetPartenariatComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-projet-partenariat",
            templateUrl: "./tab-projet-partenariat.component.html",
            styleUrls: ["./tab-projet-partenariat.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [ProjetService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabProjetPartenariatComponent);
    return TabProjetPartenariatComponent;
}());
export { TabProjetPartenariatComponent };
//# sourceMappingURL=tab-projet-partenariat.component.js.map