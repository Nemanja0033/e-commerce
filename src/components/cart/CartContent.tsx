import { useCart } from '../../context/cart/CartContext';
import ProductCard from '../_productsCard/ProductsCard';

const CartContent = () => {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce((total: number, product: { price: number }) => total + product.price, 0);

  return (
    <div className="w-full mt-20">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product: { id: number; title: string; price: number; image: string }) => (
          <div key={product.id} className="cart-item">
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
    </div>
  );
};

export default CartContent;
