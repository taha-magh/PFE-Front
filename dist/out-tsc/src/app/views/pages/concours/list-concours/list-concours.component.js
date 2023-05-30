import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListConcoursComponent = /** @class */ (function () {
    function ListConcoursComponent(translate, router, datePipe, excelService) {
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
            "DATE_PUBLICATION",
            "FIN_PUBLICATION",
            "DATE_DEBUT",
            "DATE_FIN",
            "HEURE_DEBUT",
            "HEURE_FIN",
            "LIEU_CONCOURS_ECRIT",
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
                TYPE: "sample text",
                DATE_PUBLICATION: "sample text",
                FIN_PUBLICATION: "sample text",
                DATE_DEBUT: "12/12/2021",
                DATE_FIN: "25/12/2021",
                HEURE_DEBUT: "sample text",
                HEURE_FIN: "sample text",
                LIEU_CONCOURS_ECRIT: "sample text",
            },
        ];
    }
    ListConcoursComponent.prototype.ngOnInit = function () {
        this.columns = ["NUM", "LIBELLE", "DATE_DEBUT", "OBJET"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListConcoursComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListConcoursComponent.prototype.deleteAssociation = function (id) {
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
    //changes
    ListConcoursComponent.prototype.add = function () {
        this.router.navigate(["pages/concours/add-concours"]);
    };
    ListConcoursComponent.prototype.Details = function () {
        this.router.navigate(["pages/concours/show-concours"]);
    };
    ListConcoursComponent.prototype.Edit = function () {
        this.router.navigate(["pages/concours/edit-concours"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListConcoursComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListConcoursComponent.prototype, "sort", void 0);
    ListConcoursComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-concours",
            templateUrl: "./list-concours.component.html",
            styleUrls: ["./list-concours.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListConcoursComponent);
    return ListConcoursComponent;
}());
export { ListConcoursComponent };
//# sourceMappingURL=list-concours.component.js.map