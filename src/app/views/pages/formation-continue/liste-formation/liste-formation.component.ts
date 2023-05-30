import { DatePipe } from "@angular/common";
import { Component, OnInit, Type, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-liste-formation",
	templateUrl: "./liste-formation.component.html",
	styleUrls: ["./liste-formation.component.scss"],
})
export class ListeFormationComponent implements OnInit {
	TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"TYPE",
		"DATE_DEBUT",
		"DATE_FIN",
		"PIECE_JOINTE",
		"PERSONNELS",
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
		private excelService: ExcelAssociationService
	) {
		this.data = [
			{
				NUM: "1",
				TYPE: "aaaa",
				DATE_DEBUT: "aaaa",
				DATE_FIN: "aaaa",
			},
		];
	}
	deleteAssociation(id: number): void {
		Swal.fire({
			title: "Voulez vous supprimer cet enregistrement ?",
			icon: "question",
			iconHtml: "?",
			showCancelButton: true,
			showCloseButton: true,
			confirmButtonText: "Oui",
			cancelButtonText: "Non",
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire({
					position: "center",
					icon: "success",
					title: this.translate.instant(
						"PAGES.GENERAL.MSG_DEL_CONFIRMED"
					),
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	}
	ngOnInit() {
		this.columns = ["Nom", "Prenom", "Raison", "Cin", "Gsm", "Fax"];
		this.dataSource = new MatTableDataSource(this.data);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	createDataJson(i: number): excelData {
		return {
			NUM: this.TypeAlert[i].NUM,
			TYPE: this.TypeAlert[i].Cin,
			DATE_DEBUT: this.TypeAlert[i].DATE_DEBUT,
			DATE_FIN: this.TypeAlert[i].DATE_FIN,
		};
	}

	add(): void {
		this.router.navigate(["/pages/formation-continue/add-formation"]);
	}

	Details() {
		this.router.navigate(["/pages/formation-continue/show-formation"]);
	}

	Edit(): void {
		this.router.navigate(["/pages/conge/edit-conge"]);
	}

	Imprimer(): void {
		this.router.navigate(["/pages/conge/imprimer-attestation-conge"]);
	}
}
export interface excelData {
	NUM: string;
	TYPE: string;
	DATE_DEBUT: string;
	DATE_FIN: string;
}
