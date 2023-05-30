import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'kt-add-tarifs',
  templateUrl: './add-tarifs.component.html',
  styleUrls: ['./add-tarifs.component.scss']
})
export class AddTarifsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(["pages/audiences/list-tarifs"]);
  }
}
