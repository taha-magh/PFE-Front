import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrls: ['./edit-conge.component.scss']
})
export class EditCongeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/conge/list-conge"]);
	}
}
