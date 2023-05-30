import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { StructureSdlService } from "../service/structureSdl/structure-sdl.service";
import { IStructureSdl } from "../models/structureSdl/structureSdl.model";
import { HttpResponse } from "@angular/common/http";
@Component({
	selector: 'kt-upd-structure-sdl',
	templateUrl: './upd-structure-sdl.component.html',
	styleUrls: ['./upd-structure-sdl.component.scss'],
})

export class UpdStructureSdlComponent implements OnInit {
	structureSdlss: IStructureSdl;
	formSdlSubmitted = false;
	tabStructureSdl?: IStructureSdl[] | null;

	// GroupForm structureSdlForm
	structureSdlForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		libelle: [''],
		description: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private structureSdlService: StructureSdlService,
		private translate: TranslateService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe(({ structureSdl }) => {
			this.structureSdlForm.patchValue({ ...structureSdl });
		});
		console.log('this.editForm :', this.structureSdlForm.value);

		this.structureSdlService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<IStructureSdl[]>) => {
				this.tabStructureSdl = res.body;
			},
			error: () => {},
		});
	}
	Back(): void {
		this.router.navigate(['pages/parametrage/list-structure-sdl']);
	}

	updateStructureSdl() {
		this.formSdlSubmitted = true;

		console.log('this.editForm :', this.structureSdlForm.value.id);
		if (this.structureSdlForm.value.id !== undefined) {
			if (this.structureSdlForm.valid) {
				this.structureSdlService
					.updateStructureSdl(this.structureSdlForm.value)
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
									"pages/parametrage/list-structure-sdl",
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
