import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderInformation } from './order-information';
import { CustomersService } from '../customers.service';
import { OrderInformationResponse } from './OrderInformationResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { EmployeesResponse } from '../employees-page/EmployeesResponse';
import { CustomersResponse } from '../customerspage/customersresponse';
import { Customers } from '../customerspage/customers';
import { ProductResponse } from '../productpage/ProductResponse';
import { Product } from '../productpage/products';
import { Employees } from '../employees-page/employees-page';
import { SingleProductResponse } from '../productpage/SingleProductResponse';


@Component({
  selector: 'app-order-informationpage',
  templateUrl: './order-informationpage.component.html',
  styleUrls: ['./order-informationpage.component.css']
})
export class OrderInformationpageComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateOrderInformation";
  public orderinformation: OrderInformation=new OrderInformation();
  public orderinformationresponse!: OrderInformationResponse;
  public orderinformationlist:OrderInformation[] = [];
  public employeeslist: Employees[] = [];
  public customerslist: Customers[] = [];
  public productlist: Product[] = [];
  public product!:Product;
  public Balance!:string;
  public AmountToPaid:string="";
  // employeeslist: any;
  // customerslist: any;
  // productlist: Product=new Product();
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit");
    this.getOrderInformation();
    this.getEmployees();
    this.getCustomers();
    this.getProduct();  

  }
  createOrderInformation(orderinformation:NgForm):void { 
    console.log("form data",orderinformation.value)
    if(this.isUpdate){
      this.backendservice.updateOrderInformation(orderinformation.value).subscribe(
        (response:OrderInformationResponse)=>{ 
          console.log("OrderInformationResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getOrderInformation();
        });
      }else{
    this.backendservice.createOrderInformation(orderinformation.value).subscribe(
      (response:OrderInformationResponse)=>{ 
        console.log("OrderInformationResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getOrderInformation();
      });
    }
  }
  editOrderInformation(orderinformation:OrderInformation):void { 
   this.orderinformation=orderinformation
   console.log(this.orderinformation)
   this.isUpdate=true
   this.buttonmessage="UpdateOrderInformation"
  }
  deleteOrderInformation(orderinformation:OrderInformation):void { 
    this.backendservice.DeleteOrderInformation(orderinformation).subscribe(
      (response:OrderInformationResponse)=>{ 
        console.log("OrderInformationResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getOrderInformation();
      });
  }
  public getOrderInformation():void{
    this.backendservice.getOrderInformation().subscribe(
      (response:OrderInformationResponse)=>{
        console.log("OrderInformationResponse",response)
        // this.orderinformation=response.DATA;
        // this.orderinformationlist?.push(this.orderinformation)
        this.orderinformationlist=response.DATA;
        console.log("In message",this.orderinformationlist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  }
    public getEmployees():void{
      this.backendservice.getEmployees().subscribe(
        (response:EmployeesResponse)=>{ 
          console.log("EmployeesResponse",response)
          // this.employees=response.DATA;
          // this.employeeslist?.push(this.employees)
          this.employeeslist=response.DATA;
          console.log("In message",this.employeeslist)
        },(error:HttpErrorResponse)=>{
          console.log("Error Message",error)
        }
      );
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
  public getinteger(quantity:string):void{
console.log ("quantity",quantity)
let sellingprice=this.product.ProductCost;
let selectedquantity=quantity;
let result=parseInt(quantity)*parseInt(sellingprice);
this.orderinformation.AmountToBePaid=result.toString();
this.AmountToPaid=result.toString();
console.log("uprice",sellingprice)
  }
 public getbalance(amountpaid:string):void{
  let AmountToBePaid=this.orderinformation.AmountToBePaid;
  console.log("AmountPaid",amountpaid)
  console.log("AmountToBePaid",AmountToBePaid)
  let balanceresult=parseInt(amountpaid)-parseInt(this.AmountToPaid);
  this.Balance=balanceresult.toString();
 }
  public  productn(product:String):void{
    console.log (product)
    this.backendservice.getProductbyid(product).subscribe(
      (response:SingleProductResponse)=>{
        console.log("ProductResponse",response)
        // this.product=response.DATA;
        // this.productlist?.push(this.product)
        this.product=response.DATA;
        this.orderinformation.AmountToBePaid=this.product.ProductCost;
        console.log("In message",this.product)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  }
  public clearForm(form: NgForm): void {
   form.resetForm(); 
   this.orderinformation = new OrderInformation(); 
      }
 
}