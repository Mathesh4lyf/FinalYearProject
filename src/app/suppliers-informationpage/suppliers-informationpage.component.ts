import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuppliersInformation } from './suppliers-information';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-suppliers-informationpage',
  templateUrl: './suppliers-informationpage.component.html',
  styleUrls: ['./suppliers-informationpage.component.css']
})
export class SuppliersInformationpageComponent {

  public isUpdate=false;
  public suppliers: SuppliersInformation;
  public supplierslist:SuppliersInformation[] | undefined;
  constructor( private customersService: CustomersService){
    this.suppliers=new SuppliersInformation();
  }

}
