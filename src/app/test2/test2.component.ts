import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from './status';
import { CustomersService } from '../customers.service';
import { statusResponse } from '../statuspage/StatusResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-statuspage',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  public isUpdate=false;
  public status!: Status;
  public statusresponse!: statusResponse;
  public statuslist:Status[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Status");
    this.getstatus();

  }

  createstatus(status:NgForm):void { 
    console.log("form data",status.value)
    this.backendservice.createstatus(status.value).subscribe(
      (response:statusResponse)=>{ 
        console.log("SuppliersResponse",response)
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
