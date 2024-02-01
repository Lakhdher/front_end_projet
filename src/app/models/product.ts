export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public originalPrice: number,
    public description: string,
    public images: string[] | undefined,
    public stock: number | undefined,
    public category: string | undefined,
    public brand: string | undefined,
    public rating: number | undefined,
    public colors: string [] | undefined,
    public specs: {
      type: string | null;
      numberOfKeys: number;
      keyCaps: string;
      illumination: string;
      buttons: number;
      resolution: string;
      headSupport: string;
      size: string;
      upholstery: string;
      material: string;
      connectivity: string;
    }
  ) {
  }
}
