import { useState } from "react";
import useFetch from "../../custom hooks/useFetch";
import ProductCard from "../_productsCard/ProductsCard";

const Products = () => {
    const { data } = useFetch('https://fakestoreapi.com/products?limit=7')

    return(
        <div className="md:flex flex-row m-auto">
            {data.map((product: { title: string; price: string; id: string; image: string; }) => (
                <ProductCard title={product.title}
                             price={product.price}
                             id={product.id}
                             image={product.image}
                             />
            ))}
        </div>
    )
}

const FilterSearch = () => {
  const { data } = useFetch('https://fakestoreapi.com/products/categories');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const getCategory = async (category: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const products = await response.json();
    setFilteredProducts(products);
  };

  return (
    <div className="flex flex-col items-center w-full mt-32 ">
      <div className="flex justify-center mb-4">
        {data && data.map((category: string) => (
          <button
            key={category}
            onClick={() => getCategory(category)}
            className="w-[20vw] text-primary bg-white border border-gray-100 mx-2 p-2 hover:bg-gray-200 transition"
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className='md:flex flex-row m-auto'>
      {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              id={product.id} 
            />
          ))
        ) : (
          <Products />
        )}
      </div>
    </div>
  );
};

export default FilterSearch;
