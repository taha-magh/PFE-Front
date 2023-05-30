import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-edit-notation',
  templateUrl: './edit-notation.component.html',
  styleUrls: ['./edit-notation.component.scss']
})
export class EditNotationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
		this.router.navigate(["pages/notation/list-notation"]);
	}
}
