import { useParams } from "react-router-dom";
import useFetch from "../custom hooks/useFetch";
import { useCart } from '../context/cart/CartContext';

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: data });
  };

  console.log(data);

  return (
    <div className="w-full md:flex flex-row justify-center items-center mt-12 gap-4">
      <div className="md:w-1/3 w-full md:m-0 m-auto md:h-[70vh] h-[60vh] md:mt-20 mt-32">
        <img src={data.image} className="w-full h-full" alt={data.title} />
      </div>

      <div className="md:w-1/2 w-full md:mt-12 mt-12 flex-row">
        <div className="flex justify-center">
          <h1 className="text-3xl text-center">{data.title}</h1>
        </div>
        <div className="flex justify-center mt-6">
          <h1 className="md:text-md text-center text-gray-400">{data.description}</h1>
        </div>
        <div className="flex justify-center mt-6">
          <a href="#" className="text-xl flex items-center text-primary" onClick={addToCart}>
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
