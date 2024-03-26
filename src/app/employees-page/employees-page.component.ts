import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees-page';
import { CustomersService } from '../customers.service';
import { EmployeesResponse } from './EmployeesResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { createEmployeeResponse } from './createEmployeeResponse';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {
  public isUpdate=false;
  public buttonmessage="CreateEmployee";
  public employees: Employees=new Employees();
  public employeesresponse!: EmployeesResponse;
  public employeeslist:Employees[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Employees");
    this.getEmployees();

  }

  createEmployee(employee:NgForm):void { 
    console.log("form data",employee.value)
    if(this.isUpdate){
      this.backendservice.updateEmployees(employee.value).subscribe(
        (response:EmployeesResponse)=>{ 
          console.log("EmployeesResponse",response)
          alert(response.RESPONSEMESSAGE)
          this.getEmployees();
        });
      }else{
    this.backendservice.createEmployees(employee.value).subscribe(
      (response:createEmployeeResponse)=>{ 
        console.log("EmployeesResponse",response)
        alert(response.RESPONSEMESSAGE)
        this.getEmployees();
      });
  }
}
editEmployee(employee:Employees):void { 
 this.employees=employee
 console.log(this.employees)
 this.isUpdate=true
 this.buttonmessage="UpdateEmployee"
}
deleteEmployee(employee:Employees):void { 
  this.backendservice.DeleteEmployees(employee).subscribe(
    (response:EmployeesResponse)=>{ 
      console.log("EmployeesResponse",response)
      alert(response.RESPONSEMESSAGE)
      this.getEmployees();
    });
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
  public clearForm(form: NgForm): void {
   form.resetForm(); 
   this.employees= new Employees(); 
  } 
}