import Brands from "./_components/Brands";
import Fashon from "./_components/Fashion";
import Footer from "./_components/Footer";
import Highlights from "./_components/Highlights";
import Navbar from "./_components/Navbar";
import ProductCheck from "./_components/ProductCheck";
import Reviews from "./_components/Reviews";
import ShopeLook from "./_components/ShopeLook";
import SocialMedia from "./_components/SocialMedia";
import VideoPlayer from "./_components/VideoPlayer";
import CallToAction from "./pages/CallToAction";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <HomePage />
      <Highlights />
      <Products />
      <Fashon />
      <Brands />
      <ProductCheck />
      <VideoPlayer />
      <ShopeLook />
      <Reviews />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
