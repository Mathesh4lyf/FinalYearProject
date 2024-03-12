import { Suppliers } from "./suppliers";

export interface SupplierResponse{
    
    RESPONSECODE: string 
    RESPONSEMESSAGE: string 
    DATA: Suppliers[]  ;
    
}