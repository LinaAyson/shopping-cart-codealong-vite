import { Product } from "./Product";
import { useSelector } from "react-redux";

export const Products = () => {
  // TODO - fetch all products from the store
  const allProducts = useSelector((store) => store.products);

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
