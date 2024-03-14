import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers';
import { CustomersService } from '../customers.service';
import { CustomersResponse } from './customersresponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { createCustomerResponse } from './createCustomerResponse';


@Component({
  selector: 'app-customerspage',
  templateUrl: './customerspage.component.html',
  styleUrls: ['./customerspage.component.css']
})
export class CustomerspageComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateCustomer";
  public customers: Customers=new Customers();
  public customersresponse!: CustomersResponse;
  public customerslist:Customers[] = [];
  constructor(private backendservice:CustomersService) { }
  
  ngOnInit(): void {
    console.log("Calling Customers");
    this.getCustomers();
  }

  createCustomer(customer:NgForm):void { 
    console.log("form data",customer.value)
    if(this.isUpdate){
      this.backendservice.updatecustomers(customer.value).subscribe(
        (response:CustomersResponse)=>{ 
          console.log("CustomersResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getCustomers();
        });
    }else{
    this.backendservice.createcustomers(customer.value).subscribe(
      (response:createCustomerResponse)=>{ 
        console.log("CustomerResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getCustomers();
      });
    }
  }
  editcustomers(customer:Customers):void { 
   this.customers=customer
   this.isUpdate=true
   this.buttonmessage="UpdateCustomer"
  }
 deletecustomers(customer:Customers):void { 
  this.backendservice.Deletecustomers(customer).subscribe(
    (response:CustomersResponse)=>{ 
      console.log("CustomersResponse",response)
      alert(response.RESPONSEMESSAGE)
      this.getCustomers();
    });
  }
  public getCustomers():void{
    this.backendservice.getcustomers().subscribe(
      (response:CustomersResponse)=>{
        console.log("CustomersResponse",response)
      //  this.customers=response.DATA;
        // this.customerslist?.push(this.customers)
        this.customerslist=response.DATA
        console.log("In message",this.customerslist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 

  
}
