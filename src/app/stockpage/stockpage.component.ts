import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './Stock';
import { CustomersService } from '../customers.service';
import { StockResponse } from './StockResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.css']
})
export class StockpageComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateStock";
  public stock: Stock=new Stock();
  public stockresponse!: StockResponse;
  public stocklist:Stock[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Stock");
    this.getstock();

  }

  createstock(stock:NgForm):void { 
    console.log("form data",stock.value)
    if(this.isUpdate){
      this.backendservice.updatestock(stock.value).subscribe(
        (response:StockResponse)=>{ 
          console.log("StockResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getstock();
        });
      }else{
    this.backendservice.createstock(stock.value).subscribe(
      (response:StockResponse)=>{ 
        console.log("StockResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getstock();
      });
  }
}
editStock(stock:Stock):void { 
 this.stock=stock
 this.isUpdate=true
 this.buttonmessage="UpdateStock"
}
deleteStock(stock:Stock):void { 
  this.backendservice.Deletestock(stock).subscribe(
    (response:StockResponse)=>{ 
      console.log("StockResponse",response)
      alert(response.RESPONSEMESSAGE)
      this.getstock();
    });
}

  public getstock():void{
    this.backendservice.getstock().subscribe(
      (response:StockResponse)=>{
        console.log("StockResponse",response)
        this.stock=response.DATA;
        this.stocklist?.push(this.stock)
        // this.stocklist=response.DATA;
        console.log("In message",this.stock)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}

