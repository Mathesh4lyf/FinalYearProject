import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './Stock';
import { CustomersService } from '../customers.service';
import { StockResponse } from './StockResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.css']
})
export class StockpageComponent implements OnInit {
  public isUpdate=false;
  public stock!: Stock;
  public stockresponse!: StockResponse;
  public stocklist:Stock[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Stock");
    this.getstock();

  }
  public getstock():void{
    this.backendservice.getstock().subscribe(
      (response:StockResponse)=>{
        console.log("StockResponse",response)
        this.stock=response.DATA;
        this.stocklist?.push(this.stock)
        console.log("In message",this.stock)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}

