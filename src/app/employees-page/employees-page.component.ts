import { Component } from '@angular/core';
import { Employees } from './employees-page';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {

  public isUpdate=false;
  public Employees: Employees;
  public Employeeslist:Employees[] | undefined;
  constructor( private customersService: CustomersService){
    this.Employees=new Employees();
  }
}
