import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-upd-commissaire",
	templateUrl: "./upd-commissaire.component.html",
	styleUrls: ["./upd-commissaire.component.scss"],
})
export class UpdCommissaireComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate(["pages/contrats/commissaire-judiciaire"]);
	}
}
