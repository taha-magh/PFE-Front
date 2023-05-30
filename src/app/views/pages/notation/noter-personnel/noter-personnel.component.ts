import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
  selector: 'kt-noter-personnel',
  templateUrl: './noter-personnel.component.html',
  styleUrls: ['./noter-personnel.component.scss']
})
export class NoterPersonnelComponent implements OnInit {
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
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
	ngOnInit() {
		this.columns = ["NUM", "LIBELLE", "DATE_DEBUT", "OBJET"];
		this.dataSource = new MatTableDataSource(this.data);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
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

	//changes
	add_note(): void {
		this.router.navigate([
			"pages/notation/add-notation",
		]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/affaires/dashboard"]);
	}

	Valider(): void {
		this.router.navigate([
			"pages/notation/show-notation",
		]);
	}
}

export interface excelData {
	NUM: string;
	NOM: string;
	PRENOM: string;
	CIN: string;
	DIVISION: string;
	SERVICE: string;
	POSTE: string;
	NOTER: string;
}
