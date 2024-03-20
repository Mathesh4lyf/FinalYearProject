// import { Delivery } from "./employees";

import { Stock } from "./Stock";

export interface StockResponse{
    
    RESPONSECODE: string 
    RESPONSEMESSAGE: string 
    DATA: Stock[]  ;
    
}