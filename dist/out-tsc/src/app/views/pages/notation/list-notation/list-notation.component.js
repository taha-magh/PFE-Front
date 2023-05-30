import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListNotationComponent = /** @class */ (function () {
    function ListNotationComponent(translate, router, datePipe, excelService) {
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
            "LIBELLE",
            "DATE_DEBUT",
            "DATE_FIN",
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
                LIBELLE: "sample text",
                DATE_DEBUT: "12/12/2021",
                DATE_FIN: "25/12/2021",
            },
            {
                NUM: "2",
                LIBELLE: "sample text",
                DATE_DEBUT: "12/12/2021",
                DATE_FIN: "25/12/2021",
            },
        ];
    }
    ListNotationComponent.prototype.ngOnInit = function () {
        this.columns = ["NUM", "LIBELLE", "DATE_DEBUT", "OBJET"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListNotationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListNotationComponent.prototype.deleteAssociation = function (id) {
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
    ListNotationComponent.prototype.add = function () {
        this.router.navigate([
            "pages/notation/add-notation",
        ]);
    };
    ListNotationComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    ListNotationComponent.prototype.Details = function () {
        this.router.navigate([
            "pages/notation/show-notation",
        ]);
    };
    ListNotationComponent.prototype.Edit = function () {
        this.router.navigate([
            "pages/notation/edit-notation",
        ]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListNotationComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListNotationComponent.prototype, "sort", void 0);
    ListNotationComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-notation",
            templateUrl: "./list-notation.component.html",
            styleUrls: ["./list-notation.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListNotationComponent);
    return ListNotationComponent;
}());
export { ListNotationComponent };
//# sourceMappingURL=list-notation.component.js.map