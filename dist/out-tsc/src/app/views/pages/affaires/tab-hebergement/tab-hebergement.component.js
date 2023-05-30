import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from 'sweetalert2';
var TabHebergementComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabHebergementComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "numDemande",
            "objet",
            "serviceConcerne",
            "description",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
    }
    TabHebergementComponent.prototype.ngOnInit = function () {
        this.getDemandes();
    };
    // ============================================
    // Recuperer tous les demandes
    TabHebergementComponent.prototype.getDemandes = function () {
        /*	this.dataSource = [{
                "num": "1/2022",
                "nom": "nom affaire 1 ",
                "defendresse": "Test" ,
                "tribunal": "Tech ",
                "typeAffaire": "Administratif",
                "demandresse": "Partie  " ,
                "dateDepot":"01-12-2019",
                "dateDebut": "01-01-2020",
                "ville": "Rabat"} ]; */
        this.isLoading = false;
    };
    // ============================================
    /*public getRestauration() {
        this.id = this.route.snapshot.params["id"];
        this.service
            .getAllSubventionListById("/hebergement/index/", this.id)
            .pipe(delay(300))
            .subscribe(
                (data) => {
                    this.isLoading = false;
                    this.dataSource = new MatTableDataSource(data);
                    this.isLoadingResults = false;
                    this.paginator._intl.itemsPerPageLabel = this.translate.instant(
                        "PAGES.GENERAL.ITEMS_PER_PAGE_LABEL"
                    );
                    this.paginator._intl.nextPageLabel = this.translate.instant(
                        "PAGES.GENERAL.NEXT_PAGE_LABEL"
                    );
                    this.paginator._intl.previousPageLabel = this.translate.instant(
                        "PAGES.GENERAL.PREVIOUS_PAGE_LABEL"
                    );
                    this.paginator._intl.lastPageLabel = this.translate.instant(
                        "PAGES.GENERAL.LAST_PAGE_LABEL"
                    );
                    this.paginator._intl.firstPageLabel = this.translate.instant(
                        "PAGES.GENERAL.FIRST_PAGE_LABEL"
                    );
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                (err) => {
                    this.isLoading = false;
                    console.log(err);
                    this.isLoadingResults = false;
                }
            );
    }
*/
    // ============================================
    // Filter de recherche
    // ============================================
    /*applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }*/
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabHebergementComponent.prototype.deleteHebergement = function (id) {
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
                    .deleteSubvention("/hebergement/delete/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //	this.getRestauration();
                });
                _this.service
                    .deletefiles("/PjHebergement/ByIdHebergement/", id)
                    .subscribe(function (data) {
                    console.log("File deleted : " + id);
                });
            }
        });
    };
    // ============================================
    // Methode d'insertion des associations
    // ============================================
    // ============================================
    // Methode de modification activites
    // ============================================
    TabHebergementComponent.prototype.editHebergement = function (id) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("hebergId");
        window.localStorage.setItem("hebergId", "" + id);
        this.router.navigate(["hebergement/edit-hebergement/" + id]);
    };
    TabHebergementComponent.prototype.detailsHebergement = function (id) {
        var idHeb = this.route.snapshot.params["id"];
        window.localStorage.removeItem("hebergId");
        window.localStorage.setItem("hebergId", "" + idHeb);
        this.router.navigate(["/hebergement/show-hebergement/" + id]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabHebergementComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataHeberg", this.translate.instant("PAGES.HEBERGEMENT.TITRE_INDEX"));
    };
    TabHebergementComponent.prototype.addDemande = function () {
        this.router.navigate(["pages/affaires/add-demande"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabHebergementComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabHebergementComponent.prototype, "sort", void 0);
    TabHebergementComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-hebergement",
            templateUrl: "./tab-hebergement.component.html",
            styleUrls: ["./tab-hebergement.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabHebergementComponent);
    return TabHebergementComponent;
}());
export { TabHebergementComponent };
//# sourceMappingURL=tab-hebergement.component.js.map