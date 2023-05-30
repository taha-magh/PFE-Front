import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { SdlService } from "../service/sdl/sdl.service";
import { ISdl } from "../models/sdl/sdl.model";
import { HttpResponse } from "@angular/common/http";
@Component({
	selector: 'kt-upd-sdl',
	templateUrl: './upd-sdl.component.html',
	styleUrls: ['./upd-sdl.component.scss']
})
export class UpdSdlComponent implements OnInit {
	sdls: ISdl;
	formSdlSubmitted = false;
	tabSdl?: ISdl[] | null;

	// GroupForm sdlForm
	sdlForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		raisonSocial: [''],
		raisonCom: [''],
		idFiscale: ['', Validators.required],
		ice: ['', Validators.required],
		numCnss: ['', Validators.required],
		adresse: [''],
		tel: [''],
		fax: [''],
		email: [''],
		gerant: [''],
		structure: [''],
		capital: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private sdlService: SdlService,
		private translate: TranslateService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe(({ sdl }) => {
			this.sdlForm.patchValue({ ...sdl });
		});
		console.log('this.editForm :', this.sdlForm.value);

		this.sdlService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<ISdl[]>) => {
				this.tabSdl = res.body;
			},
			error: () => {},
		});
	}
	Back(): void {
		this.router.navigate(['pages/delegataire/sdl']);
	}

	updateSdl() {
		this.formSdlSubmitted = true;

		console.log('this.editForm :', this.sdlForm.value.id);
		if (this.sdlForm.value.id !== undefined) {
			if (this.sdlForm.valid) {
				this.sdlService
					.updateSdl(this.sdlForm.value)
					.subscribe(
						(res) => {
							console.log('res ==> ', res.body);
							Swal.fire({
								position: 'center',
								icon: 'success',
								title: this.translate.instant(
									"PAGES.GENERAL.MSG_UPDATE_CONFIRMED"
								),
								showConfirmButton: false,
								timer: 1500,
							}).then((result) => {
								this.router.navigate([
									"/pages/delegataire/sdl",
								]);
							});
						},
						(error) => {
							Swal.fire({
								position: 'center',
								icon: 'error',
								title: this.translate.instant(
									// tslint:disable-next-line:indent
									"PAGES.GENERAL.MSG_UPDATE_NOCONFIRMED"
								),
								showConfirmButton: false,
								timer: 1500,
							});
							console.log('error ===> ', error);
						}
					);
			}
		}
	}

}
