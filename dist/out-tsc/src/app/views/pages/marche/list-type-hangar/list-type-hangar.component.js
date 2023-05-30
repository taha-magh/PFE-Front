import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListTypeHangarComponent = /** @class */ (function () {
    function ListTypeHangarComponent(translate, router, datePipe, excelService) {
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
            "NumHangar",
            "Libelle",
            "Description",
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
                NumHangar: "01/01",
                Libelle: "Libelle 1 ",
                Description: "Description  1",
            },
            {
                NumHangar: "01/02",
                Libelle: "Libelle 2 ",
                Description: "Description 2",
            },
            {
                NumHangar: "01/03",
                Libelle: "Libelle 3 ",
                Description: "Description  3",
            },
            {
                NumHangar: "01/04",
                Libelle: "Libelle 4 ",
                Description: "Description 4",
            },
        ];
    }
    ListTypeHangarComponent.prototype.addAssociation = function () {
        // audianc
        this.router.navigate(["pages/Marche/add-type-hangar"]);
    };
    ListTypeHangarComponent.prototype.DetailAssociation = function () {
        // audianc
        this.router.navigate(["pages/Marche/detail-type-hangar"]);
    };
    ListTypeHangarComponent.prototype.ModifierAssociation = function () {
        // audianc
        this.router.navigate(["pages/Marche/modification-type-hangar"]);
    };
    ListTypeHangarComponent.prototype.deleteAssociation = function (id) {
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
    ListTypeHangarComponent.prototype.ngOnInit = function () {
        this.columns = ["NumHangar", "Libelle", "Description"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListTypeHangarComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListTypeHangarComponent.prototype.createDataJson = function (i) {
        return {
            NumHangar: this.TypeAudience[i].NumHangar,
            Libelle: this.TypeAudience[i].Libelle,
            Description: this.TypeAudience[i].Description,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListTypeHangarComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListTypeHangarComponent.prototype, "sort", void 0);
    ListTypeHangarComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-type-Hangar",
            templateUrl: "./list-type-Hangar.component.html",
            styleUrls: ["./list-type-Hangar.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListTypeHangarComponent);
    return ListTypeHangarComponent;
}());
export { ListTypeHangarComponent };
//# sourceMappingURL=list-type-hangar.component.js.map