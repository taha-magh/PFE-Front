import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-detaille-notaire",
	templateUrl: "./detaille-notaire.component.html",
	styleUrls: ["./detaille-notaire.component.scss"],
})
export class DetailleNotaireComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate(["pages/contrats/notaire"]);
	}
}
