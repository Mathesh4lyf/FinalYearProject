import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suppliers } from './suppliers';
import { CustomersService } from '../customers.service';
import { SupplierResponse } from './supplierresponse';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public isUpdate=false;
  public suppliers!: Suppliers;
  public supplierresponse!: SupplierResponse;
  public supplierslist:Suppliers[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Supplier");
    this.getSupplier();

  }
  public getSupplier():void{
    this.backendservice.getSuppliers().subscribe(
      (response:SupplierResponse)=>{
        console.log("SupplierResponse",response)
        this.suppliers=response.DATA;
        this.supplierslist?.push(this.suppliers)
        console.log("In message",this.supplierslist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}
