// Product.ts
export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  discountRate: number | null; // Reflecting that discountRate can be null
  originalPrice: number;
  rating: number;
  reviewCount: number;
}
