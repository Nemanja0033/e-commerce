import { useCart } from '../../context/cart/CartContext';

const CartContent = () => {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce((total: number, product: { price: number }) => total + product.price, 0);

  return (
    <div className="w-full mt-20 text-center">
      {cart.length === 0 ? (
        <div className='md:mt-32 mt-72'>
        <p className='md:text-md text-xl'>Your cart is empty</p>
        <p>. . .</p>
        <button className='mt-3 md:text-xl text-3xl'>Keep Shopping</button>
        </div>
      ) : (
        cart.map((product: { id: number; title: string; price: number; image: string }) => (
          <>
          <div key={product.id} className="flex justify-between border h-[100px] items-center">
           <div className='w-full h-[80px] bg-white mt-3 flex justify-evenly'>
            <img className='' src={product.image} />
            <h1 className='text-primary font-semibold text-center'>{product.title}</h1>
            <h1 className='text-primary font-semibold text-center'>{product.price}$</h1>
           </div>
          </div>
          <h3 className='text-xl'>Total: ${totalPrice.toFixed(2)}</h3>
          <button className='text-md' onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
          </>
        ))
      )}
    </div>
  );
};

export default CartContent;
