import { ShoppingBag, UserIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-50  h-[50px] flex justify-between items-center">
        <div className="md:ml-12 ml-8">
            <Link to={'/'}>
                <h1 className="md:text-3xl text-xl text-primary cursor-pointer">m o d e.</h1>
            </Link>
        </div>
        <div className="md:mr-12 mr-8 flex gap-8">
            <Link to={'/products'}>
                <span className="text-primary md:text-md text-sm">Products</span>
            </Link>
            <Link to={'/cart'}>
            <ShoppingBag className="cursor-pointer" color="black" />
            </Link>
            <Link to={'/register'}>
                <UserIcon  className="cursor-pointer" color="black" />
            </Link> 
        </div>
    </nav>
  )
}

export default Navbar