import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from './status';
import { CustomersService } from '../customers.service';
import { statusResponse } from '../statuspage/StatusResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { StatusResponse } from './statusresponse';



@Component({
  selector: 'app-statuspage',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateStatus";
  public status: Status=new Status;
  public statusresponse!: statusResponse;
  public statuslist:Status[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Status");
    this.getstatus();

  }

  createstatus(status:NgForm):void { 
    console.log("form data",status.value)
    if(this.isUpdate){
      this.backendservice.updatestatus(status.value).subscribe(
        (response:StatusResponse)=>{ 
          console.log("StatussResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getstatus();
        });
    }else{
    this.backendservice.createstatus(status.value).subscribe(
      (response:statusResponse)=>{ 
        console.log("SuppliersResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getstatus();
      });
  }
}
editStatus(status:Status):void { 
 this.status=status
 this.isUpdate=true
 this.buttonmessage="UpdateStatus"
}
deleteStatus(status:Status):void { 
 
}

  public getstatus():void{
    this.backendservice.getstatus().subscribe(
      (response:statusResponse)=>{
        console.log("StatusResponse",response)
        // this.status=response.DATA;
        // this.statuslist?.push(this.status)
        this.statuslist=response.DATA;
        console.log("In message",this.statuslist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}
