import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Delivery } from './delivery-information';

@Component({
  selector: 'app-delivery-informationpage',
  templateUrl: './delivery-informationpage.component.html',
  styleUrls: ['./delivery-informationpage.component.css']
})
export class DeliveryInformationpageComponent {

  public isUpdate=false;
  public Delivery: Delivery;
  public Deliverylist:Delivery[] | undefined;
  constructor( private customersService: CustomersService){
    this.Delivery=new Delivery();
  }
}
