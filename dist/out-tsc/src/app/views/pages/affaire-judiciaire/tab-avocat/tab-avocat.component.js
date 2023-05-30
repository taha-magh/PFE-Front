import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from "sweetalert2";
var TabAvocatComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabAvocatComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "nom",
            "prenom",
            "raison_social",
            "cin",
            "GSM",
            "fax",
            "actions",
        ];
        this.data = [
            {
                nom: "ayoub",
                prenom: "faracha",
                raison_social: "raison 1",
                cin: "A5654",
                GSM: "0645754757",
                fax: "54656",
            },
            {
                nom: "bilal",
                prenom: "faracha",
                raison_social: "raison 2",
                cin: "A5654",
                GSM: "0645754757",
                fax: "54656",
            },
            {
                nom: "ahmed",
                prenom: "zizo",
                raison_social: "raison 3",
                cin: "A5654",
                GSM: "0645754757",
                fax: "54656",
            },
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.getEchange();
    }
    TabAvocatComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabAvocatComponent.prototype.getEchange = function () {
        this.dataSource = new MatTableDataSource(this.data);
        this.isLoading = false;
    };
    // ============================================
    // Filter de recherche
    // ============================================
    TabAvocatComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabAvocatComponent.prototype.deleteSubvention = function (id) {
        var _this = this;
        Swal.fire({
            title: "Voulez vous supprimer cet enregistrement ?",
            icon: "question",
            iconHtml: "?",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "Oui",
            cancelButtonText: "Non",
        }).then(function (result) {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                _this.service
                    .deleteSubvention("/subvention/delete/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    _this.getEchange();
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
    TabAvocatComponent.prototype.addSubvention = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["pages/contrats/add-avocat"]);
    };
    // ============================================
    // Methode de modification subvention
    // ============================================
    TabAvocatComponent.prototype.editSubvention = function (idSub) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("subId");
        window.localStorage.setItem("subId", "" + idSub.id);
        this.router.navigate(["pages/contrats/upd-avocat"]);
    };
    TabAvocatComponent.prototype.DetailSubvention = function () {
        //Alert
        this.router.navigate(["/pages/contrats/detaille-avocat"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabAvocatComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataSub", this.translate.instant("Liste des échanges"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabAvocatComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabAvocatComponent.prototype, "sort", void 0);
    TabAvocatComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-avocat",
            templateUrl: "./tab-avocat.component.html",
            styleUrls: ["./tab-avocat.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabAvocatComponent);
    return TabAvocatComponent;
}());
export { TabAvocatComponent };
//# sourceMappingURL=tab-avocat.component.js.map