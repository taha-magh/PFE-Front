import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kt-detaille-expert",
	templateUrl: "./detaille-expert.component.html",
	styleUrls: ["./detaille-expert.component.scss"],
})
export class DetailleExpertComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}
	Back(): void {
		this.router.navigate(["pages/contrats/expert"]);
	}
}
