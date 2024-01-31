export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public imageUrl: string | undefined,
    public stock: number | undefined,
    public category: string | undefined,
    public brand: string | undefined,
    public rating: number | undefined,
    public discount: number | undefined,
    public color: string| undefined,
  ) {
  }


}
