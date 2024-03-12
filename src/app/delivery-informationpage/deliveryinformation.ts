export interface Delivery{
    CustomerName: string;
    ProductID: BigInteger;
    ProductName: string;
    Quantity: BigInteger;
    AmountPaid: string;
    DateOfDelivery: Date;
    DelivererID: BigInteger | undefined;
    DelivererName: string;
    Status: string;
    FailedReason: string;
}