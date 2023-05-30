import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var NoterPersonnelComponent = /** @class */ (function () {
    function NoterPersonnelComponent(translate, router, datePipe, excelService) {
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
            "CIN",
            "DIVISION",
            "SERVICE",
            "POSTE",
            "NOTER",
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
                NOM: "sample text",
                PRENOM: "sample text",
                CIN: "A2454",
                DIVISION: "sample text",
                SERVICE: "sample text",
                POSTE: "sample text",
                NOTER: ".....",
            },
            {
                NUM: "2",
                NOM: "sample text",
                PRENOM: "sample text",
                CIN: "A2454",
                DIVISION: "sample text",
                SERVICE: "sample text",
                POSTE: "sample text",
                NOTER: ".....",
            },
        ];
    }
    NoterPersonnelComponent.prototype.ngOnInit = function () {
        this.columns = ["NUM", "LIBELLE", "DATE_DEBUT", "OBJET"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    NoterPersonnelComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    NoterPersonnelComponent.prototype.deleteAssociation = function (id) {
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
    NoterPersonnelComponent.prototype.add_note = function () {
        this.router.navigate([
            "pages/notation/add-notation",
        ]);
    };
    NoterPersonnelComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    NoterPersonnelComponent.prototype.Valider = function () {
        this.router.navigate([
            "pages/notation/show-notation",
        ]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], NoterPersonnelComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], NoterPersonnelComponent.prototype, "sort", void 0);
    NoterPersonnelComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-noter-personnel',
            templateUrl: './noter-personnel.component.html',
            styleUrls: ['./noter-personnel.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], NoterPersonnelComponent);
    return NoterPersonnelComponent;
}());
export { NoterPersonnelComponent };
//# sourceMappingURL=noter-personnel.component.js.map