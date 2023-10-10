import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { CustomerspageComponent } from './customerspage/customerspage.component';
import { DeliveryInformationpageComponent } from './delivery-informationpage/delivery-informationpage.component';
import { OrderInformationpageComponent } from './order-informationpage/order-informationpage.component';
import { SupplierspageComponent } from './supplierspage/supplierspage.component';
import { SuppliersInformationpageComponent } from './suppliers-informationpage/suppliers-informationpage.component';
import { StockpageComponent } from './stockpage/stockpage.component';
import { StatuspageComponent } from './statuspage/statuspage.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AboutpageComponent,
    ProductpageComponent,
    EmployeesPageComponent,
    CustomerspageComponent,
    DeliveryInformationpageComponent,
    OrderInformationpageComponent,
    SupplierspageComponent,
    SuppliersInformationpageComponent,
    StockpageComponent,
    StatuspageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
