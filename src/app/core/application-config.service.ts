import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class ApplicationConfigService {
	private endpointPrefix = environment.BACKEND_URL;

	getEndpointFor(api: string): string {
		return `${this.endpointPrefix}${api}`;
	}
}
