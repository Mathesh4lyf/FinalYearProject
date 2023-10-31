export class SuppliersInformation{
    ReceivalID! : BigInteger;
    SupplierID!: Number;
    SupplierName: string | undefined;
    ProductID! : BigInteger;
    ProductName :string | undefined;
    Quantity! : BigInteger;
    AmountPaid! : string;
    Receivedby! : string;
    Status! : string;
    DateofReceival! : Date;
}