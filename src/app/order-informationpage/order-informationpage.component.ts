import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderInformation } from './order-information';
import { CustomersService } from '../customers.service';
import { OrderInformationResponse } from './OrderInformationResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-order-informationpage',
  templateUrl: './order-informationpage.component.html',
  styleUrls: ['./order-informationpage.component.css']
})
export class OrderInformationpageComponent implements OnInit {
  public isUpdate=false;
  public orderinformation!: OrderInformation;
  public orderinformationresponse!: OrderInformationResponse;
  public orderinformationlist:OrderInformation[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling OrderInformation");
    this.getOrderInformation();

  }
  public getOrderInformation():void{
    this.backendservice.getOrderInformation().subscribe(
      (response:OrderInformationResponse)=>{
        console.log("OrderInformationResponse",response)
        this.orderinformation=response.DATA;
        this.orderinformationlist?.push(this.orderinformation)
        console.log("In message",this.orderinformationlist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}