import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuppliersInformation } from './suppliers-informationpage/suppliers-information';
import { SupplierspageComponent } from './supplierspage/supplierspage.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { StockpageComponent } from './stockpage/stockpage.component';
import { CustomerspageComponent } from './customerspage/customerspage.component';
import { DeliveryInformationpageComponent } from './delivery-informationpage/delivery-informationpage.component';
import { OrderInformationpageComponent } from './order-informationpage/order-informationpage.component';
import { StatuspageComponent } from './statuspage/statuspage.component';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiServerUrl = 'https://localhost:44367';  //backend api call.

  constructor(private http: HttpClient) {}
  


  //SuppliersInformation//
  public getSuppliersInformation(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/SuppliersInformation`)
  }
  public createSuppliersInformation(data:SuppliersInformation): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/SuppliersInformation`,data)
  }
  public updateSuppliersInformation(data:SuppliersInformation): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/SuppliersInformation`,data)
  }
  public DeleteSuppliersInformation(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/SuppliersInformation/`+data)
  }

  //Suppliers//
  public getSuppliers(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Supplier`)
  }
  public createSuppliers(data:SupplierspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Suppliers`,data)
  }
  public updateSuppliers(data:SupplierspageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Suppliers`,data)
  }
  public DeleteSuppliers(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Suppliers/`+data)
  }

  //Employees//
  public getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Employees`)
  }
  public createEmployees(data:EmployeesPageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Employees`,data)
  }
  public updateEmployees(data:EmployeesPageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Employees`,data)
  }
  public DeleteEmployees(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Employees/`+data)
  }

   //Product//
   public getProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Product`)
  }
  public createProduct(data:ProductpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Product`,data)
  }
  public updateProduct(data:ProductpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Product`,data)
  }
  public DeleteProduct(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Product/`+data)
  }

  //stock//
  public getstock(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/stock`)
  }
  public createstock(data:StockpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/stock`,data)
  }
  public updatestock(data:StockpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/stock`,data)
  }
  public Deletestock(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/stock/`+data)
  }

  //customers//
  public getcustomers(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/customers`)
  }
  public createcustomers(data:CustomerspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/customers`,data)
  }
  public updatecustomers(data:CustomerspageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/customers`,data)
  }
  public Deletecustomers(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/customers/`+data)
  }
  
  //delivery-information//
  public getDelivery(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/delivery-information`)
  }
  public createDelivery(data:DeliveryInformationpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/delivery-information`,data)
  }
  public updateDelivery(data:DeliveryInformationpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/delivery-information`,data)
  }
  public DeleteDelivery(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/delivery-information/`+data)
  }

  //order-information//
  public getOrderInformation(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/order-information`)
  }
  public createOrderInformation(data:OrderInformationpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/order-information`,data)
  }
  public updateOrderInformation(data:OrderInformationpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/order-information`,data)
  }
  public DeleteOrderInformation(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/order-information/`+data)
  }

  //status//
  public getstatus(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/order-information`)
  }
  public createstatus(data:StatuspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/order-information`,data)
  }
  public updatestatus(data:StatuspageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/order-information`,data)
  }
  public Deletestatus(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/order-information/`+data)
  }

  
  /*login
  public createAuth(data:Auth): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Login`,data)
  } */
}
