import { Component } from '@angular/core';
import { Status } from './status';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-statuspage',
  templateUrl: './statuspage.component.html',
  styleUrls: ['./statuspage.component.css']
})
export class StatuspageComponent {

  public isUpdate=false;
  public Status: Status;
  public statuslist:Status[] | undefined;
  constructor( private customersService: CustomersService){
    this.Status=new Status();
  }
}
