import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-detaille-commissaire",
	templateUrl: "./detaille-commissaire.component.html",
	styleUrls: ["./detaille-commissaire.component.scss"],
})
export class DetailleCommissaireComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate(["pages/contrats/notaire"]);
	}
}
