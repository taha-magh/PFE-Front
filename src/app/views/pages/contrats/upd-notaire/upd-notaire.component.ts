import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-upd-notaire",
	templateUrl: "./upd-notaire.component.html",
	styleUrls: ["./upd-notaire.component.scss"],
})
export class UpdNotaireComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate(["pages/contrats/notaire"]);
	}
}
