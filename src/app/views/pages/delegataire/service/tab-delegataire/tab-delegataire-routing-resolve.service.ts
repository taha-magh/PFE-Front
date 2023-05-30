import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {SuiviDelegataire, ISuiviDelegataire} from '../../models/delegataire/tab-delegataire.model';
import {TabDelegataireService} from './tab-delegataire.service';

@Injectable({
	providedIn: 'root',
})
export class TabDelegataireRoutingResolveService {
	constructor(protected service: TabDelegataireService, protected router: Router) {}

	resolve(
		route: ActivatedRouteSnapshot
	): Observable<ISuiviDelegataire> | Observable<never> {
		const id = route.params['id'];

		if (id) {
			return this.service.find(id).pipe(
				mergeMap((expert: HttpResponse<ISuiviDelegataire>) => {
					if (expert != undefined && expert.body) {
						return of(expert.body);
					} else {
						this.router.navigate(['404']);
						return EMPTY;
					}
				})
			);
		}
		return of(new SuiviDelegataire());
	}
}
