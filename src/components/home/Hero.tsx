import { ArrowDown } from "lucide-react";
import useImagesChanger from "../../custom hooks/useImagechanger";

const Hero = () => {
    const { images, imageIndex } = useImagesChanger();

  return (
    <div className="md:flex flex-row justify-center items-center w-full shadow-md mt-12 ">
      <div className="flex-row md:mt-0 text-center ml-auto">
        <div className="flex justify-center items-center md:m-0 mt-24 md:mt-0">
          <h1 className="md:text-5xl text-3xl text-primary text-center">
            Discover the Art of Fashion with <span className="font-semibold">m o d e</span>
          </h1>
        </div>
        <div className="mt-3">
            <p className="text-gray-400 md:text-xl text-md tracking-widest text-center">`New collecion is out now` </p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <a href="#featured" className="text-xl flex items-center">Explore Collections <ArrowDown /></a>
        </div>
       
      </div>
      <div className= "md:mt-12 mt-20  flex justify-center relative m-auto h-[450px] w-[300px] mb-12">
        {images.map((img: any, i) => (
          <img
            key={i}
            className={`h-full w-full object-cover absolute transition-opacity duration-1000 ease-in-out ${i === imageIndex ? 'opacity-100' : 'opacity-0'}`}
            src={img}
            alt={`Fashionable ${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
