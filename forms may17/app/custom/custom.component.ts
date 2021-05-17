import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  customer : Customer;
  isValid : boolean;
  msg : string;

  insert(customerForm :NgForm)
  { 
    if(customerForm.invalid)
    {
      return;
    }

  this.isValid=true;
  if(this.isValid==true)
  {
    // this.msg="firm submitted successfully";
    this._customerService.addCustomer(this.customer).
          subscribe(x=>{this.msg=x});
  }
}
  constructor(private _customerService : CustomerService) { 
    this.isValid=false;
    this.customer=new Customer();
  }


  

  ngOnInit(): void {
  }

}
