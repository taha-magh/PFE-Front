import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import { TypeIndicDelegataireService } from '../service/typeIndicDelegataire/type-indic-delegataire.service';
var ListTypeIndicateurDelegataireComponent = /** @class */ (function () {
    function ListTypeIndicateurDelegataireComponent(translate, router, datePipe, excelService, typeIndicDelegataireService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.typeIndicDelegataireService = typeIndicDelegataireService;
        this.data = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            'Id',
            'libelle',
            'description',
            'actions',
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                Id: '01',
                libelle: 'libelle 1',
                description: 'description 1',
            },
            {
                Id: '02',
                libelle: 'libelle 2',
                description: 'description 2',
            },
            {
                Id: '03',
                libelle: 'libelle 3',
                description: 'description 3',
            },
        ];
    }
    ListTypeIndicateurDelegataireComponent.prototype.getAllTypeIndicDelegataire = function () {
        var _this = this;
        this.typeIndicDelegataireService.getAllTypeIndicDelegataire({ size: 1000 }).subscribe(function (res) {
            console.log(res.body);
            _this.typeIndicDelegatairess = res.body;
            _this.dataSource.data = res.body;
        }, function (error) {
            console.log(error);
        });
    };
    ListTypeIndicateurDelegataireComponent.prototype.ngOnInit = function () {
        this.columns = [
            'Id',
            'libelle',
            'description',
            'actions',
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.getAllTypeIndicDelegataire();
    };
    ListTypeIndicateurDelegataireComponent.prototype.addTypeIndicDelegataire = function () {
        this.router.navigate(['pages/parametrage/add-type-indicateur-delegataire']);
    };
    ListTypeIndicateurDelegataireComponent.prototype.updateTypeIndicDelegataire = function (id) {
        this.router.navigate(['pages/parametrage/upd-type-indicateur-delegataire']);
    };
    ListTypeIndicateurDelegataireComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListTypeIndicateurDelegataireComponent.prototype.deleteTypeIndicDelegataire = function (id) {
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
                console.log(' supprimer ');
                _this.typeIndicDelegataireService.deleteTypeIndicDelegataire(id).subscribe(function (res) {
                    console.log('res ==> ', res.body);
                    location.reload();
                    // a revoire !!!!!!!!!!!
                }, function (error) {
                    console.log('error ===============================================> ', error);
                });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: _this.translate.instant('PAGES.GENERAL.MSG_DEL_CONFIRMED'),
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: _this.translate.instant('PAGES.GENERAL.MSG_DEL_ANNULER'),
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
        });
    };
    ListTypeIndicateurDelegataireComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            libelle: this.TypeAlert[i].libelle,
            description: this.TypeAlert[i].description,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListTypeIndicateurDelegataireComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListTypeIndicateurDelegataireComponent.prototype, "sort", void 0);
    ListTypeIndicateurDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-type-indicateur-delegataire",
            templateUrl: "./list-type-indicateur-delegataire.component.html",
            styleUrls: ["./list-type-indicateur-delegataire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService,
            TypeIndicDelegataireService])
    ], ListTypeIndicateurDelegataireComponent);
    return ListTypeIndicateurDelegataireComponent;
}());
export { ListTypeIndicateurDelegataireComponent };
// import { DatePipe } from "@angular/common";
// import { Component, OnInit, ViewChild } from "@angular/core";
// import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
// import { Router } from "@angular/router";
// import { TranslateService } from "@ngx-translate/core";
// import { ExcelAssociationService } from "../../utils/excel-association.service";
//
// export class ListTypeIndicateurDelegataireComponent implements OnInit {
// 	TypeAlert: any;
// 	data: excelData[] = [];
// 	columns: any[];
// 	footerData: any[][] = [];
// 	// ============================================
// 	// Presentation de datasource
// 	// ============================================
// 	displayedColumns: string[] = ["Id", "libelle", "description", "actions"];
// 	// ============================================
// 	// Declarations
// 	// ============================================
// 	dataSource = new MatTableDataSource<any>();
// 	isLoadingResults = true;
// 	isLoading = true;
// 	// ============================================
// 	// Controles pagination
// 	// ============================================
// 	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
// 	@ViewChild(MatSort, { static: true }) sort: MatSort;
//
// 	constructor(
// 		private translate: TranslateService,
// 		private router: Router,
//
// 		private datePipe: DatePipe,
// 		private excelService: ExcelAssociationService
// 	) {
// 		this.data = [
// 			{
// 				Id: "01",
// 				libelle: "libelle 1",
// 				description: "description 1",
// 			},
// 			{
// 				Id: "02",
// 				libelle: "libelle 2",
// 				description: "description 2",
// 			},
// 			{
// 				Id: "03",
// 				libelle: "libelle 3",
// 				description: "description 3",
// 			},
// 		];
// 	}
//
// 	ngOnInit() {
// 		this.columns = ["Id", "libelle", "description"];
// 		this.dataSource = new MatTableDataSource(this.data);
// 	}
// 	applyFilter(filterValue: string) {
// 		this.dataSource.filter = filterValue.trim().toLowerCase();
//
// 		if (this.dataSource.paginator) {
// 			this.dataSource.paginator.firstPage();
// 		}
// 	}
//
// 	addAssociation(): void {
// 		this.router.navigate([
// 			"pages/parametrage/add-type-indicateur-delegataire",
// 		]);
// 	}
// 	ModifierAssociation(): void {
// 		this.router.navigate([
// 			"pages/parametrage/upd-type-indicateur-delegataire",
// 		]);
// 	}
//
// 	createDataJson(i: number): excelData {
// 		return {
// 			Id: this.TypeAlert[i].Id,
// 			libelle: this.TypeAlert[i].libelle,
// 			description: this.TypeAlert[i].description,
// 		};
// 	}
// }
// export interface excelData {
// 	Id: string;
// 	libelle: string;
// 	description: string;
// }
//# sourceMappingURL=list-type-indicateur-delegataire.component.js.map