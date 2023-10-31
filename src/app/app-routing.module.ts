import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CustomerspageComponent } from './customerspage/customerspage.component';
import { LoginComponent } from './login/login.component';
import { DeliveryInformationpageComponent } from './delivery-informationpage/delivery-informationpage.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderInformationpageComponent } from './order-informationpage/order-informationpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { StatuspageComponent } from './statuspage/statuspage.component';
import { StockpageComponent } from './stockpage/stockpage.component';
import { SuppliersInformationpageComponent } from './suppliers-informationpage/suppliers-informationpage.component';
import { SupplierspageComponent } from './supplierspage/supplierspage.component';

const routes: Routes = [
 // { path: 'login', component: HomeComponent }, // Home route
  { path: 'about', component: AboutpageComponent }, // About route
  { path: 'Customers', component: CustomerspageComponent }, // Customers route
  { path: 'Login', component:  LoginComponent }, // Login route
  { path: 'DeliveryInformation ', component: DeliveryInformationpageComponent }, // DeliveryInformation route
  { path: 'Employees', component: EmployeesPageComponent }, // Employees route
  { path: 'Homepage', component: HomepageComponent }, // Homepage route
  { path: 'OrderInformation', component: OrderInformationpageComponent }, // OrderInformation route
  { path: 'Product', component: ProductpageComponent }, // Product route
  { path: 'Status ', component: StatuspageComponent }, // Status route
  { path: 'Stock', component: StockpageComponent }, // Stock route
  { path: 'suppliers-informationpage', component: SuppliersInformationpageComponent }, // suppliers-informationpage route
  { path: 'Supplier', component: SupplierspageComponent}, // Supplier route
  // Other routes go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
