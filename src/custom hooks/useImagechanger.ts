import { useEffect, useState } from "react";
import { Link1, Link2, Link3, Link4 } from "../utils/ImageLinks";


const useImagesChanger = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
      Link1,
      Link2,
      Link3,
      Link4,
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