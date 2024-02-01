export class User {
  constructor(
    private id: number,
    private username: string,
    private lastName: string,
    private email: string,
    private password: string,
    private role: string,
    private address: string,
    private city: string,
    private country: string,
    private postalCode: string,
    private phone: string,
    private imageUrl: string | undefined,
    private access_token: string | undefined,
  ) {
  }
}
