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
import { SupplierResponse } from './supplierspage/supplierresponse';
import { DeliveryInformationResponse } from './delivery-informationpage/DeliveryInformationResponse ';
import { NgForm } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiServerUrl = 'https://localhost:44367';  //backend api call.
  private apiTest = 'https://bb72dd24-0e5e-4a69-8101-aa850e43e0af.mock.pstmn.io';

  constructor(private http: HttpClient) {}
  


  //SuppliersInformation//
  public getSuppliersInformation(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/SupplierInformation/STARTGET/3`)
  }
  public createSuppliersInformation(data:SuppliersInformation): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/SupplierInformation/POST`,data)
  }
  public updateSuppliersInformation(data:SuppliersInformation): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/SuppliersInformation`,data)
  }
  public DeleteSuppliersInformation(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/SuppliersInformation/`+data)
  }

  //Suppliers//
  public getSuppliers(): Observable<SupplierResponse> {
    return this.http.get<SupplierResponse>(`${this.apiServerUrl}/Supplier/GET`)
  }
  public createSuppliers(data:SupplierspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Supplier/POST`,data)
  }
  public updateSuppliers(data:SupplierspageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Suppliers`,data)
  }
  public DeleteSuppliers(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Suppliers/`+data)
  }

  //Employees//
  public getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Employee/STARTGET/1`)
  }
  public createEmployees(data:NgForm): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Employee/POST`,data)
  }
  public updateEmployees(data:EmployeesPageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Employees`,data)
  }
  public DeleteEmployees(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Employees/`+data)
  }

   //Product//
   public getProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Products/STARTGET/1`)
  }
  public createProduct(data:ProductpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Products/POST`,data)
  }
  public updateProduct(data:ProductpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Product`,data)
  }
  public DeleteProduct(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Product/`+data)
  }

  //stock//
  public getstock(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Stock/STARTGET/1`)
  }
  public createstock(data:StockpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Stock/POST`,data)
  }
  public updatestock(data:StockpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/stock`,data)
  }
  public Deletestock(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/stock/`+data)
  }

  //customers//
  public getcustomers(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Customers/GET`)
  }
  // public getcustomers(): Observable<any> {
  //   return this.http.get<any>(`${this.apiTest}/Test3`)
  // }
  public createcustomers(data:CustomerspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Customers/POST`,data)
  }
  public updatecustomers(data:CustomerspageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/Customers`,data)
  }
  public Deletecustomers(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/Customers/`+data)
  }
  
  //delivery-information//
  public getDelivery(): Observable<DeliveryInformationResponse> {
    return this.http.get<DeliveryInformationResponse>(`${this.apiServerUrl}/DeliveryInformation/STARTGET/1`)
  }
  public createDelivery(data:DeliveryInformationpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/DeliveryInformation/POST`,data)
  }
  public updateDelivery(data:DeliveryInformationpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/delivery-information`,data)
  }
  public DeleteDelivery(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/delivery-information/`+data)
  }

  //order-information//
  public getOrderInformation(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/OrderInformation/STARTGET/8`)
  }
  public createOrderInformation(data:OrderInformationpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/OrderInformation/POST`,data)
  }
  public updateOrderInformation(data:OrderInformationpageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/order-information`,data)
  }
  public DeleteOrderInformation(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/order-information/`+data)
  }

  //status//
  public getstatus(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Status/STARTGET/2`)
  }
  public createstatus(data:StatuspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Status/POST`,data)
  }
  public updatestatus(data:StatuspageComponent): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/status`,data)
  }
  public Deletestatus(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/status/`+data)
  }

  public createlogin(data:AuthenticationComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Login/POST`,data)
  }
  /*login
  public createAuth(data:Auth): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Login`,data)
  } */
}
