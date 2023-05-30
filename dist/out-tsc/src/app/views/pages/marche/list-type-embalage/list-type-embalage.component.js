import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListTypeEmbalageComponent = /** @class */ (function () {
    function ListTypeEmbalageComponent(translate, router, datePipe, excelService) {
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
            "Id",
            "Type",
            "SousType",
            "Libelle",
            "Description",
            "PoidMoyen",
            "PoisMoyenEmbraqui",
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
                Id: "01/01",
                Type: "Type 1",
                SousType: "Sous Type 1",
                Libelle: "Libelle 1",
                Description: "Descreption 1",
                PoidMoyen: "Poids Moiyen 1",
                PoisMoyenEmbraqui: "Poids Embraqui 1",
            },
            {
                Id: "01/02",
                Type: "Type 2",
                SousType: "Sous Type 2",
                Libelle: "Libelle 2",
                Description: "Descreption 2",
                PoidMoyen: "Poids Moiyen 2",
                PoisMoyenEmbraqui: "Poids Embraqui 2",
            },
            {
                Id: "01/03",
                Type: "Type 3",
                SousType: "Sous Type 3",
                Libelle: "Libelle 3",
                Description: "Descreption 3",
                PoidMoyen: "Poids Moiyen 3",
                PoisMoyenEmbraqui: "Poids Embraqui 3",
            },
            {
                Id: "01/04",
                Type: "Type 4",
                SousType: "Sous Type 4",
                Libelle: "Libelle 4",
                Description: "Descreption 4",
                PoidMoyen: "Poids Moiyen 4",
                PoisMoyenEmbraqui: "Poids Embraqui 4",
            },
            {
                Id: "01/05",
                Type: "Type 5",
                SousType: "Sous Type 5",
                Libelle: "Libelle 5",
                Description: "Descreption 5",
                PoidMoyen: "Poids Moiyen 5",
                PoisMoyenEmbraqui: "Poids Embraqui 5",
            },
        ];
    }
    ListTypeEmbalageComponent.prototype.deleteAssociation = function (id) {
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
    ListTypeEmbalageComponent.prototype.ngOnInit = function () {
        this.columns = [
            "Id",
            "Type",
            "SousType",
            "Libelle",
            "Description",
            "PoidMoyen",
            "PoisMoyenEmbraqui",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListTypeEmbalageComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListTypeEmbalageComponent.prototype.addAssociation = function () {
        //Alert
        this.router.navigate(["pages/Marche/add-type-embalage"]);
    };
    ListTypeEmbalageComponent.prototype.DetailAssociation = function () {
        //Alert
        this.router.navigate(["pages/Marche/detail-type-embalage"]);
    };
    ListTypeEmbalageComponent.prototype.MoudifierAssociation = function () {
        this.router.navigate(["pages/Marche/modification-type-embalage"]);
    };
    ListTypeEmbalageComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            Type: this.TypeAlert[i].Type,
            SousType: this.TypeAlert[i].SousType,
            Libelle: this.TypeAlert[i].Libelle,
            Description: this.TypeAlert[i].Description,
            PoidMoyen: this.TypeAlert[i].PoidMoyen,
            PoisMoyenEmbraqui: this.TypeAlert[i].PoisMoyenEmbraqui,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListTypeEmbalageComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListTypeEmbalageComponent.prototype, "sort", void 0);
    ListTypeEmbalageComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-type-embalage",
            templateUrl: "./list-type-embalage.component.html",
            styleUrls: ["./list-type-embalage.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListTypeEmbalageComponent);
    return ListTypeEmbalageComponent;
}());
export { ListTypeEmbalageComponent };
//# sourceMappingURL=list-type-embalage.component.js.map