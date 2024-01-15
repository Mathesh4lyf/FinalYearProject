import { Component } from '@angular/core';
import { Suppliers } from './suppliers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent {

  public isUpdate=false;
  public suppliers: Suppliers;
  public supplierslist:Suppliers[] | undefined;
  constructor( private customersService: CustomersService){
    this.suppliers=new Suppliers();
  }

}
