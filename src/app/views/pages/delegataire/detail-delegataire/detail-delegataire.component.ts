import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Delegataire } from "../models/delegataire/delegataire.model";
import { DelegataireService } from "../service/delegataire/delegataire.service";
//import {StructureDelegataire} from '../../parametrages-sdl-delegataire/models/structureDelegataire/structureDelegataire.model';
@Component({
	selector: "kt-detail-delegataire",
	templateUrl: "./detail-delegataire.component.html",
	styleUrls: ["./detail-delegataire.component.scss"],
})
export class DetailDelegataireComponent implements OnInit {
	Delegataire: Delegataire;
//	structure: StructureDelegataire;
	delegataire: Delegataire;
	details;
	history: any;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private delegataireService: DelegataireService
	) {}



	ngOnInit() {
	   this.activatedRoute.data.subscribe(({ delegataire }) => {
		 this.Delegataire = delegataire;

		 this.delegataireService.getDelegataireById(delegataire.id).subscribe((res) => {
		   this.delegataire = res.body;
		   console.log("jjjjjjjjjjjjjjjjjjjjjjjjj", res.body);
		});
	});
}

	Back(): void {
		this.router.navigate(["pages/delegataire/delegataires"]);
	}
}
