import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers';
import { CustomersService } from '../customers.service';
import { CustomersResponse } from './customersresponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customerspage',
  templateUrl: './customerspage.component.html',
  styleUrls: ['./customerspage.component.css']
})
export class CustomerspageComponent implements OnInit {
  public isUpdate=false;
  public customers!: Customers;
  public customersresponse!: CustomersResponse;
  public customerslist:Customers[] = [];
  constructor(private backendservice:CustomersService) { }
  ngOnInit(): void {
    console.log("Calling Customers");
    this.getCustomers();
  }
  public getCustomers():void{
    this.backendservice.getcustomers().subscribe(
      (response:CustomersResponse)=>{
        console.log("CustomersResponse",response)
       this.customers=response.DATA;
        this.customerslist?.push(this.customers)
        // this.customerslist=response.DATA
        console.log("In message",this.customerslist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 

  
}
