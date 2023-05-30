import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from "sweetalert2";
import { MatDialog, } from "@angular/material/dialog";
var TabAComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabAComponent(dialogRef, service, translate, router, route, fileService) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "PP",
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",
            "actions",
        ];
        this.data = [
            {
                statut: "status 1",
                execution: "	Execution 1",
                type_execution: "Type 1",
                resultat: "	Resultat 1",
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
    TabAComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabAComponent.prototype.getEchange = function () {
        this.dataSource = new MatTableDataSource(this.data);
        this.isLoading = false;
    };
    // ============================================
    // Filter de recherche
    // ============================================
    TabAComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabAComponent.prototype.deleteSubvention = function (id) {
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
    TabAComponent.prototype.addSubvention = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["pages/juridique/add-status"]);
    };
    // ============================================
    // Methode de modification subvention
    // ============================================
    TabAComponent.prototype.editSubvention = function (idSub) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("subId");
        window.localStorage.setItem("subId", "" + idSub.id);
        this.router.navigate(["pages/juridique/upd-status"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabAComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataSub", this.translate.instant("Liste des échanges"));
    };
    TabAComponent.prototype.Details = function () {
        this.router.navigate(["pages/Convention/detaille-tab-convention"]);
    };
    TabAComponent.prototype.Edit = function () {
        this.router.navigate(["pages/Convention/upd-tab-convention"]);
    };
    TabAComponent.prototype.Nouveau = function () {
        //this.location.back();
        this.router.navigate(["pages/Convention/add-tab-convention"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabAComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabAComponent.prototype, "sort", void 0);
    TabAComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-tab-a',
            templateUrl: './tab-a.component.html',
            styleUrls: ['./tab-a.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog,
            SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabAComponent);
    return TabAComponent;
}());
export { TabAComponent };
//# sourceMappingURL=tab-a.component.js.map