import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListeFormationComponent = /** @class */ (function () {
    function ListeFormationComponent(translate, router, datePipe, excelService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.data = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "NUM",
            "TYPE",
            "DATE_DEBUT",
            "DATE_FIN",
            "PIECE_JOINTE",
            "PERSONNELS",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                NUM: "1",
                TYPE: "aaaa",
                DATE_DEBUT: "aaaa",
                DATE_FIN: "aaaa",
            },
        ];
    }
    ListeFormationComponent.prototype.deleteAssociation = function (id) {
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
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    ListeFormationComponent.prototype.ngOnInit = function () {
        this.columns = ["Nom", "Prenom", "Raison", "Cin", "Gsm", "Fax"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListeFormationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListeFormationComponent.prototype.createDataJson = function (i) {
        return {
            NUM: this.TypeAlert[i].NUM,
            TYPE: this.TypeAlert[i].Cin,
            DATE_DEBUT: this.TypeAlert[i].DATE_DEBUT,
            DATE_FIN: this.TypeAlert[i].DATE_FIN,
        };
    };
    ListeFormationComponent.prototype.add = function () {
        this.router.navigate(["/pages/formation-continue/add-formation"]);
    };
    ListeFormationComponent.prototype.Details = function () {
        this.router.navigate(["/pages/formation-continue/show-formation"]);
    };
    ListeFormationComponent.prototype.Edit = function () {
        this.router.navigate(["/pages/conge/edit-conge"]);
    };
    ListeFormationComponent.prototype.Imprimer = function () {
        this.router.navigate(["/pages/conge/imprimer-attestation-conge"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListeFormationComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListeFormationComponent.prototype, "sort", void 0);
    ListeFormationComponent = tslib_1.__decorate([
        Component({
            selector: "kt-liste-formation",
            templateUrl: "./liste-formation.component.html",
            styleUrls: ["./liste-formation.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListeFormationComponent);
    return ListeFormationComponent;
}());
export { ListeFormationComponent };
//# sourceMappingURL=liste-formation.component.js.map