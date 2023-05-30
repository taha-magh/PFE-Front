import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-add-notaire",
	templateUrl: "./add-notaire.component.html",
	styleUrls: ["./add-notaire.component.scss"],
})
export class AddNotaireComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate(["pages/contrats/notaire"]);
	}
}
