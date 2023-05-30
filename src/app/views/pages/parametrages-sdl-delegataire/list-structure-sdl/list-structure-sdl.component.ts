import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import {StructureSdlService} from '../service/structureSdl/structure-sdl.service';

@Component({
	selector: 'kt-list-structure-sdl',
	templateUrl: './list-structure-sdl.component.html',
	styleUrls: ['./list-structure-sdl.component.scss'],
})
export class ListStructureSdlComponent implements OnInit {
	structureSdlss: any;
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
		private structureSdlService: StructureSdlService,
	) {
	}
	getAllStructureSdl(): void {
		this.structureSdlService.getAllStructureSdl({ size: 1000 }).subscribe(
			(res) => {
				console.log(res.body);
				this.structureSdlss = res.body;
				this.dataSource.data = res.body;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	ngOnInit() {
		console.log('ttttttttvvvv',this.getAllStructureSdl());
		this.columns = [
			'id',
			'libelle',
			'description',
			'actions',
		];
		this.dataSource = new MatTableDataSource(this.data);
		this.getAllStructureSdl();
	}

	addStructureSdl(): void {
		this.router.navigate(['pages/parametrage/add-structure-sdl']);
	}
	updateStructureSdl(id: number): void {
		this.router.navigate(['pages/parametrage/upd-structure-sdl/' +id]);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	deleteStructureSdl(id: number): void {
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
				this.structureSdlService.deleteStructureSdl(id).subscribe(
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
