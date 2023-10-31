import { Component } from '@angular/core';
import { Suppliers } from './suppliers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-supplierspage',
  templateUrl: './supplierspage.component.html',
  styleUrls: ['./supplierspage.component.css']
})
export class SupplierspageComponent {

  public isUpdate=false;
  public suppliers: Suppliers;
  public supplierslist:Suppliers[] | undefined;
  constructor( private customersService: CustomersService){
    this.suppliers=new Suppliers();
  }
}
