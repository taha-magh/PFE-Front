import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import {IDelegataire} from '../models/delegataire/delegataire.model';
import {DelegataireService} from '../service/delegataire/delegataire.service';
import {StructureDelegataireService} from '../../parametrages-sdl-delegataire/service/structureDelegataire/structure-delegataire.service';
import {IStructureDelegataire} from '../../parametrages-sdl-delegataire/models/structureDelegataire/structureDelegataire.model';
import {HttpResponse} from '@angular/common/http';
@Component({
    selector: 'kt-add-delegataire',
    templateUrl: './add-delegataire.component.html',
    styleUrls: ['./add-delegataire.component.scss']
})
export class AddDelegataireComponent implements OnInit {
    formDemandeSubmitted = false;
    delegatairess: IDelegataire;
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
        private structureDelegataireService: StructureDelegataireService,
        private translate: TranslateService
    ) {}

    ngOnInit() {
		// get list of types affaire
		this.structureDelegataireService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<IStructureDelegataire[]>) => {
				this.tabStructureDelegataires =  res.body;
			},
			error: () => { },
		});
	}

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
