import { Link } from "react-router-dom";
import { ProductCardProps } from "../../type/ProductCardProps";

const ProductCard: React.FC<ProductCardProps> = ({ title, id, image, price }) => {
  return (
    <div className="scale-90 flex flex-col border border-gray-100  p-4 h-[350px] w-full md:w-1/3 lg:w-1/4 m-2 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`} className="flex-grow">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-600">${price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
