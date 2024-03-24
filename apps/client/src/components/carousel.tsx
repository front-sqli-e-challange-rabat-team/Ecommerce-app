import ProductCard from "./product-card";

const Carousel = () => {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-130969.jpg",
      name: "White Sneakers",
      discountRate: 50,
      originalPrice: 1160,
      rating: 3,
      reviewCount: 65,
    },
    {
      id: 2,
      imageUrl:
        "https://img.freepik.com/free-photo/handbag-isolated_1203-7955.jpg",
      name: "Elegant Handbag",
      discountRate: 30,
      originalPrice: 249.99,
      rating: 4.5,
      reviewCount: 89,
    },
    {
      id: 3,
      imageUrl:
        "https://img.freepik.com/free-photo/blue-jeans-isolated_1203-7954.jpg",
      name: "Classic Blue Jeans",
      discountRate: null,
      originalPrice: 79.99,
      rating: 4,
      reviewCount: 34,
    },
    {
      id: 4,
      imageUrl:
        "https://img.freepik.com/free-photo/black-leather-boots-isolated_1203-7967.jpg",
      name: "Leather Boots",
      discountRate: 20,
      originalPrice: 150,
      rating: 4.8,
      reviewCount: 78,
    },
    {
      id: 5,
      imageUrl:
        "https://img.freepik.com/free-photo/sunglasses-isolated_1203-7696.jpg",
      name: "Aviator Sunglasses",
      discountRate: 15,
      originalPrice: 85,
      rating: 3.5,
      reviewCount: 43,
    },
  ];

  return (
    <div className="carousel carousel-center w-full max-w-full p-4 space-x-4 rounded-box">
        {products.map((product: any) => (
          <div className="carousel-item">
            <ProductCard
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
  );
};

export default Carousel;
