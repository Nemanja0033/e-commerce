import { Button } from "@mui/material"

const Hero = () => {

  return (
    <div className="md:flex flex-row justify-center items-center w-full gap-8">
        <div className="flex-row md:mt-0  text-center">
                <div className="flex justify-center items-center m-6 md:m-0">
                <h1 className="text-4xl text-primary">Discover the Art of Fashion with <span className="font-semibold">m o d e</span></h1>
                </div>
                <div className="flex justify-center items-center mt-3">
                    <Button variant="outlined"  color="secondary" size="small">Explore Collection</Button>
                </div>
        </div>
        <div className="mt-8 flex justify-center">
            <img className="h-[550px] rounded-xl" src="https://images.pexels.com/photos/15376545/pexels-photo-15376545/free-photo-of-elegant-woman-wearing-sunglasses-and-handbag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div> 
    </div>
   )
}

export default Hero