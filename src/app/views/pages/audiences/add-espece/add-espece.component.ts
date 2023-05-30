import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'kt-add-espece',
  templateUrl: './add-espece.component.html',
  styleUrls: ['./add-espece.component.scss']
})
export class AddEspeceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(["pages/audiences/list-espece"]);
  }


}
