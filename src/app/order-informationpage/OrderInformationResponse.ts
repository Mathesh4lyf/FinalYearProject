import { OrderInformation } from "./order-information";
// import { OrderInformationpageComponent } from "./order-informationpage.component";

export interface OrderInformationResponse{
    
    RESPONSECODE: string 
    RESPONSEMESSAGE: string 
    DATA:  OrderInformation [] ;
    
}