import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from "sweetalert2";
var TabJugementComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabJugementComponent(service, translate, router, route, fileService) {
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "numero",
            "titre",
            "date",
            "description",
            "statut",
            "remarque",
            "piece_jointe",
            "actions",
        ];
        this.data = [
            {
                numero: "01/01",
                titre: "catégorie 1",
                date: "2015-01-05",
                description: "description 1",
                statut: "statut 1",
                remarque: "remarque 1",
                piece_jointe: "piéce 1",
            },
            {
                numero: "01/02",
                titre: "catégorie 2",
                date: "2019-07-05",
                description: "description 2",
                statut: "statut 1",
                remarque: "remarque 2",
                piece_jointe: "piéce 2",
            },
            {
                numero: "01/03",
                titre: "catégorie 3",
                date: "2022-01-19",
                description: "description 3",
                statut: "statut 1",
                remarque: "remarque 3",
                piece_jointe: "piéce 3",
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
    TabJugementComponent.prototype.ngOnInit = function () { };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabJugementComponent.prototype.getEchange = function () {
        this.dataSource = new MatTableDataSource(this.data);
        this.isLoading = false;
    };
    // ============================================
    // Filter de recherche
    // ============================================
    TabJugementComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabJugementComponent.prototype.deleteSubvention = function (id) {
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
    TabJugementComponent.prototype.addSubvention = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["pages/juridique/add-jugements"]);
    };
    // ============================================
    // Methode de modification subvention
    // ============================================
    TabJugementComponent.prototype.editSubvention = function (idSub) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("subId");
        window.localStorage.setItem("subId", "" + idSub.id);
        this.router.navigate(["pages/juridique/upd-jugements"]);
    };
    TabJugementComponent.prototype.DetailSubvention = function () {
        this.router.navigate(["/pages/juridique/detaille-jugements"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    TabJugementComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataSub", this.translate.instant("Liste des échanges"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabJugementComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabJugementComponent.prototype, "sort", void 0);
    TabJugementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-tab-jugement',
            templateUrl: './tab-jugement.component.html',
            styleUrls: ['./tab-jugement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SubventionsService,
            TranslateService,
            Router,
            ActivatedRoute,
            FilesUtilsService])
    ], TabJugementComponent);
    return TabJugementComponent;
}());
export { TabJugementComponent };
//# sourceMappingURL=tab-jugement.component.js.map