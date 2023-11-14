export interface ProductDB {
  id: string;
  name: string;
  price: number;
  stock: number;
  image_url: string;
  rating: number;
}

export interface RatingDB {
  product_id: string;
  stars: number;
}

export interface ProductModel{
  id: string;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
  rating: number;
}

export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private stock: number,
    private imageUrl: string,
    private rating: number
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(value: string): void {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(value: number): void {
    this.price = value;
  }

  public getStock(): number {
    return this.stock;
  }

  public setStock(value: number): void {
    this.stock = value;
  }

  public getImageUrl(): string {
    return this.imageUrl;
  }

  public setImageUrl(value: string): void {
    this.imageUrl = value;
  }

  public getRating(): number {
    return this.rating;
  }

  public setRating(value: number): void {
    this.rating = value;
  }
}
