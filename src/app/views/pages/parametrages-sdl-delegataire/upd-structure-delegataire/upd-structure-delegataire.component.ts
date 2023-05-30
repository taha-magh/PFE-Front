import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { StructureDelegataireService } from '../service/structureDelegataire/structure-delegataire.service';
import { IStructureDelegataire } from '../models/structureDelegataire/structureDelegataire.model';
import { HttpResponse } from '@angular/common/http';
import {ISuiviDelegataire} from '../../delegataire/models/delegataire/tab-delegataire.model';
@Component({
	selector: 'kt-upd-structure-delegataire',
	templateUrl: './upd-structure-delegataire.component.html',
	styleUrls: ['./upd-structure-delegataire.component.scss'],
})

export class UpdStructureDelegataireComponent implements OnInit {
	structureDelegatairess: IStructureDelegataire;
	formStructureDelegataireSubmitted = false;
	tabStructureDelegataire?: IStructureDelegataire[] | null;

	// GroupForm structureDelegataireForm
	structureDelegataireForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		libelle: [''],
		description: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private structureDelegataireService: StructureDelegataireService,
		private translate: TranslateService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe(({ structureDelegataire }) => {
			this.structureDelegataireForm.patchValue({ ...structureDelegataire });
		});
		console.log('this.editForm :', this.structureDelegataireForm.value);

		this.structureDelegataireService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<IStructureDelegataire[]>) => {
				this.tabStructureDelegataire = res.body;
			},
			error: () => {},
		});
	}
	Back(): void {
		this.router.navigate(['pages/parametrage/list-structure-delegataire'])
	}

	updateStructureDelegataire() {
		this.formStructureDelegataireSubmitted = true;

		console.log('this.editForm :', this.structureDelegataireForm.value.id);
		if (this.structureDelegataireForm.value.id !== undefined) {
			if (this.structureDelegataireForm.valid) {
				this.structureDelegataireService
					.updateStructureDelegataire(this.structureDelegataireForm.value)
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
									"pages/parametrage/list-structure-delegataire",
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


// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
//

// export class UpdStructureDelegataireComponent implements OnInit {
// 	constructor(private router: Router) {}
//
// 	ngOnInit() {}
//
// 	RetourEmbalages(): void {
// 		this.router.navigate(["pages/parametrage/list-structure-delegataire"]);
// 	}
// }
