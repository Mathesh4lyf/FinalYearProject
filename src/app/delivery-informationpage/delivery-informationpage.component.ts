import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Delivery } from './delivery-information';
import { CustomersService } from '../customers.service';
import { DeliveryInformationResponse } from './DeliveryInformationResponse '; 
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-delivery-informationpage',
  templateUrl: './delivery-informationpage.component.html',
  styleUrls: ['./delivery-informationpage.component.css']
})
export class DeliveryInformationpageComponent implements OnInit {
  public isUpdate=false;
  public deliveryinformation!: Delivery;
  public deliveryinformationresponse!: DeliveryInformationResponse;
  public DeliveryInformationlist:Delivery[] = [];
  public ShowData:Boolean=false;

  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling DeliveryInformation");
    this.getDeliveryInformation();

  }

  createDelivery(delivery:NgForm):void { 
    console.log("form data",delivery.value)
    this.backendservice.createDelivery(delivery.value).subscribe(
      (response:DeliveryInformationResponse)=>{ 
        console.log("DeliveryInformationResponse",response)
      });
    }
  public getDeliveryInformation():void{
    this.backendservice.getDelivery().subscribe(
      (response:DeliveryInformationResponse)=>{
        console.log("DeliveryInformationResponse",response)
        if(response.RESPONSECODE==="00"){
          this.deliveryinformation=response.DATA;
          this.DeliveryInformationlist?.push(this.deliveryinformation)
          if(this.DeliveryInformationlist.length>0){
            this.ShowData=true
            console.log("Data more than 0",this.DeliveryInformationlist.length)
            console.log("In message",this.DeliveryInformationlist)
          }
        }
        else{
          console.log("Request not succesful",response)
        }
        
       
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}
