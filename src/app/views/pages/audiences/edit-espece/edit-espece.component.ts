import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'kt-edit-espece',
  templateUrl: './edit-espece.component.html',
  styleUrls: ['./edit-espece.component.scss']
})
export class EditEspeceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(["pages/audiences/list-espece"]);
  }
}
