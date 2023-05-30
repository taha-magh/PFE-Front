import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.scss']
})
export class AddCongeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/conge/list-conge"]);
	}
}
