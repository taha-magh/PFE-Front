import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { TypeIndicSdlService } from "../service/typeIndicSdl/type-indic-sdl.service";
import { ITypeIndicSdl } from "../models/typeIndicSdl/typeIndicSdl.model";
import { HttpResponse } from "@angular/common/http";
@Component({
	selector: "kt-upd-type-indicateur-sdl",
	templateUrl: "./upd-type-indicateur-sdl.component.html",
	styleUrls: ["./upd-type-indicateur-sdl.component.scss"],
})
export class UpdTypeIndicateurSdlComponent implements OnInit {
	typeIndicSdlss: ITypeIndicSdl;
	formSdlSubmitted = false;
	tabTypeIndicSdl?: ITypeIndicSdl[] | null;

	// GroupForm typeIndicSdlForm
	typeIndicSdlForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		libelle: [''],
		description: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private typeIndicSdlService: TypeIndicSdlService,
		private translate: TranslateService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe(({ typeIndicSdl }) => {
			this.typeIndicSdlForm.patchValue({ ...typeIndicSdl });
		});
		console.log('this.editForm :', this.typeIndicSdlForm.value);

		this.typeIndicSdlService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<ITypeIndicSdl[]>) => {
				this.tabTypeIndicSdl = res.body;
			},
			error: () => {},
		});
	}
	Back(): void {
		this.router.navigate(['pages/parametrage/list-type-indicateur-sdl']);
	}

	updateTypeIndicSdl() {
		this.formSdlSubmitted = true;

		console.log('this.editForm :', this.typeIndicSdlForm.value.id);
		if (this.typeIndicSdlForm.value.id !== undefined) {
			if (this.typeIndicSdlForm.valid) {
				this.typeIndicSdlService
					.updateTypeIndicSdl(this.typeIndicSdlForm.value)
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
									"pages/parametrage/list-type-indicateur-sdl",
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
