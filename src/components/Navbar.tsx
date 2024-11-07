import { ShoppingBag } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b h-[50px] flex justify-between items-center">
        <div className="ml-12">
            <h1 className="text-3xl text-primary">m o d e.</h1>
        </div>
        <div className="mr-12">
            <ShoppingBag color="black" />
        </div>
    </nav>
  )
}

export default Navbar