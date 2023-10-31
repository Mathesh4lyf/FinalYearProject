import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from './customers';

@Component({
  selector: 'app-customerspage',
  templateUrl: './customerspage.component.html',
  styleUrls: ['./customerspage.component.css']
})
export class CustomerspageComponent {

  public isUpdate=false;
  public Customerspage: Customers;
  public Customerslist:Customers[] | undefined;
  constructor( private customersService: CustomersService){
    this.Customerspage=new Customers();
  }
}
