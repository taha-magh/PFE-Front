import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Sdl } from "../models/sdl/sdl.model";
import { SdlService } from "../service/sdl/sdl.service";
import {DelegataireService} from '../service/delegataire/delegataire.service';
@Component({
	selector: "kt-detail-sdl",
	templateUrl: "./detail-sdl.component.html",
	styleUrls: ["./detail-sdl.component.scss"],
})
export class DetailSdlComponent implements OnInit {
	Sdl: Sdl;
	sdl: Sdl;
	details;
	history: any;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private sdlService: SdlService
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe(({ sdl }) => {
			this.Sdl = sdl;
			this.sdlService.getSdlById(sdl.id).subscribe((res) => {
				this.sdl = res.body;
				console.log("jjjjjjjjjjjjjjjjjjjjjjjjj", res.body);
			});
		});
	}

	Back(): void {
		this.router.navigate(["pages/delegataire/sdl"]);
	}
}
