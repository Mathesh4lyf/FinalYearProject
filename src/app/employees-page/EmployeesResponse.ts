import { Employees } from "./employees";

export interface EmployeesResponse{
    
    RESPONSECODE: string 
    RESPONSEMESSAGE: string 
    DATA: Employees []  ;
    
}