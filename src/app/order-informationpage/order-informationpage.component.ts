import { Component } from '@angular/core';
import { OrderInformation } from './order-information';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-order-informationpage',
  templateUrl: './order-informationpage.component.html',
  styleUrls: ['./order-informationpage.component.css']
})
export class OrderInformationpageComponent {

  public isUpdate=false;
  public OrderInformation: OrderInformation;
  public OrderInformationlist:OrderInformation[] | undefined;
  constructor( private customersService: CustomersService){
    this.OrderInformation=new OrderInformation();
  }
}
