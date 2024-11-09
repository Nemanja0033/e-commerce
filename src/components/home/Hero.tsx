import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center w-full shadow-md h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-center relative z-10">
        <h1 className="md:text-5xl text-3xl text-white">
          Discover the Art of Fashion with <span className="font-semibold">m o d e</span>
        </h1>
        <p className="text-gray-400 md:text-xl text-md tracking-widest mt-3">
          New collection is out now
        </p>
        <div className="flex justify-center items-center mt-6">
          <a href="#featured" className="text-xl flex items-center text-white">
            Explore Collections <ArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
