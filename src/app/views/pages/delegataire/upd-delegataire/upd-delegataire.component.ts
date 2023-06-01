import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { DelegataireService } from "../service/delegataire/delegataire.service";
import { IDelegataire } from "../models/delegataire/delegataire.model";
import { HttpResponse } from "@angular/common/http";
import {IStructureDelegataire} from '../../parametrages-sdl-delegataire/models/structureDelegataire/structureDelegataire.model';
import {StructureDelegataireService} from '../../parametrages-sdl-delegataire/service/structureDelegataire/structure-delegataire.service';
@Component({
    selector: 'kt-upd-delegataire',
    templateUrl: './upd-delegataire.component.html',
    styleUrls: ['./upd-delegataire.component.scss']
})
export class UpdDelegataireComponent implements OnInit {
    delegatairess: IDelegataire;
    formDelegataireSubmitted = false;
    tabDelegataire?: IDelegataire[] | null;
	tabStructureDelegataires?: IStructureDelegataire[] | null;


	// GroupForm delegataireForm
    delegataireForm = this.fb.group({
		id: [''],
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
        private delegataireService: DelegataireService,
        private translate: TranslateService,
		private structureDelegataireService: StructureDelegataireService,

		private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {

		// get list of types affaire
		this.structureDelegataireService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<IStructureDelegataire[]>) => {
				this.tabStructureDelegataires =  res.body;
			},
			error: () => { },
		});
        this.activatedRoute.data.subscribe(({ delegataire }) => {
        this.delegataireForm.patchValue({ ...delegataire });
    });
        console.log('this.editForm :', this.delegataireForm.value);

        this.delegataireService.query({ size: 1000 }).subscribe({
            next: (res: HttpResponse<IDelegataire[]>) => {
            this.tabDelegataire = res.body;
        },
        error: () => {},
    });
  }
    Back(): void {
        this.router.navigate(['pages/delegataire/delegataires']);
    }

	updateDelegataire() {
		this.formDelegataireSubmitted = true;
		console.log('this.editForm :', this.delegataireForm.value.id);
		if (this.delegataireForm.value.id !== undefined) {
			if (this.delegataireForm.valid) {
				this.delegataireService
					.updateDelegataire(this.delegataireForm.value)
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
									"/pages/delegataire/delegataires",
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
