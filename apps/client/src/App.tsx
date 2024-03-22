import ProductCard from "./components/product-card";

function App() {
  const products = [{
    id: 1,
    imageUrl: "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-130969.jpg",
    name: "Gucci duffle bag",
    discountRate: 50,
    originalPrice: 1160,
    rating: 4.5,
    reviewCount: 65,
  }];

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product : any) => (
            <ProductCard
              imageUrl={product.imageUrl}
              name={product.name}
              discountRate={product.discountRate}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
