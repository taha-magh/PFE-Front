import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-list-retraite",
	templateUrl: "./list-retraite.component.html",
	styleUrls: ["./list-retraite.component.scss"],
})
export class ListRetraiteComponent implements OnInit {
	data: excelData[] = [];
	data2: excelData2[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"Nom",
		"Prenom",
		"Cin",
		"Division",
		"Service",
		"Poste",
		"Annee",
		"Dure_service",
		"Matricule",
		"actions",
	];
	displayedColumns2: string[] = [
		"NUM",
		"Nom",
		"Prenom",
		"Cin",
		"Division",
		"Service",
		"Poste",
		"Date_arrete",
		"Dure_service",
		"actions",
	];
	// ============================================
	// Declarations
	// ============================================
	dataSource = new MatTableDataSource<any>();
	dataSource2 = new MatTableDataSource<any>();
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
				Nom: "Nom1",
				Prenom: "Prenom1",
				Matricule: "2121214",
				Cin: "A54544",
				Division: "sample text",
				Service: "sample text",
				Poste: "sample text",
				Annee: "sample text",
				Dure_service: "sample text",
			},
		];
		this.data2 = [
			{
				NUM: "1",
				Nom: "Nom1",
				Prenom: "Prenom1",
				Cin: "A54544",
				Division: "sample text",
				Service: "sample text",
				Poste: "sample text",
				Date_arrete: "sample text",
				Dure_service: "sample text",
			},
		];
	}
	ngOnInit() {
		// this.columns = [
		// 	"NUM",
		// 	"Nom",
		// 	"Prenom",
		// 	"Matricule",
		// 	"Cin",
		// 	"Division",
		// 	"Service",
		// 	"Poste",
		// 	"Annee",
		// 	"Dure_service",
		// ];
		this.dataSource = new MatTableDataSource(this.data);
		this.dataSource2 = new MatTableDataSource(this.data2);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	//changes
	// addPesee(): void {
	// 	this.router.navigate(["pages/pesee/add-pesee"]);
	// }

	// EtapeDernier(): void {
	// 	this.router.navigate(["pages/affaires/dashboard"]);
	// }

	Details() {
		this.router.navigate(["pages/retraite/show-retraite"]);
	}

	Prolonger(): void {
		this.router.navigate(["pages/retraite/add-prolongement"]);
	}

	AddDemande(): void {
		this.router.navigate(["pages/retraite/add-demande-retraite"]);
	}
}
export interface excelData {
	NUM: string;
	Nom: string;
	Prenom: string;
	Matricule: string;
	Cin: string;
	Division: string;
	Service: string;
	Poste: string;
	Annee: string;
	Dure_service: string;
}

export interface excelData2 {
	NUM: string;
	Nom: string;
	Prenom: string;
	Cin: string;
	Division: string;
	Service: string;
	Poste: string;
	Date_arrete: string;
	Dure_service: string;
}
