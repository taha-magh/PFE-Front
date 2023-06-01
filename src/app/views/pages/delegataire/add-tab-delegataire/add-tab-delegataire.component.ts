import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ISuiviDelegataire } from "../models/delegataire/tab-delegataire.model";
import { TabDelegataireService } from "../service/tab-delegataire/tab-delegataire.service";
import { Location } from '@angular/common';

@Component({
    selector: 'kt-add-tab-delegataire',
    templateUrl: './add-tab-delegataire.component.html',
    styleUrls: ['./add-tab-delegataire.component.scss'],
})
export class AddTabDelegataireComponent implements OnInit {
    formDemandeSubmitted = false;
    suiviDelegataires: ISuiviDelegataire;

    // GroupForm suiviDelegataireForm
    suiviDelegataireForm = this.fb.group({
        objet: [''],
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
        private  location: Location
    ) {}

    ngOnInit() {}
	Back(): void {
		this.location.back();
	}

    addSuiviDelegataire() {
        this.formDemandeSubmitted = true;
        console.log('form submit !');
        console.log('suivi-delegataire form', this.suiviDelegataireForm.value);

        if (this.suiviDelegataireForm.valid) {
            this.suiviDelegataires = {
				typeIndicateur: this.suiviDelegataireForm.value.typeIndicateur,
				nom: this.suiviDelegataireForm.value.nom,
				description: this.suiviDelegataireForm.value.description,
				dateValeur: this.suiviDelegataireForm.value.dateValeur,
				valeurContractuel: this.suiviDelegataireForm.value.valeurContractuel,
				valeurConstate: this.suiviDelegataireForm.value.valeurConstate,
			};

			this.suiviDelegataireService.addSuiviDelegataire(this.suiviDelegataires).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_suiv_delegataire', res.body.id.toString());

					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.location.back();
						//this.router.navigate(['pages/delegataire/tab-delegataire' ]);
						// localStorage.setItem("curentStep", JSON.stringify(1));
                    });
                }
    console.log('res add suivi-delegataire =========>', res);
            });
        }
        // localStorage.setItem("curentStep", JSON.stringify(0));
    }
}
