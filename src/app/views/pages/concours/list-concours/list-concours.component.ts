import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-list-concours",
	templateUrl: "./list-concours.component.html",
	styleUrls: ["./list-concours.component.scss"],
})
export class ListConcoursComponent implements OnInit {
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"TYPE",
		"DATE_PUBLICATION",
		"FIN_PUBLICATION",
		"DATE_DEBUT",
		"DATE_FIN",
		"HEURE_DEBUT",
		"HEURE_FIN",
		"LIEU_CONCOURS_ECRIT",
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
				TYPE: "sample text",
				DATE_PUBLICATION: "sample text",
				FIN_PUBLICATION: "sample text",
				DATE_DEBUT: "12/12/2021",
				DATE_FIN: "25/12/2021",
				HEURE_DEBUT: "sample text",
				HEURE_FIN: "sample text",
				LIEU_CONCOURS_ECRIT: "sample text",
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
	add(): void {
		this.router.navigate(["pages/concours/add-concours"]);
	}

	Details(): void {
		this.router.navigate(["pages/concours/show-concours"]);
	}

	Edit(): void {
		this.router.navigate(["pages/concours/edit-concours"]);
	}
}

export interface excelData {
	NUM: string;
	TYPE: string;
	DATE_PUBLICATION: string;
	FIN_PUBLICATION: string;
	DATE_DEBUT: string;
	DATE_FIN: string;
	HEURE_DEBUT: string;
	HEURE_FIN: string;
	LIEU_CONCOURS_ECRIT: string;
}
