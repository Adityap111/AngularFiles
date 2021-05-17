import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employ-reactive',
  templateUrl: './employ-reactive.component.html',
  styleUrls: ['./employ-reactive.component.css']
})
export class EmployReactiveComponent implements OnInit {

  isValidFormSubmitted: boolean;
  msg :string;
  employForm = new FormGroup({
    empNo : new FormControl('',Validators.required),
    empName : new FormControl('',Validators.required),
    empDept : new FormControl('',Validators.required),
    empDesig : new FormControl('',Validators.required),
    empBasic : new FormControl('',Validators.required),
  });

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if(this.employForm.invalid){
       return;    
    }     
    this.isValidFormSubmitted = true;    
  this.msg="employ details Submitted...";
    console.log(this.employForm.valid);
}


  constructor() { }

  ngOnInit(): void {
  }

}
