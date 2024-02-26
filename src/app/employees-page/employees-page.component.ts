import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees-page';
import { CustomersService } from '../customers.service';
import { EmployeesResponse } from './EmployeesResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {
  public isUpdate=false;
  public employees!: Employees;
  public employeesresponse!: EmployeesResponse;
  public employeeslist:Employees[] = [];
  constructor(private backendservice:CustomersService) { }

  ngOnInit(): void {
    console.log("Calling Employees");
    this.getEmployees();

  }
  public getEmployees():void{
    this.backendservice.getEmployees().subscribe(
      (response:EmployeesResponse)=>{
        console.log("EmployeesResponse",response)
        this.employees=response.DATA;
        this.employeeslist?.push(this.employees)
        console.log("In message",this.employeeslist)
      },(error:HttpErrorResponse)=>{
        console.log("Error Message",error)
      }
    );
  } 
}