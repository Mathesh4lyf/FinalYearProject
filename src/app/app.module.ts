import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
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
import { StatuspageComponent } from './statuspage/statuspage.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import{RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
    {
      path: 'Auth',
      component:AuthenticationComponent,
    },

    {path: 'admin',
    component: DashboardComponent,
    
    children: [
      {
        path: 'Dash',
        component: HomepageComponent,
      
      },
      {
        path: 'About',
        component: AboutpageComponent,
       
      },
      {
        path: 'Status',
        component: StatuspageComponent,
       
      },
      {
        path: 'Supplier',
        component: SuppliersInformationpageComponent,
       
      },
      {
        path: 'CustomerProfile',
        component: CustomerspageComponent,
        children: [

        ],
       
      },
      {
          path: 'EmployeeProfile',
          component: EmployeesPageComponent,
        
        }, 
        {
          path: 'Products',
          component: ProductpageComponent,
        
        },
        {
          path: 'Stock',
          component: StockpageComponent,
          
        },
        {
          path: 'Delivery',
          component: DeliveryInformationpageComponent,
          
        },
        {
          path: 'Orders',
          component: OrderInformationpageComponent,
          
        },
        {
          path: 'SupplierProfile',
          component: SupplierspageComponent
         
        },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
