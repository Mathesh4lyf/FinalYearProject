import { Component } from '@angular/core';
import { Product } from './product';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {

  public isUpdate=false;
  public Product: Product;
  public productlist:Product[] | undefined;
  constructor( private customersService: CustomersService){
    this.Product=new Product();
  }

}
