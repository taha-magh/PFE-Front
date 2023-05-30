import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var StatusComponent = /** @class */ (function () {
    function StatusComponent(translate, router, datePipe, excelService) {
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
            "Status",
            "Execution",
            "Type",
            "Resultat",
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
                "Status": " Statuts 1",
                "Execution": "Execution 1 ",
                "Type": "Type  1",
                "Resultat": "Resultat 1",
            },
            {
                "Status": " Statuts 2",
                "Execution": "Execution 2 ",
                "Type": "Type 2",
                "Resultat": "Resultat 2",
            },
            {
                "Status": " Statuts 3",
                "Execution": "Execution 3 ",
                "Type": "Type  3",
                "Resultat": "Resultat 3",
            },
            {
                "Status": " Statuts 4",
                "Execution": "Execution 4 ",
                "Type": "Type 4",
                "Resultat": "Resultat 4",
            }
        ];
    }
    StatusComponent.prototype.addAssociation = function () {
        // audianc
        this.router.navigate(["pages/juridique/add-status"]);
    };
    //   DetailAssociation(): void {
    // 	// audianc
    //     this.router.navigate(["pages/Marche/detail-type-hangar"]);
    //   }
    StatusComponent.prototype.ModifierAssociation = function () {
        // audianc
        this.router.navigate(["pages/juridique/upd-status"]);
    };
    StatusComponent.prototype.deleteAssociation = function (id) {
        var _this = this;
        Swal.fire({
            title: 'Voulez vous supprimer cet enregistrement ?',
            icon: 'question',
            iconHtml: '?',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non',
        }).then(function (result) {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    StatusComponent.prototype.ngOnInit = function () {
        this.columns = ["Status",
            "Execution",
            "Type",
            "Resultat",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    StatusComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    StatusComponent.prototype.createDataJson = function (i) {
        return {
            Status: this.TypeAudience[i].Status,
            Execution: this.TypeAudience[i].Execution,
            Type: this.TypeAudience[i].Type,
            Resultat: this.TypeAudience[i].Resultat,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], StatusComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], StatusComponent.prototype, "sort", void 0);
    StatusComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-Status',
            templateUrl: './status.component.html',
            styleUrls: ['./status.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], StatusComponent);
    return StatusComponent;
}());
export { StatusComponent };
//# sourceMappingURL=status.component.js.map