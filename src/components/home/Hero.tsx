import { Button } from "@mui/material";
import useImagesChanger from "../../custom hooks/useImagechanger";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    
    const { images, imageIndex } = useImagesChanger();

  return (
    <div className="md:flex flex-row justify-center items-center w-full gap-8">
      <div className="flex-row md:mt-0 text-center">
        <div className="flex justify-center items-center m-6 md:m-0 mt-24 md:mt-0">
          <h1 className="md:text-5xl text-3xl text-primary text-center">
            Discover the Art of Fashion with <span className="font-semibold">m o d e</span>
          </h1>
        </div>
        <div className="mt-3">
            <p className="text-gray-400 md:text-xl text-md tracking-widest text-center">New collecion is out now </p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Button variant="outlined" color="secondary" size="small">
            Explore Collection <ArrowDown />
          </Button>
        </div>
      </div>
      <div className= "mt-8 flex justify-center relative m-4 h-[550px] w-[400px]">
        {images.map((img: any, i) => (
          <img
            key={i}
            className={`h-full w-full rounded-xl object-cover absolute transition-opacity duration-1000 ease-in-out ${i === imageIndex ? 'opacity-100' : 'opacity-0'}`}
            src={img}
            alt={`Fashionable ${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
