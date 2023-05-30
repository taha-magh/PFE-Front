import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-prolongement',
  templateUrl: './add-prolongement.component.html',
  styleUrls: ['./add-prolongement.component.scss']
})
export class AddProlongementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
		this.router.navigate(["pages/retraite/list-retraite"]);
	}
}
