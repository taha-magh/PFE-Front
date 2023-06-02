import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import {TypeIndicDelegataireService} from '../service/typeIndicDelegataire/type-indic-delegataire.service';

@Component({
	selector: "kt-list-type-indicateur-delegataire",
	templateUrl: "./list-type-indicateur-delegataire.component.html",
	styleUrls: ["./list-type-indicateur-delegataire.component.scss"],
})
export class ListTypeIndicateurDelegataireComponent implements OnInit {
	typeIndicDelegatairess: any;
	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		'id',
		'libelle',
		'description',
		'actions',
	];
	// ============================================
	// Declarations
	// ============================================
	dataSource = new MatTableDataSource<any>();
	isLoadingResults = true;
	isLoading = true;
	// ============================================
	// Controles pagination
	// ============================================
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		private translate: TranslateService,
		private router: Router,

		private datePipe: DatePipe,
		private excelService: ExcelAssociationService,
		private typeIndicDelegataireService: TypeIndicDelegataireService,
	) {
	}
	getAllTypeIndicDelegataire(): void {
		this.typeIndicDelegataireService.getAllTypeIndicDelegataire({ size: 1000 }).subscribe(
			(res) => {
				console.log(res.body);
				this.typeIndicDelegatairess = res.body;
				this.dataSource.data = res.body;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	ngOnInit() {
		console.log('fffffffffff',this.getAllTypeIndicDelegataire());
		this.columns = [
			'id',
			'libelle',
			'description',
			'actions',
		];
		this.dataSource = new MatTableDataSource(this.data);
		this.getAllTypeIndicDelegataire();
	}

	addTypeIndicDelegataire(): void {
		this.router.navigate(['pages/parametrage/add-type-indicateur-delegataire']);
	}
	updateTypeIndicDelegataire(id: number): void {
		this.router.navigate(['pages/parametrage/upd-type-indicateur-delegataire/' +id]);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	deleteTypeIndicDelegataire(id: number): void {
		Swal.fire({
			title: 'Voulez vous supprimer cet enregistrement ?',
			icon: 'question',
			iconHtml: '?',
			showCancelButton: true,
			showCloseButton: true,
			confirmButtonText: 'Oui',
			cancelButtonText: 'Non',
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				console.log(' supprimer ');
				this.typeIndicDelegataireService.deleteTypeIndicDelegataire(id).subscribe(
					(res) => {
						console.log('res ==> ', res.body);
						location.reload();
						// a revoire !!!!!!!!!!!
					},
					(error) => {
						console.log(
							'error ===============================================> ',
							error
						);
					}
				);
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: this.translate.instant(
						'PAGES.GENERAL.MSG_DEL_CONFIRMED'
					),
					showConfirmButton: false,
					timer: 2500,
				});
			} else {
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: this.translate.instant(
						'PAGES.GENERAL.MSG_DEL_ANNULER'
					),
					showConfirmButton: false,
					timer: 2500,
				});
			}
		});
	}

	createDataJson(i: number): excelData {
		return {
			id: this.TypeAlert[i].id,
			libelle: this.TypeAlert[i].libelle,
			description: this.TypeAlert[i].description,
		};
	}
}
export interface excelData {
	id: string;
	libelle: string;
	description: string;
}
