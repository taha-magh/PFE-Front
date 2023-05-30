import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListTypeTarifictionComponent = /** @class */ (function () {
    function ListTypeTarifictionComponent(translate, router, datePipe, excelService) {
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
            "CategorieProduit",
            "TypeProduit",
            "SousTypeProduit",
            "IdProduit",
            "DateDebut",
            "Prix",
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
                CategorieProduit: "Categorie 1",
                TypeProduit: " Type 1",
                SousTypeProduit: "Sous Type 1",
                IdProduit: "Produit 1",
                DateDebut: "10/10/2022",
                Prix: "1000 DH",
            },
            {
                Id: "01/02",
                CategorieProduit: "Categorie 2",
                TypeProduit: " Type 2",
                SousTypeProduit: "Sous Type 2",
                IdProduit: "Produit 2",
                DateDebut: "20/03/2021",
                Prix: "2400 DH",
            },
            {
                Id: "01/03",
                CategorieProduit: "Categorie 3",
                TypeProduit: " Type 3",
                SousTypeProduit: "Sous Type 3",
                IdProduit: "roduit 3",
                DateDebut: "03/09/2019",
                Prix: "4390 DH",
            },
            {
                Id: "01/04",
                CategorieProduit: "Categorie 4",
                TypeProduit: " Type 4",
                SousTypeProduit: "Sous Type 4",
                IdProduit: "roduit 4",
                DateDebut: "04/01/2020",
                Prix: "9000 DH",
            },
        ];
    }
    ListTypeTarifictionComponent.prototype.addAssociation = function () {
        // juradiction
        this.router.navigate(["pages/Marche/add-type-tarifiction"]);
    };
    ListTypeTarifictionComponent.prototype.ModifierAssociation1 = function () {
        // juradiction
        this.router.navigate(["pages/Marche/modification-type-tarifiction"]);
    };
    ListTypeTarifictionComponent.prototype.DetailAssociation1 = function () {
        // juradiction
        this.router.navigate(["pages/Marche/detail-type-tarifiction"]);
    };
    ListTypeTarifictionComponent.prototype.deleteAssociation = function (id) {
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
    ListTypeTarifictionComponent.prototype.ngOnInit = function () {
        this.columns = [
            "Id",
            "CategorieProduit",
            "TypeProduit",
            "SousTypeProduit",
            "IdProduit",
            "DateDebut",
            "Prix",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListTypeTarifictionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListTypeTarifictionComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeJuridiction[i].Id,
            CategorieProduit: this.TypeJuridiction[i].CategorieProduit,
            TypeProduit: this.TypeJuridiction[i].TypeProduit,
            SousTypeProduit: this.TypeJuridiction[i].SousTypeProduit,
            IdProduit: this.TypeJuridiction[i].IdProduit,
            DateDebut: this.TypeJuridiction[i].DateDebut,
            Prix: this.TypeJuridiction[i].Prix,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListTypeTarifictionComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListTypeTarifictionComponent.prototype, "sort", void 0);
    ListTypeTarifictionComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-type-Tarifiction",
            templateUrl: "./list-type-Tarifiction.component.html",
            styleUrls: ["./list-type-Tarifiction.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListTypeTarifictionComponent);
    return ListTypeTarifictionComponent;
}());
export { ListTypeTarifictionComponent };
//# sourceMappingURL=list-type-tarifiction.component.js.map