import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";

export const Cart = () => {
  // TODO - fetch products from the cart store
  const products = useSelector((store) => store.cart.items);

  // TODO - calculate total from the sum of all products in the cart
  const totalPrice = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.price * item.qty, 0)
  );

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">
          🛒
        </span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
