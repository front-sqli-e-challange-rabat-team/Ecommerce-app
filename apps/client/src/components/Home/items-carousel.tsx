import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { mockProducts } from "../../mock-data";
import { Product } from "../../types/Product";

const ItemsCarousel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setIsLoading(false);
      setProducts(mockProducts); // mockProducts is now typed correctly
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="carousel carousel-center w-full max-w-full rounded-box">
        {Array.from({ length: mockProducts.length }).map((_, index) => (
          <div
            key={index}
            className="flex carousel-item flex-col gap-4 w-52 scale-125 mx-8 mt-7"
          >
            <div className="skeleton h-32 w-full bg-gray-300"></div>
            <div className="skeleton h-4 w-28 bg-gray-300"></div>
            <div className="skeleton h-4 w-full bg-gray-300"></div>
            <div className="skeleton h-4 w-full bg-gray-300"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center align-center">
        <div className="carousel carousel-center w-full max-w-full rounded-box">
          {products.map((product: any) => (
            <div key={product.id} className="carousel-item">
              <ProductCard
                id={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                discountRate={product.discountRate}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            </div>
          ))}
        </div>
    </div>
  );
};

export default ItemsCarousel;
