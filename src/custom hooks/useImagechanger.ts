import { useEffect, useState } from "react";

const useImagesChanger = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
      "https://images.pexels.com/photos/15376545/pexels-photo-15376545/free-photo-of-elegant-woman-wearing-sunglasses-and-handbag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/27545223/pexels-photo-27545223/free-photo-of-model-in-sweater-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/27496360/pexels-photo-27496360/free-photo-of-a-black-and-white-photo-of-a-woman-with-long-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/26599739/pexels-photo-26599739/free-photo-of-mans-profile-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);  
    }, [images.length]);

    return {images, imageIndex}
}

export default  useImagesChanger