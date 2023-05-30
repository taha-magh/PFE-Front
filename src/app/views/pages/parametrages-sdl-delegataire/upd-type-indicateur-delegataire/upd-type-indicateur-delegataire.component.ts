import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { TypeIndicDelegataireService } from "../service/typeIndicDelegataire/type-indic-delegataire.service";
import { ITypeIndicDelegataire } from "../models/typeIndicDelegataire/typeIndicDelegataire.model";
import { HttpResponse } from "@angular/common/http";
@Component({
	selector: "kt-upd-type-indicateur-delegataire",
	templateUrl: "./upd-type-indicateur-delegataire.component.html",
	styleUrls: ["./upd-type-indicateur-delegataire.component.scss"],
})
export class UpdTypeIndicateurDelegataireComponent implements OnInit {
	typeIndicDelegatairess: ITypeIndicDelegataire;
	formDelegataireSubmitted = false;
	tabTypeIndicDelegataire?: ITypeIndicDelegataire[] | null;

	// GroupForm typeIndicDelegataireForm
	typeIndicDelegataireForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		libelle: [''],
		description: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private typeIndicDelegataireService: TypeIndicDelegataireService,
		private translate: TranslateService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe(({ typeIndicDelegataire }) => {
			this.typeIndicDelegataireForm.patchValue({ ...typeIndicDelegataire });
		});
		console.log('this.editForm :', this.typeIndicDelegataireForm.value);

		this.typeIndicDelegataireService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<ITypeIndicDelegataire[]>) => {
				this.tabTypeIndicDelegataire = res.body;
			},
			error: () => {},
		});
	}
	Back(): void {
		this.router.navigate(['pages/parametrage/list-type-indicateur-delegataire']);
	}

	updateTypeIndicDelegataire() {
		this.formDelegataireSubmitted = true;

		console.log('this.editForm :', this.typeIndicDelegataireForm.value.id);
		if (this.typeIndicDelegataireForm.value.id !== undefined) {
			if (this.typeIndicDelegataireForm.valid) {
				this.typeIndicDelegataireService
					.updateTypeIndicDelegataire(this.typeIndicDelegataireForm.value)
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
									"pages/parametrages-sdl-delegataire/list-type-indicateur-delegataire",
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
