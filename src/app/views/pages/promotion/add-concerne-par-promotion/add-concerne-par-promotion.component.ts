import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
  selector: 'kt-add-concerne-par-promotion',
  templateUrl: './add-concerne-par-promotion.component.html',
  styleUrls: ['./add-concerne-par-promotion.component.scss']
})
export class AddConcerneParPromotionComponent implements OnInit {
  data: excelData[] = [];
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
				Nom: "Nom1",
				Prenom: "Prenom1",
				Cin: "A54544",
				Division: "sample text",
				Service: "sample text",
				Poste: "sample text",
				Annee: "sample text",
				Dure_service: "sample text",
			},
      {
				NUM: "2",
				Nom: "Nom2",
				Prenom: "Prenom2",
				Cin: "A54544",
				Division: "sample text",
				Service: "sample text",
				Poste: "sample text",
				Annee: "sample text",
				Dure_service: "sample text",
			},
			{
				NUM: "3",
				Nom: "Nom3",
				Prenom: "Prenom3",
				Cin: "A54544",
				Division: "sample text",
				Service: "sample text",
				Poste: "sample text",
				Annee: "sample text",
				Dure_service: "sample text",
			},
		];
	}
	ngOnInit() {
		this.dataSource = new MatTableDataSource(this.data);
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

	Edit() {
		this.router.navigate(["pages/retraite/show-retraite"]);
	}

	Details() {
		this.router.navigate(["pages/retraite/show-retraite"]);
	}

	AddDemande(): void {
		this.router.navigate(["pages/retraite/add-demande-retraite"]);
	}

	Add_jugement(): void {
		this.router.navigate(["pages/promotion/add-promotion-par-jugement"]);
	}

	Add_promotion(): void {
		this.router.navigate(["pages/promotion/add-concerne-par-promotion"]);
	}

	EtapeDernier(): void {
		this.router.navigate(["pages/promotion/list-promotion"]);
	}
}
export interface excelData {
	NUM: string;
	Nom: string;
	Prenom: string;
	Cin: string;
	Division: string;
	Service: string;
	Poste: string;
	Annee: string;
	Dure_service: string;
}

