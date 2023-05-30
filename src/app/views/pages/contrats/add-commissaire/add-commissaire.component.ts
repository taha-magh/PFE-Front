import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-add-commissaire",
	templateUrl: "./add-commissaire.component.html",
	styleUrls: ["./add-commissaire.component.scss"],
})
export class AddCommissaireComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate(["pages/contrats/commissaire-judiciaire"]);
	}
}
