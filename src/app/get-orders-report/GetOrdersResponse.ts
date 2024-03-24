import { getorders} from "./get-orders";

export interface GetOrdersResponse{
    
    RESPONSECODE: string 
    RESPONSEMESSAGE: string 
    DATA: getorders []  ;
    
}