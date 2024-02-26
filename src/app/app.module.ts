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
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [{
  path: 'auth',
  component:AuthenticationComponent,
},

{path: 'admin',
component: DashboardComponent,

children: [
 
   {
     path: 'about',
     component: AboutpageComponent
  
   
  },
  {
    path: 'status',
    component: Test2Component
   
  },
  {
    path: 'supplier',
    component: TestComponent
   
  },
  {
    path: 'customerProfile',
    component: CustomerspageComponent
   
  },
  {
      path: 'employeeProfile',
      component: EmployeesPageComponent
    
    }, 
    {
      path: 'products',
      component: ProductpageComponent
    
    },
    {
      path: 'stock',
      component: StockpageComponent
      
    },
    {
      path: 'delivery',
      component: DeliveryInformationpageComponent
      
    },
    {
      path: 'orders',
      component: OrderInformationpageComponent
      
    },
    {
      path: 'supplierinfo',
      component: SuppliersInformationpageComponent
      
    },
    {
      path: 'test',
      component: TestComponent
     
    },
    {
      path: 'test2',
      component: Test2Component
     
    },
    {
      path: 'supplierProfile',
      component: SupplierspageComponent
     
    },
    {
      path: '**',
      component: HomepageComponent
    
    },
]
},
{
  path: 'Orders',
  component: OrderInformationpageComponent
  
}

  // {path: '', component: AuthenticationComponent },
  // { path: 'auth', component: AuthenticationComponent },
  // { path: 'suppliers', component: SupplierspageComponent},
  // { path: 'about', component: AboutpageComponent }, // About route
  // { path: 'customers', component: CustomerspageComponent }, // Customers route
  // { path: 'DeliveryInformation ', component: DeliveryInformationpageComponent }, // DeliveryInformation route
  // { path: 'Employees', component: EmployeesPageComponent }, // Employees route
  // { path: 'Homepage', component: HomepageComponent }, // Homepage route
  // { path: 'OrderInformation', component: OrderInformationpageComponent }, // OrderInformation route
  // { path: 'Product', component: ProductpageComponent }, // Product route
  // { path: 'Status ', component: StatuspageComponent }, // Status route
  // { path: 'Stock', component: StockpageComponent }, // Stock route
  // { path: 'suppliers-informationpage', component: SuppliersInformationpageComponent }, // suppliers-informationpage route
  // { path: 'Supplier', component: SupplierspageComponent}, // Supplier route
  // // Other routes go here
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
    DashboardComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   FormsModule,
  //   HttpClientModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
