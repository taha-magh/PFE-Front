import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TabDelegataireService } from '../service/tab-delegataire/tab-delegataire.service';
import { ISuiviDelegataire } from '../models/delegataire/tab-delegataire.model';
import { HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
    selector: 'kt-upd-tab-delegataire',
    templateUrl: './upd-tab-delegataire.component.html',
    styleUrls: ['./upd-tab-delegataire.component.scss']
})
export class UpdTabDelegataireComponent implements OnInit {
    suiviDelegataires: ISuiviDelegataire;
	formSuiviDelegataireSubmitted = false;
    tabTabDelegataire?: ISuiviDelegataire[] | null;


    // GroupForm suiviDelegataireForm
    suiviDelegataireForm = this.fb.group({
		id: [''],
        typeIndicateur: [''],
        nom: [''],
		description: [''],
        dateValeur: ['', Validators.required],
        valeurContractuel: ['', Validators.required],
        valeurConstate: [''],

        // isCommuneInformed: [''],
    });

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private suiviDelegataireService: TabDelegataireService,
        private translate: TranslateService,
        private activatedRoute: ActivatedRoute,
        private  location: Location
    ) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ suiviDelegataire }) => {
            this.suiviDelegataireForm.patchValue({ ...suiviDelegataire });
        });
        console.log('this.editForm :', this.suiviDelegataireForm.value);

        this.suiviDelegataireService.query({ size: 1000 }).subscribe({
            next: (res: HttpResponse<ISuiviDelegataire[]>) => {
                this.tabTabDelegataire = res.body;
            },
        error: () => {},
        });
    }
    Back(): void {
         this.location.back();
    }

    updateSuiviDelegataire() {
        this.formSuiviDelegataireSubmitted = true;

        console.log('this.editForm :', this.suiviDelegataireForm.value.id);
        if (this.suiviDelegataireForm.value.id !== undefined) {
        if (this.suiviDelegataireForm.valid) {
            this.suiviDelegataireService
                    .updateSuiviDelegataire(this.suiviDelegataireForm.value)
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
								this.location.back();
								// this.router.navigate([
                                //      "/pages/delegataire/detail-delegataire",
							});
						},
						(error) => {
							Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: this.translate.instant(
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
