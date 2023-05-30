import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import {IDelegataire} from '../models/delegataire/delegataire.model';
import {DelegataireService} from '../service/delegataire/delegataire.service';
@Component({
    selector: 'kt-add-delegataire',
    templateUrl: './add-delegataire.component.html',
    styleUrls: ['./add-delegataire.component.scss']
})
export class AddDelegataireComponent implements OnInit {
    formDemandeSubmitted = false;
    delegatairess: IDelegataire;

    // GroupForm delegataireForm
    delegataireForm = this.fb.group({
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
        private delegataireService: DelegataireService,
        private translate: TranslateService
    ) {}

    ngOnInit() {}

    Back(): void {
        this.router.navigate(['pages/delegataire/delegataires'])
    }

    addDelegataire() {
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('delegataire form', this.delegataireForm.value);

		if (this.delegataireForm.valid) {
			this.delegatairess = {
				raisonSocial: this.delegataireForm.value.raisonSocial,
				raisonCom: this.delegataireForm.value.raisonCom,
				idFiscale: this.delegataireForm.value.idFiscale,
				ice: this.delegataireForm.value.ice,
				numCnss: this.delegataireForm.value.numCnss,
				adresse: this.delegataireForm.value.adresse,
				tel: this.delegataireForm.value.tel,
				fax: this.delegataireForm.value.fax,
				email: this.delegataireForm.value.email,
				gerant: this.delegataireForm.value.gerant,
				structure: this.delegataireForm.value.structure,
				capital: this.delegataireForm.value.capital,
			};

			this.delegataireService.addDelegataire(this.delegatairess).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_delegataire', res.body.id.toString());
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.router.navigate(['pages/delegataire/delegataires']);
						// localStorage.setItem("curentStep", JSON.stringify(1));
					});
				}
				console.log('res add delegataire =========>', res);
			});
		}
		// localStorage.setItem("curentStep", JSON.stringify(0));
	}

}
