import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import {IStructureDelegataire} from '../models/structureDelegataire/structureDelegataire.model';
import {StructureDelegataireService} from '../service/structureDelegataire/structure-delegataire.service';
@Component({
    selector: 'kt-add-structure-delegataire',
    templateUrl: './add-structure-delegataire.component.html',
    styleUrls: ['./add-structure-delegataire.component.scss'],
})
export class AddStructureDelegataireComponent implements OnInit {
    formDemandeSubmitted = false;
    structureDelegatairess: IStructureDelegataire;

    // GroupForm delegataireForm
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
		private translate: TranslateService
	) {}

	ngOnInit() {}

	Back(): void {
		this.router.navigate(['pages/parametrage/list-structure-delegataire'])
	}

	addStructureDelegataire() {
		this.formDemandeSubmitted = true;
		console.log('form submit !');
		console.log('structure delegataire form', this.structureDelegataireForm.value);

		if (this.structureDelegataireForm.valid) {
			this.structureDelegatairess = {
				libelle: this.structureDelegataireForm.value.libelle,
				description: this.structureDelegataireForm.value.description,
			};

			this.structureDelegataireService.addStructureDelegataire(this.structureDelegatairess).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_structure_delegataire', res.body.id.toString());
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.router.navigate(['pages/parametrage/list-structure-delegataire']);
						// localStorage.setItem("curentStep", JSON.stringify(1));
					});
				}
				console.log('res add structure Delegataire =========>', res);
			});
		}
		// localStorage.setItem("curentStep", JSON.stringify(0));
	}

}





