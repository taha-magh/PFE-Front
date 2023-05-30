import { DatePipe } from "@angular/common";
import { Component, OnInit, Type, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";

@Component({
	selector: "kt-add-formation",
	templateUrl: "./add-formation.component.html",
	styleUrls: ["./add-formation.component.scss"],
})
export class AddFormationComponent implements OnInit {
	animal: string;
	name: string;
	personnel: any;
	data: excelData[] = [];
	data2: excelData[] = [];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"Nom",
		"Prenom",
		"Matricule",
		"Cin",
		"Division",
		"Service",
		"Poste",
		"Telephone",
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
				Telephone: "sample text",
			},
			{
				NUM: "12",
				Nom: "Nom1",
				Prenom: "Prenom1",
				Matricule: "2121214",
				Cin: "A54544",
				Division: "sample text",
				Service: "sample text",
				Poste: "sample text",
				Telephone: "sample text",
			},
			{
				NUM: "3",
				Nom: "Nom1",
				Prenom: "Prenom1",
				Matricule: "2121214",
				Cin: "A54544",
				Division: "sample text",
				Service: "sample text",
				Poste: "sample text",
				Telephone: "sample text",
			},
		];
	}

	ngOnInit() {
		this.columns = [
			"NUM",
			"Nom",
			"Prenom",
			"Matricule",
			"Cin",
			"Division",
			"Service",
			"Poste",
			"Telephone",
		];
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

	EtapeDernier(): void {
		this.router.navigate(["pages/formation-continue/liste-formation"]);
	}

	Details() {
		this.router.navigate(["pages/formation-continue/show-formation"]);
	}

	Edit() {
		this.router.navigate(["pages/personnel/edit-personnel"]);
	}

	Add(): void {
		this.router.navigate(["pages/personnel/add-personnel"]);
	}

	createDataJson(i: number): excelData {
		return {
			NUM: this.personnel[i].NUM,
			Nom: this.personnel[i].Nom,
			Prenom: this.personnel[i].Prenom,
			Matricule: this.personnel[i].Matricule,
			Cin: this.personnel[i].Cin,
			Division: this.personnel[i].Division,
			Service: this.personnel[i].Service,
			Poste: this.personnel[i].Poste,
			Telephone: this.personnel[i].Telephone,
		};
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
	Telephone: string;
}
