import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubventionsService } from "../../utils/subventions.service";
import { FilesUtilsService } from "../../utils/files-utils.service";
import Swal from "sweetalert2";

@Component({
	selector: "kt-tab-sanctions",
	templateUrl: "./tab-sanctions.component.html",
	styleUrls: ["./tab-sanctions.component.scss"],
})
export class TabSanctionsComponent implements OnInit {
	id: number;
	// ============================================
	// Presentation de datasource
	// ============================================
	displayedColumns: string[] = [
		"type",
		"nature",
		"objet",
		"description",
		"retour_attendu",
		"delai_retour",
		"remarque",
		"actions",
	];
	data: any[] = [
		{
			statut: "status 1",
			execution: "	Execution 1",
			type_execution: "Type 1",
			resultat: "	Resultat 1",
		},
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
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort: MatSort;
	// ============================================
	// Constructeur
	// ============================================
	constructor(
		private service: SubventionsService,
		private translate: TranslateService,
		private router: Router,
		private route: ActivatedRoute,
		private fileService: FilesUtilsService
	) {
		this.getEchange();
	}

	ngOnInit() {}
	// ============================================
	// Recuperer tous les association
	// ============================================
	public getEchange() {
		this.dataSource = new MatTableDataSource(this.data);
		this.isLoading = false;
	}
	// ============================================
	// Filter de recherche
	// ============================================
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	// ============================================
	// Methode de suppression des associations
	// ============================================
	deleteSubvention(id: number): void {
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
				this.service
					.deleteSubvention("/subvention/delete/", id)
					.subscribe((data) => {
						Swal.fire({
							position: "center",
							icon: "success",
							title: this.translate.instant(
								"PAGES.GENERAL.MSG_DEL_CONFIRMED"
							),
							showConfirmButton: false,
							timer: 1500,
						});
						this.getEchange();
					});
				this.service
					.deletefiles("/PjSubvention/ByIdSubvention/", id)
					.subscribe((data) => {
						console.log("File deleted : " + id);
					});
			}
		});
	}
	// ============================================
	// Methode d'insertion des subventions
	// ============================================
	addSubvention(): void {
		this.id = this.route.snapshot.params["id"];
		window.localStorage.removeItem("assocId");
		window.localStorage.setItem("assocId", "" + this.id);
		this.router.navigate(["pages/juridique/add-status"]);
	}
	// ============================================
	// Methode de modification subvention
	// ============================================
	editSubvention(idSub: any) {
		this.id = this.route.snapshot.params["id"];
		window.localStorage.removeItem("assocId");
		window.localStorage.setItem("assocId", "" + this.id);

		window.localStorage.removeItem("subId");
		window.localStorage.setItem("subId", "" + idSub.id);
		this.router.navigate(["pages/juridique/upd-status"]);
	}
	// ============================================
	// Export data as excel
	// ============================================
	exportTable() {
		this.fileService.exportToExcel(
			"exportDataSub",
			this.translate.instant("Liste des échanges")
		);
	}

	sanction(): void {
		this.router.navigate(["pages/personnel/appliquer-sanctions"]);
	}

	Details() {
		this.router.navigate(["pages/personnel/show-sanctions"]);
	}

	Edit() {
		this.router.navigate(["pages/personnel/edit-sanctions"]);
	}
}
export interface excelData {
	Id: string;
	typeEchange: string;
	dateEchange: string;
	deposePar: string;
}
