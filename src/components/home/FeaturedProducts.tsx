import useFetch from "../../custom hooks/useFetch"
import ProductCard from "../_productsCard/ProductsCard"

export const FeaturedMensProducts = () => {
    const { data } = useFetch(`https://fakestoreapi.com/products/category/men's clothing`)

    return(
        <div className="mt-8">
        <div className="md:ml-6 md:flex flex-row m-auto justify-center">
        {data.map((item: { id: number; title: string; price: number; image: string }) => (
            <ProductCard 
                         key={item.id}
                         title={item.title}
                         price={item.price}
                         id={item.id}
                         image={item.image} />
        ))}
        </div>
    </div>
    )
}


const FeaturedProducts = () => {
    const { data } = useFetch(`https://fakestoreapi.com/products/category/women's clothing`)

  return (
    <div id="featured" className="w-full flex-row m-auto mt-12">
        <div className="w-full flex-row m-auto mt-6">
            <div>
                <h1 className="text-primary text-2xl md:ml-12">Featured Collections</h1>
            </div>
            <div>
                <h1 className="text-gray-200 text-xl md:ml-12 text-center">For Her</h1>
            </div>
            <div>
                <div className="md:ml-6 md:flex flex-row m-auto justify-center">
                {data.map((item: { id: number; title: string; price: number; image: string }) => (
                    <ProductCard
                                 key={item.id}
                                 title={item.title}
                                 price={item.price}
                                 id={item.id}
                                 image={item.image} />
                ))}
                </div>
            </div>
            <div>
                <h1 className="text-gray-200 text-xl md:ml-12 text-center">For Him</h1>
            </div>
            <FeaturedMensProducts />
        </div>
    </div>
  )
}

export default FeaturedProducts