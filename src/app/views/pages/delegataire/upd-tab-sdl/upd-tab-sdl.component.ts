import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import {TabSdlService} from '../service/tab-sdl/tab-sdl.service';
import { ISuiviSdl } from "../models/sdl/tab-sdl.model";
import { HttpResponse } from "@angular/common/http";
@Component({
	selector: 'kt-upd-tab-sdl',
	templateUrl: './upd-tab-sdl.component.html',
	styleUrls: ['./upd-tab-sdl.component.scss']
})
export class UpdTabSdlComponent implements OnInit {
	suiviSdls: ISuiviSdl;
	formSdlSubmitted = false;
	tabSdl?: ISuiviSdl[] | null;

	// GroupForm suiviSdlForm
	suiviSdlForm = this.fb.group({
		objet: [''],
		typeIndicateur: [''],
		nom: [''],
		description: [''],
		dateValeur: ['', Validators.required],
		valeurContractuel: ['', Validators.required],
		valeurConstate: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private suiviSdlService: TabSdlService,
		private translate: TranslateService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe(({ sdl }) => {
			this.suiviSdlForm.patchValue({ ...sdl });
		});
		console.log('this.editForm :', this.suiviSdlForm.value);

		this.suiviSdlService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<ISuiviSdl[]>) => {
				this.tabSdl = res.body;
			},
			error: () => {},
		});
	}
	Back(): void {
		this.router.navigate(['pages/delegataire/detail-sdl']);
	}

	updateSuiviSdl() {
		this.formSdlSubmitted = true;

		console.log('this.editForm :', this.suiviSdlForm.value.id);
		if (this.suiviSdlForm.value.id !== undefined) {
			if (this.suiviSdlForm.valid) {
				this.suiviSdlService
					.updateSuiviSdl(this.suiviSdlForm.value)
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
									"/pages/delegataire/detail-sdl",
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
