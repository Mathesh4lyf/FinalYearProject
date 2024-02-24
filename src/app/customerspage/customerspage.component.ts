import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customerspage',
  templateUrl: './customerspage.component.html',
  styleUrls: ['./customerspage.component.css']
})
export class CustomerspageComponent implements OnInit{
  // public isUpdate=false;
  // public Customerspage: Customers;
  // public Customerslist:Customers[] | undefined;
  // constructor( private customersService: CustomersService){
  //   this.Customerspage=new Customers();
  // }
  constructor( ){
    
  }
  ngOnInit(): void {
    console.log("Customerpage")
  }


  
}
