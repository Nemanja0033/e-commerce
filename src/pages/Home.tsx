import Footer from "../components/Footer"
import FeaturedProducts from "../components/home/FeaturedProducts"
import Hero from "../components/home/Hero"
import ImageSlider from "../components/home/ImageSlider"

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default Home