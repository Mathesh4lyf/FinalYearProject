import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuppliersInformation } from './suppliers-information';
import { CustomersService } from '../customers.service';
import { SupplierInformationResponse } from './SupplierInformationResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-suppliers-informationpage',
  templateUrl: './suppliers-informationpage.component.html',
  styleUrls: ['./suppliers-informationpage.component.css']
})
export class SuppliersInformationpageComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateSupplierInformation";
  public supplierinformation: SuppliersInformation = new SuppliersInformation();
  public supplierinformationresponse!: SupplierInformationResponse;
  public supplierinformationlist:SuppliersInformation[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling SupplierInformation");
    this.getSuppliersInformation();

  }

  createSuppliersInformation(supplierinformation:NgForm):void { 
    console.log("form data",supplierinformation.value)
    if(this.isUpdate){
      this.backendservice.updateSuppliersInformation(supplierinformation.value).subscribe(
        (response:SupplierInformationResponse)=>{ 
          console.log("SupplierInformationsResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getSuppliersInformation();
        });
      }else{
    this.backendservice.createSuppliersInformation(supplierinformation.value).subscribe(
      (response:SupplierInformationResponse)=>{ 
        console.log("SupplierInformationResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getSuppliersInformation();
      });
  }
}
editSupplierInformation(supplierinformation:SuppliersInformation):void { 
 this.supplierinformation=supplierinformation
 this.isUpdate=true
 this.buttonmessage="UpdateSupplierInformation"
}
deleteSuppliersInformation(supplierinformation:SuppliersInformation):void { 
 
}
  public getSuppliersInformation():void{
    this.backendservice.getSuppliersInformation().subscribe(
      (response:SupplierInformationResponse)=>{
        console.log("SupplierInformationResponse",response)
        // this.supplierinformation=response.DATA;
        // this.supplierinformationlist?.push(this.supplierinformation)
        this.supplierinformationlist=response.DATA;
        console.log("In message",this.supplierinformation)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}

