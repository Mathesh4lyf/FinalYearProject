import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from './product';
import { CustomersService } from '../customers.service';
import { ProductResponse } from './ProductResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Product } from './products';





@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateProduct";
  public product: Product=new Product();
  public productresponse!: ProductResponse;
  public productlist:Product[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Products");
    this.getProduct();

  }

  createProduct(product:NgForm):void { 
    console.log("form data",product.value)
    if(this.isUpdate){
      this.backendservice.updateProduct(product.value).subscribe(
        (response:ProductResponse)=>{ 
          console.log("ProductResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getProduct();
        });
      }else{
    this.backendservice.createProduct(product.value).subscribe(
      (response:ProductResponse)=>{ 
        console.log("ProductResponse",response)
        alert(response.RESPONSEMESSAGE)
          this.getProduct();
      });
    }
  }
  editProduct(product:Product):void { 
   this.product=product
   this.isUpdate=true
   this.buttonmessage="UpdateProduct"
  }
  deleteProduct(product:Product):void { 
   
  }

  public getProduct():void{
    this.backendservice.getProduct().subscribe(
      (response:ProductResponse)=>{
        console.log("ProductResponse",response)
        // this.product=response.DATA;
        // this.productlist?.push(this.product)
        this.productlist=response.DATA;
        console.log("In message",this.productlist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}
