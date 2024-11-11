import useImagesChanger from "../../custom hooks/useImagechanger";

const ImageSlider = () => {
  const { images, imageIndex, setImageIndex } = useImagesChanger();

  return (
    <div className="w-full flex flex-col items-center mt-24 mb-24">
      <h2 className="text-3xl mb-8">mode models</h2>
      <div className="relative w-full max-w-6xl h-[500px]">
        <div className="relative h-full flex justify-center items-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 md:w-1/2 w-full h-[500px] object-cover transition-opacity duration-1000 ease-in-out ${imageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 1s ease-in-out' }}
            />
          ))}
        </div>
        <button
          onClick={() => setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={() => setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
