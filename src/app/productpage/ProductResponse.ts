import { Product } from "./products";

export interface ProductResponse{
    
    RESPONSECODE: string 
    RESPONSEMESSAGE: string 
    DATA: Product []  ;
    
}