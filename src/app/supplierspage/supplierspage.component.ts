import { Component, OnInit } from '@angular/core';
import { Suppliers } from './suppliers';
import { CustomersService } from '../customers.service';
import { SupplierResponse } from './supplierresponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-supplierspage',
  templateUrl: './supplierspage.component.html',
  styleUrls: ['./supplierspage.component.css']
})
export class SupplierspageComponent implements OnInit{
  

  public isUpdate=false;
  public suppliers!: Suppliers;
  public supplierslist:Suppliers[] | undefined;
  // constructor( private customersService: CustomersService){
  //   this.suppliers=new Suppliers();
  // }
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Supplier");
    // this.getSupplier();

  }
  public getSupplier():void{
    this.backendservice.getSuppliers().subscribe(
      (response:SupplierResponse)=>{
        console.log("SupplierResponse",response)
        this.suppliers=response.DATA
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}
