import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
	selector: "kt-add-absence",
	templateUrl: "./add-absence.component.html",
	styleUrls: ["./add-absence.component.scss"],
})
export class AddAbsenceComponent implements OnInit {
	constructor(
		private router: Router,
	) {}

	ngOnInit() {}

	EtapeDernier(): void {
		this.router.navigate(["pages/personnel/show-personnel"]);
	}

	sanction(): void {
		this.router.navigate(["pages/personnel/appliquer-sanctions"]);
	}
}
