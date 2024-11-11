import Footer from "../components/Footer"
import FeaturedProducts from "../components/home/FeaturedProducts"
import Hero from "../components/home/Hero"
import ImageSlider from "../components/home/ImageSlider"
import SocialLinks from "../components/home/SocialLinks"

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ImageSlider />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default Home