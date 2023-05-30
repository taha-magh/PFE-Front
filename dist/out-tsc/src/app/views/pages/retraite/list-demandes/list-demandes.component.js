import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListDemandesComponent = /** @class */ (function () {
    function ListDemandesComponent(translate, router, datePipe, excelService) {
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
            "MOTIF",
            "REMARQUE",
            "PIECE_JOINTE",
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
                MOTIF: "sample text",
                REMARQUE: "sample text",
                PIECE_JOINTE: "sample text",
            },
            {
                NUM: "2",
                MOTIF: "sample text",
                REMARQUE: "sample text",
                PIECE_JOINTE: "sample text",
            },
        ];
    }
    ListDemandesComponent.prototype.deleteAssociation = function (id) {
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
    ListDemandesComponent.prototype.ngOnInit = function () {
        this.columns = ["Nom", "Prenom", "Raison", "Cin", "Gsm", "Fax"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListDemandesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListDemandesComponent.prototype.add = function () {
        this.router.navigate(["/pages/retraite/add-demande-retraite"]);
    };
    ListDemandesComponent.prototype.Details = function () {
        this.router.navigate(["/pages/conge/show-conge"]);
    };
    ListDemandesComponent.prototype.Edit = function () {
        this.router.navigate(["/pages/conge/edit-conge"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListDemandesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListDemandesComponent.prototype, "sort", void 0);
    ListDemandesComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-demandes',
            templateUrl: './list-demandes.component.html',
            styleUrls: ['./list-demandes.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListDemandesComponent);
    return ListDemandesComponent;
}());
export { ListDemandesComponent };
//# sourceMappingURL=list-demandes.component.js.map