import { Component } from '@angular/core';
import { Stock } from './Stock';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.css']
})
export class StockpageComponent {

  public isUpdate=false;
  public Stock: Stock;
  public stocklist:Stock[] | undefined;
  constructor( private customersService: CustomersService){
    this.Stock=new Stock();
  }

}
