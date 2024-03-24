import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetOrdersResponse } from './GetOrdersResponse';
import { CustomersService } from '../customers.service';
import { OrderInformation } from '../order-informationpage/order-information';
import { getorders } from './get-orders';


@Component({
  selector: 'app-get-orders-report',
  templateUrl: './get-orders-report.component.html',
  styleUrls: ['./get-orders-report.component.css']
})
export class GetOrdersReportComponent  {
  public buttonmessage="createreport";
  public getordersresponse!: GetOrdersResponse;
  public reportlist:getorders[] = [];
  constructor(private backendservice:CustomersService) { }
  

  createreport(report:NgForm):void { 
    console.log("form data",report.value)
    {
      this.backendservice.createreport(report.value).subscribe(
        (response:GetOrdersResponse)=>{ 
          console.log("GetOrdersResponse",response)
          this.reportlist=response.DATA;
          // this.createreport();
        });
      }
  }
}


