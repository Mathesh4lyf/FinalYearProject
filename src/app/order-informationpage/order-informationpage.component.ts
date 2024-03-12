import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderInformation } from './order-information';
import { CustomersService } from '../customers.service';
import { OrderInformationResponse } from './OrderInformationResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-order-informationpage',
  templateUrl: './order-informationpage.component.html',
  styleUrls: ['./order-informationpage.component.css']
})
export class OrderInformationpageComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateOrderInformation";
  public orderinformation: OrderInformation=new OrderInformation();
  public orderinformationresponse!: OrderInformationResponse;
  public orderinformationlist:OrderInformation[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling OrderInformation");
    this.getOrderInformation();

  }
  createOrderInformation(orderinformation:NgForm):void { 
    console.log("form data",orderinformation.value)
    if(this.isUpdate){
      this.backendservice.updateOrderInformation(orderinformation.value).subscribe(
        (response:OrderInformationResponse)=>{ 
          console.log("OrderInformationResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getOrderInformation();
        });
      }else{
    this.backendservice.createOrderInformation(orderinformation.value).subscribe(
      (response:OrderInformationResponse)=>{ 
        console.log("EmployeesResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getOrderInformation();
      });
    }
  }
  editOrderInformation(orderinformation:OrderInformation):void { 
   this.orderinformation=orderinformation
   this.isUpdate=true
   this.buttonmessage="UpdateOrderInformation"
  }
  deleteOrderInformation(orderinformation:OrderInformation):void { 
   
  }
  public getOrderInformation():void{
    this.backendservice.getOrderInformation().subscribe(
      (response:OrderInformationResponse)=>{
        console.log("OrderInformationResponse",response)
        // this.orderinformation=response.DATA;
        // this.orderinformationlist?.push(this.orderinformation)
        this.orderinformationlist=response.DATA;
        console.log("In message",this.orderinformationlist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}