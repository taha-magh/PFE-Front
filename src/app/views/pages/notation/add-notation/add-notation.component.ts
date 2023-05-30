import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-notation',
  templateUrl: './add-notation.component.html',
  styleUrls: ['./add-notation.component.scss']
})
export class AddNotationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
		this.router.navigate(["pages/notation/list-notation"]);
	}
}
