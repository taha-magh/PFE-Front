import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from "sweetalert2";
var TabEvenementComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabEvenementComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "sujet",
            "date",
            "object",
            "piece_jointe",
            "actions",
        ];
        this.data = [
            {
                sujet: "sujet 1",
                date: "21/03/2021",
                object: "object 1",
                piece_jointe: "pièce 1",
            },
            {
                sujet: "sujet 2",
                date: "21/09/2013",
                object: "object 2",
                piece_jointe: "pièce 2",
            },
            {
                sujet: "sujet 3",
                date: "09/03/2019",
                object: "object 3",
                piece_jointe: "pièce 3",
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
    TabEvenementComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabEvenementComponent.prototype.getEchange = function () {
        this.dataSource = new MatTableDataSource(this.data);
        this.isLoading = false;
    };
    // ============================================
    // Filter de recherche
    // ============================================
    TabEvenementComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabEvenementComponent.prototype.deleteSubvention = function (id) {
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
    TabEvenementComponent.prototype.addSubvention = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["pages/juridique/add-evenement"]);
    };
    // ============================================
    // Methode de modification subvention
    // ============================================
    TabEvenementComponent.prototype.editSubvention = function (idSub) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("subId");
        window.localStorage.setItem("subId", "" + idSub.id);
        this.router.navigate(["pages/juridique/upd-evenement"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabEvenementComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataSub", this.translate.instant("Liste des échanges"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabEvenementComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabEvenementComponent.prototype, "sort", void 0);
    TabEvenementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-tab-evenement',
            templateUrl: './tab-evenement.component.html',
            styleUrls: ['./tab-evenement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabEvenementComponent);
    return TabEvenementComponent;
}());
export { TabEvenementComponent };
//# sourceMappingURL=tab-evenement.component.js.map