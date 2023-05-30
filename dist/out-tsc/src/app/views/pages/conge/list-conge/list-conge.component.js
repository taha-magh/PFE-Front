import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListCongeComponent = /** @class */ (function () {
    function ListCongeComponent(translate, router, datePipe, excelService) {
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
            "NOM",
            "PRENOM",
            "TYPE",
            "NOMBRE_JOUR",
            "STATUT",
            "DATE_DEBUT",
            "DATE_FIN",
            "N_JOURS",
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
                NOM: "Benouhi",
                PRENOM: "Ayoub",
                TYPE: "aaaa",
                NOMBRE_JOUR: "aaaa",
                STATUT: "aaaa",
                DATE_DEBUT: "aaaa",
                DATE_FIN: "aaaa",
                N_JOURS: "aaaa",
            },
            {
                NUM: "2",
                NOM: "Rai",
                PRENOM: "Bilal",
                TYPE: "aaaa",
                NOMBRE_JOUR: "aaaa",
                STATUT: "aaaa",
                DATE_DEBUT: "aaaa",
                DATE_FIN: "aaaa",
                N_JOURS: "aaaa",
            },
        ];
    }
    ListCongeComponent.prototype.deleteAssociation = function (id) {
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
    ListCongeComponent.prototype.ngOnInit = function () {
        this.columns = ["Nom", "Prenom", "Raison", "Cin", "Gsm", "Fax"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListCongeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListCongeComponent.prototype.createDataJson = function (i) {
        return {
            NUM: this.TypeAlert[i].NUM,
            NOM: this.TypeAlert[i].NOM,
            PRENOM: this.TypeAlert[i].PRENOM,
            TYPE: this.TypeAlert[i].Cin,
            NOMBRE_JOUR: this.TypeAlert[i].NOMBRE_JOUR,
            STATUT: this.TypeAlert[i].STATUT,
            DATE_DEBUT: this.TypeAlert[i].DATE_DEBUT,
            DATE_FIN: this.TypeAlert[i].DATE_FIN,
            N_JOURS: this.TypeAlert[i].N_JOURS,
        };
    };
    ListCongeComponent.prototype.addConge = function () {
        this.router.navigate(["/pages/conge/add-conge"]);
    };
    ListCongeComponent.prototype.Details = function () {
        this.router.navigate(["/pages/conge/show-conge"]);
    };
    ListCongeComponent.prototype.Edit = function () {
        this.router.navigate(["/pages/conge/edit-conge"]);
    };
    ListCongeComponent.prototype.Imprimer = function () {
        this.router.navigate(["/pages/conge/imprimer-attestation-conge"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListCongeComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListCongeComponent.prototype, "sort", void 0);
    ListCongeComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-conge",
            templateUrl: "./list-conge.component.html",
            styleUrls: ["./list-conge.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListCongeComponent);
    return ListCongeComponent;
}());
export { ListCongeComponent };
//# sourceMappingURL=list-conge.component.js.map