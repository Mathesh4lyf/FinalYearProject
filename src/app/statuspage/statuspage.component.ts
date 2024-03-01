import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from './status';
import { CustomersService } from '../customers.service';
import { statusResponse } from './StatusResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-statuspage',
  templateUrl: './statuspage.component.html',
  styleUrls: ['./statuspage.component.css']
})
export class StatuspageComponent implements OnInit {
  public isUpdate=false;
  public status!: Status;
  public statusresponse!: statusResponse;
  public statuslist:Status[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Status");
    this.getstatus();

  }

  createstatus(product:NgForm):void { 
    console.log("form data",product.value)
    this.backendservice.createstatus(product.value).subscribe(
      (response:statusResponse)=>{ 
        console.log("StatusResponse",response)
      });
     
    }
  public getstatus():void{
    this.backendservice.getstatus().subscribe(
      (response:statusResponse)=>{
        console.log("StatusResponse",response)
        this.status=response.DATA;
        this.statuslist?.push(this.status)
        console.log("In message",this.status)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}
