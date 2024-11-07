import { ShoppingBag, UserIcon } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="w-full bg-black  h-[50px] flex justify-between items-center">
        <div className="md:ml-12 ml-8">
            <h1 className="text-3xl text-white cursor-pointer">m o d e.</h1>
        </div>
        <div className="md:mr-12 mr-8 flex gap-8">
            <ShoppingBag className="cursor-pointer" color="white" />
            <UserIcon  className="cursor-pointer" color="white" />
        </div>
    </nav>
  )
}

export default Navbar