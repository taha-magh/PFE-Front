import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import {SdlService} from '../service/sdl/sdl.service';

@Component({
	selector: 'kt-sdl',
	templateUrl: './sdl.component.html',
	styleUrls: ['./sdl.component.scss'],
})

export class SdlComponent implements OnInit {
	sdls: any;
	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		'id',
		'raisonSocial',
		//'raisonCom',
		'idFiscale',
		'ice',
		// 'numCnss',
		// 'adresse',
		'tel',
		// 'fax',
		// 'email',
		// 'gerant',
		// 'structure',
		// 'capital',
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
		private sdlService: SdlService,
		private sdlsService: SdlService,
	) {
	}
	getAllSdl(): void {
		this.sdlsService.getAllSdl({ size: 1000 }).subscribe(
			(res) => {
				console.log(res.body);
				this.sdls = res.body;
				this.dataSource.data = res.body;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	ngOnInit() {
		console.log( 'ttttttttttttttttttttt' , this.getAllSdl());
		this.columns = [
			'id',
			'raisonSocial',
//			'raisonCom',
			'idFiscale',
			'ice',
			// 'numCnss',
			// 'adresse',
			'tel',
			// 'fax',
			// 'email',
			// 'gerant',
			// 'structure',
			// 'capital',
		];
		this.dataSource = new MatTableDataSource(this.data);
		this.getAllSdl();
	}

	addSdl(): void {
		this.router.navigate(['pages/delegataire/add-sdl']);
	}
	updateSdl(id: number): void {
		this.router.navigate(['pages/delegataire/upd-sdl/' + id]);
	}
	detailSdl(id: number): void {
		this.router.navigate(['pages/delegataire/detail-sdl/' + id]);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	deleteSdl(id: number): void {
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
				this.sdlService.deleteSdl(id).subscribe(
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
					position: "center",
					icon: "success",
					title: this.translate.instant(
						"PAGES.GENERAL.MSG_DEL_CONFIRMED"
					),
					showConfirmButton: false,
					timer: 2500,
				});
			} else {
				Swal.fire({
					position: "center",
					icon: "error",
					title: this.translate.instant(
						"PAGES.GENERAL.MSG_DEL_ANNULER"
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
			raisonSocial: this.TypeAlert[i].raisonSocial,
			raisonCom: this.TypeAlert[i].raisonCom,
			idFiscale: this.TypeAlert[i].idFiscale,
			ice: this.TypeAlert[i].ice,
			numCnss: this.TypeAlert[i].numCnss,
			adresse: this.TypeAlert[i].adresse,
			tel: this.TypeAlert[i].tel,
			fax: this.TypeAlert[i].fax,
			email: this.TypeAlert[i].email,
			gerant: this.TypeAlert[i].gerant,
			structure: this.TypeAlert[i].structure,
			capital: this.TypeAlert[i].capital,
		};
	}
}
export interface excelData {
	id: string;
	raisonSocial: string;
	raisonCom: string;
	idFiscale: string;
	ice: string;
	numCnss: string;
	adresse: string;
	tel: string;
	fax: string;
	email: string;
	gerant: string;
	structure: string;
	capital: string;
}


