import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { CustomersService } from '../customers.service';
import { ProductResponse } from './ProductResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  public isUpdate=false;
  public product!: Product;
  public productresponse!: ProductResponse;
  public productlist:Product[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Products");
    this.getProduct();

  }

  createProduct(product:NgForm):void { 
    console.log("form data",product.value)
    this.backendservice.createProduct(product.value).subscribe(
      (response:ProductResponse)=>{ 
        console.log("ProductResponse",response)
      });
     
    }

  public getProduct():void{
    this.backendservice.getProduct().subscribe(
      (response:ProductResponse)=>{
        console.log("ProductResponse",response)
        this.product=response.DATA;
        this.productlist?.push(this.product)
        console.log("In message",this.product)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}
