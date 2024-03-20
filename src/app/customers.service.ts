import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuppliersInformation } from './suppliers-informationpage/suppliers-information';
import { SupplierspageComponent } from './supplierspage/supplierspage.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { StockpageComponent } from './stockpage/stockpage.component';
import { CustomerspageComponent } from './customerspage/customerspage.component';
// import { DeliveryInformationpageComponent } from './delivery-informationpage/delivery-informationpage.component';
import { OrderInformationpageComponent } from './order-informationpage/order-informationpage.component';
import { StatuspageComponent } from './statuspage/statuspage.component';
import { SupplierResponse } from './supplierspage/supplierresponse';
// import { DeliveryInformationResponse } from './delivery-informationpage/DeliveryInformationResponse ';
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
    return this.http.get<any>(`${this.apiServerUrl}/SupplierInformation/GET`)
  }
  public createSuppliersInformation(data:SuppliersInformation): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/SupplierInformation/POST`,data)
  }
  public updateSuppliersInformation(data:SuppliersInformation): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/SupplierInformation/Update`,data)
  }
  public DeleteSuppliersInformation(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/SupplierInformation/Delete`,data)
  }

  //Suppliers//
  public getSuppliers(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Supplier/GET`)
  }
  public createSuppliers(data:SupplierspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Supplier/POST`,data)
  }
  public updateSuppliers(data:SupplierspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Supplier/Update`,data)
  }
  public DeleteSuppliers(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Supplier/Delete`,data)
  }

  //Employees//
  public getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Employee/GET`)
  }
  public createEmployees(data:NgForm): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Employee/POST`,data)
  }
  public updateEmployees(data:EmployeesPageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Employee/Update`,data)
  }
  public DeleteEmployees(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Employee/Delete`,data)
  }

   //Product//
   public getProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Products/GET`)
  }
  public createProduct(data:ProductpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Products/POST`,data)
  }
  public updateProduct(data:ProductpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Products/Update`,data)
  }
  public DeleteProduct(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Products/Delete`,data)
  }

  //stock//
  public getstock(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Stock/GET`)
  }
  public createstock(data:StockpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Stock/POST`,data)
  }
  public updatestock(data:StockpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Stock/Update`,data)
  }
  public Deletestock(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Stock/Delete`,data)
  }

  //customers//
  public getcustomers(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Customers/GET`)
  }
  // public getcustomers(): Observable<any> {
  //   return this.http.get<any>(`${this.apiTest}/Test3`)
  // }
  public createcustomers(data:NgForm): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Customers/POST`,data)
  }
  public updatecustomers(data:CustomerspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Customers/Update`,data)
  }
  public Deletecustomers(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Customers/Delete`,data)
  }
  
  //delivery-information//
  // public getDelivery(): Observable<DeliveryInformationResponse> {
  //   return this.http.get<DeliveryInformationResponse>(`${this.apiServerUrl}/DeliveryInformation/GET`)
  // }
  // public createDelivery(data:DeliveryInformationpageComponent): Observable<any> {
  //   return this.http.post<any>(`${this.apiServerUrl}/DeliveryInformation/POST`,data)
  // }
  // public updateDelivery(data:DeliveryInformationpageComponent): Observable<any> {
  //   return this.http.post<any>(`${this.apiServerUrl}/DeliveryInformation/Update`,data)
  // }
  // public DeleteDelivery(data:any): Observable<any> {
  //   return this.http.delete<any>(`${this.apiServerUrl}/delivery-information/`+data)
  // }

  //order-information//
  public getOrderInformation(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/OrderInformation/GET`)
  }
  public createOrderInformation(data:OrderInformationpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/OrderInformation/POST`,data)
  }
  public updateOrderInformation(data:OrderInformationpageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/OrderInformation/Update`,data)
  }
  public DeleteOrderInformation(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/OrderInformation/Delete`,data)
  }

  //status//
  public getstatus(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/Status/GET`)
  }
  public createstatus(data:StatuspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Status/POST`,data)
  }
  public updatestatus(data:StatuspageComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Status/Update`,data)
  }
  public Deletestatus(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Status/Delete`,data)
  }

  public createlogin(data:AuthenticationComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Login/POST`,data)
  }
  public createregister(data:AuthenticationComponent): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Registration/POST`,data)
  }
  /*login
  public createAuth(data:Auth): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/Login`,data)
  } */
}
