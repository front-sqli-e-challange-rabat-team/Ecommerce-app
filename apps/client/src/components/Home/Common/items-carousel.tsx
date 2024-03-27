import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { mockProducts } from "../../../mock-data";
import { Product } from "../../../types/Product";

const ItemsCarousel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setProducts(mockProducts);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="carousel carousel-center w-full max-w-full rounded-box py-5">
        {Array.from({ length: mockProducts.length }).map((_, index) => (
          <div
            key={index}
            className="flex carousel-item flex-col w-72 mx-8 mt-7"
          >
            <div className="card w-72 flex flex-col gap-5 rounded-lg">
              <div className="skeleton h-40 w-full"></div>
              <div className="w-full px-3 flex flex-col gap-3">
                <div className="skeleton h-7 w-full"></div>
                <div className="skeleton h-7 w-1/3"></div>
                <div className="skeleton h-7 w-2/3 ml-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center align-center">
        <div className="carousel !gap-10 carousel-center w-full max-w-full rounded-box py-5">
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
