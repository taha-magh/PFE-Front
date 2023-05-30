import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-show-conge',
  templateUrl: './show-conge.component.html',
  styleUrls: ['./show-conge.component.scss']
})
export class ShowCongeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/conge/list-conge"]);
	}
}
