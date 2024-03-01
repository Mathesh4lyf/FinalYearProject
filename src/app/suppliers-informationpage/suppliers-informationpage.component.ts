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
  public supplierinformation!: SuppliersInformation;
  public supplierinformationresponse!: SupplierInformationResponse;
  public supplierinformationlist:SuppliersInformation[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling SupplierInformation");
    this.getSuppliersInformation();

  }

  createSuppliersInformation(supplierinformation:NgForm):void { 
    console.log("form data",supplierinformation.value)
    this.backendservice.createSuppliersInformation(supplierinformation.value).subscribe(
      (response:SupplierInformationResponse)=>{ 
        console.log("SupplierInformationResponse",response)
      });
  }
  public getSuppliersInformation():void{
    this.backendservice.getSuppliersInformation().subscribe(
      (response:SupplierInformationResponse)=>{
        console.log("SupplierInformationResponse",response)
        this.supplierinformation=response.DATA;
        this.supplierinformationlist?.push(this.supplierinformation)
        console.log("In message",this.supplierinformation)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}

