import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import {TabSdlService} from '../service/tab-sdl/tab-sdl.service';

@Component({
	selector: 'kt-tab-sdl',
	templateUrl: './tab-sdl.component.html',
	styleUrls: ['./tab-sdl.component.scss'],
})
export class TabSdlComponent implements OnInit {
	suiviSdls: any;
	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"id",
		"typeIndicateur",
		"nom",
		"description",
		"dateValeur",
		"valeurContractuel",
		"valeurConstate",
		"actions",
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
		private suiviSdlService: TabSdlService,
		private suiviSdlsService: TabSdlService,
	) {
	}
	getAllSuiviSdl(): void {
		this.suiviSdlsService.getAllSuiviSdl({ size: 1000 }).subscribe(
			(res) => {
				console.log(res.body);
				this.suiviSdls = res.body;
				this.dataSource.data = res.body;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	ngOnInit() {
		this.columns = [
			"id",
			"typeIndicateur",
			"nom",
			"description",
			"dateValeur",
			"valeurContractuel",
			"valeurConstate"
		];
		this.dataSource = new MatTableDataSource(this.data);
		this.getAllSuiviSdl();
	}

	addSuiviSdl(): void {
		this.router.navigate(['pages/delegataire/add-tab-sdl']);
	}
	updateSuiviSdl(id: number): void {
		this.router.navigate(['pages/delegataire/upd-tab-sdl/' + id]);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	deleteSuiviSdl(id: number): void {
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
				this.suiviSdlService.deleteSuiviSdl(id).subscribe(
					(res) => {
						console.log("res ==> ", res.body);
						location.reload();
						// a revoire !!!!!!!!!!!
					},
					(error) => {
						console.log(
							"error ===============================================> ",
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
			typeIndicateur: this.TypeAlert[i].typeIndicateur,
			nom: this.TypeAlert[i].nom,
			description: this.TypeAlert[i].description,
			dateValeur: this.TypeAlert[i].dateValeur,
			valeurContractuel: this.TypeAlert[i].valeurContractuel,
			valeurConstate: this.TypeAlert[i].valeurConstate,
		};
	}
}
export interface excelData {
	id: string;
	typeIndicateur: string;
	nom: string;
	description: string;
	dateValeur: string;
	valeurContractuel: string;
	valeurConstate: string;

}



