import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListProjetComponent = /** @class */ (function () {
    function ListProjetComponent(translate, router, datePipe, excelService) {
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
            "Nom",
            "Annee",
            "Duree",
            "Cant",
            "Programme",
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
                "Id": "01",
                "Nom": "Projet 1",
                "Annee": "2022/02/02",
                "Duree": "Duree 1",
                "Cant": "TCant 1 ",
                "Programme": "Programme 1",
            },
            {
                "Id": "02",
                "Nom": "Projet 2",
                "Annee": "2018/05/04",
                "Duree": "Duree 1",
                "Cant": "Cant 2 ",
                "Programme": "",
            },
            {
                "Id": "03",
                "Nom": "Projet 3",
                "Annee": "2020/02/11",
                "Duree": "Duree 1",
                "Cant": "Cant 3 ",
                "Programme": "Programme 3",
            },
            {
                "Id": "04",
                "Nom": "Projet 4 ",
                "Annee": "2022/10/02",
                "Duree": "Duree 1",
                "Cant": "Cant 4",
                "Programme": "",
            }
        ];
    }
    ListProjetComponent.prototype.ngOnInit = function () {
        this.columns = [
            "Id",
            "Nom",
            "Annee",
            "Duree",
            "Cant",
            "Programme",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListProjetComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListProjetComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/Projet/add-projet"]);
    };
    ListProjetComponent.prototype.DetailAssociation = function () {
        this.router.navigate(["pages/Projet/detaille-projet"]);
    };
    ListProjetComponent.prototype.ModifierAssociation = function () {
        this.router.navigate(["pages/Projet/updt-projet"]);
    };
    ListProjetComponent.prototype.deleteAssociation = function (id) {
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
    ListProjetComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            Nom: this.TypeAlert[i].Nom,
            Annee: this.TypeAlert[i].Annee,
            Duree: this.TypeAlert[i].Duree,
            Cant: this.TypeAlert[i].Cant,
            Programme: this.TypeAlert[i].Programme,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListProjetComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListProjetComponent.prototype, "sort", void 0);
    ListProjetComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-projet',
            templateUrl: './list-projet.component.html',
            styleUrls: ['./list-projet.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListProjetComponent);
    return ListProjetComponent;
}());
export { ListProjetComponent };
//# sourceMappingURL=list-projet.component.js.map