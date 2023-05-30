import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'kt-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent {
  constructor(private router: Router,) {}

  EtapeDernier(): void {
		this.router.navigate(["pages/personnel/list-personnel"]);
	}
}
