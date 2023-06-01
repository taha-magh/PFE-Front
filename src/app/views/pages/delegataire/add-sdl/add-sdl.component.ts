import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import {ISdl} from '../models/sdl/sdl.model';
import {SdlService} from '../service/sdl/sdl.service';
import {IStructureSdl} from '../../parametrages-sdl-delegataire/models/structureSdl/structureSdl.model';
import {StructureDelegataireService} from '../../parametrages-sdl-delegataire/service/structureDelegataire/structure-delegataire.service';
import {StructureSdlService} from '../../parametrages-sdl-delegataire/service/structureSdl/structure-sdl.service';
import {HttpResponse} from '@angular/common/http';
import {IStructureDelegataire} from '../../parametrages-sdl-delegataire/models/structureDelegataire/structureDelegataire.model';
@Component({
    selector: 'kt-add-sdl',
    templateUrl: './add-sdl.component.html',
    styleUrls: ['./add-sdl.component.scss']
})
export class AddSdlComponent implements OnInit {
    formDemandeSubmitted = false;
    sdls: ISdl;
	tabStructureSdls?: IStructureSdl[] | null;


	// GroupForm avocatForm
    sdlForm = this.fb.group({
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
        structure: [''],
        capital: [''],
    });

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private sdlService: SdlService,
        private structureSdlService: StructureSdlService,
        private translate: TranslateService
    ) {}

	ngOnInit() {
		// get list of types affaire
		this.structureSdlService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<IStructureSdl[]>) => {
				this.tabStructureSdls =  res.body;
			},
			error: () => { },
		});}

	Back(): void {
		this.router.navigate(['pages/delegataire/sdl'])
	}

	addSdl() {
		this.formDemandeSubmitted = true;
		console.log('form submit !');
		console.log('sdl form', this.sdlForm.value);

      if (this.sdlForm.valid) {
            this.sdls = {
                raisonSocial: this.sdlForm.value.raisonSocial,
				raisonCom: this.sdlForm.value.raisonCom,
                idFiscale: this.sdlForm.value.idFiscale,
                ice: this.sdlForm.value.ice,
                numCnss: this.sdlForm.value.numCNSS,
                adresse: this.sdlForm.value.adresse,
                tel: this.sdlForm.value.tel,
                fax: this.sdlForm.value.fax,
                email: this.sdlForm.value.email,
                gerant: this.sdlForm.value.gerant,
                structure: this.sdlForm.value.structure,
                capital: this.sdlForm.value.capital,
            };

			this.sdlService.addSdl(this.sdls).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_sdl', res.body.id.toString());
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.router.navigate(['pages/delegataire/sdl']);
						// localStorage.setItem("curentStep", JSON.stringify(1));
					});
				}
				console.log('res add sdl =========>', res);
			});
		}
		// localStorage.setItem("curentStep", JSON.stringify(0));
	}

}
