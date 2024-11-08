import { Button } from "@mui/material";
import useImagesChanger from "../../custom hooks/useImagechanger";

const Hero = () => {
    
    const { images, imageIndex } = useImagesChanger();

  return (
    <div className="md:flex flex-row justify-center items-center w-full gap-8">
      <div className="flex-row md:mt-0 text-center">
        <div className="flex justify-center items-center m-6 md:m-0">
          <h1 className="text-4xl text-primary">
            Discover the Art of Fashion with <span className="font-semibold">m o d e</span>
          </h1>
        </div>
        <div className="flex justify-center items-center mt-3">
          <Button variant="outlined" color="secondary" size="small">
            Explore Collection
          </Button>
        </div>
      </div>
      <div className="mt-8 flex justify-center relative h-[550px] w-[400px]">
        {images.map((img, i) => (
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
