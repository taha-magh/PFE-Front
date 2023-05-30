import { DatePipe } from "@angular/common";
import { Component, OnInit, Type, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
  selector: 'kt-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.scss']
})
export class ListDemandesComponent implements OnInit {
  TypeAlert: any;
	data: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"MOTIF",
		"REMARQUE",
		"PIECE_JOINTE",
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
				MOTIF: "sample text",
				REMARQUE: "sample text",
				PIECE_JOINTE: "sample text",
			},
			{
				NUM: "2",
				MOTIF: "sample text",
				REMARQUE: "sample text",
				PIECE_JOINTE: "sample text",
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

	add(): void {
		this.router.navigate(["/pages/retraite/add-demande-retraite"]);
	}

	Details(): void {
		this.router.navigate(["/pages/conge/show-conge"]);
	}

	Edit(): void {
		this.router.navigate(["/pages/conge/edit-conge"]);
	}
}
export interface excelData {
	NUM: string;
	MOTIF: string;
	REMARQUE: string;
	PIECE_JOINTE: string;
}
