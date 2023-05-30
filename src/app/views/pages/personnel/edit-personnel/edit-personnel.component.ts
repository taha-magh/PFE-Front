import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.scss']
})
export class EditPersonnelComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/personnel/list-personnel"]);
	}
}
