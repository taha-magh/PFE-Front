import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";

@Component({
	selector: "kt-expert",
	templateUrl: "./expert.component.html",
	styleUrls: ["./expert.component.scss"],
})
export class ExpertComponent implements OnInit {
	TypeAlert: any;
	data: any[];
	columns: any[];
	footerData: any[][] = [];
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"NUM",
		"Nom",
		"Prenom",
		"Raison",
		"Cin",
		"Gsm",
		"Fax",
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
		private datePipe: DatePipe
	) {
		this.data = [
			{
				NUM: "1",
				Nom: "Benouahi",
				Prenom: "Ayoub",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
			},
			{
				NUM: "2",
				Nom: "Benouahi",
				Prenom: "Bilal",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
			},
			{
				NUM: "3",
				Nom: "Benouahi",
				Prenom: "Ahmed",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
			},
			{
				NUM: "4",
				Nom: "Benouahi",
				Prenom: "Salwa",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
			},
			{
				NUM: "5",
				Nom: "Benouahi",
				Prenom: "Mousa",
				Raison: "Raison",
				Cin: "A3234",
				Gsm: "064303290",
				Fax: "059329021",
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
	addAssociation(): void {
		//Alert
		this.router.navigate(["/pages/contrats/add-expert"]);
	}
	DetailAssociation(): void {
		//Alert
		this.router.navigate(["/pages/contrats/detaille-expert"]);
	}
	MoudifierAssociation(): void {
		this.router.navigate(["/pages/contrats/upd-expert"]);
	}
}
