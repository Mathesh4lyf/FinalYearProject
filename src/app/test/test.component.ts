import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suppliers } from './suppliers';
import { CustomersService } from '../customers.service';
import { SupplierResponse } from './supplierresponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateSupplier";
  public suppliers: Suppliers=new Suppliers();
  public supplierresponse!: SupplierResponse;
  public supplierslist:Suppliers[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Supplier");
    this.getSupplier();

  }

  createSuppliers(suppliers:NgForm):void { 
    console.log("form data",suppliers.value)
    if(this.isUpdate){
      this.backendservice.updateSuppliers(suppliers.value).subscribe(
        (response:SupplierResponse)=>{ 
          console.log("SuppliersResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getSupplier();
        });
    }else{
      this.backendservice.createSuppliers(suppliers.value).subscribe(
        (response:SupplierResponse)=>{ 
          console.log("SuppliersResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getSupplier();
        });
    }
  }
  editSuppliers(suppliers:Suppliers):void { 
   this.suppliers=suppliers
   this.isUpdate=true
   this.buttonmessage="UpdateSupplier"
  }
 deleteSuppliers(suppliers:Suppliers):void { 
  this.backendservice.DeleteSuppliers(suppliers).subscribe(
    (response:SupplierResponse)=>{ 
      console.log("SuppliersResponse",response)
      alert(response.RESPONSEMESSAGE)
      this.getSupplier();
    });
  }


  public getSupplier():void{
    this.backendservice.getSuppliers().subscribe(
      (response:SupplierResponse)=>{
        console.log("SupplierResponse",response)
        // this.suppliers=response.DATA;
        // this.supplierslist?.push(this.suppliers)
        this.supplierslist=response.DATA;
        console.log("In message",this.supplierslist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  }
  public clearForm(form: NgForm): void {
   form.resetForm(); 
   this.suppliers = new Suppliers(); 
  } 
}
