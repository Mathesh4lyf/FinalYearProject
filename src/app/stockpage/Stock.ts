export class Stock{
    value(value: any) {
      throw new Error('Method not implemented.');
    }
    ProductID!: BigInteger | undefined;
    ProductName: string | undefined;
    QuantityAvailable: BigInteger | undefined
    ProductType: string | undefined;
    
}