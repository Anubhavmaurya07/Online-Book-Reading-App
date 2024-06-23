import Banner from "../components/Banner"
import BestSellerBook from "../components/BestSellerBook"
import FavBook from "../components/FavBook"
import OtherBook from "../components/OtherBook"
import PromoBanner from "../components/PromoBanner"
import Review from "../components/Review"

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBook />
      <FavBook />
      <PromoBanner />
      <OtherBook />
      <Review />
    </div>
  )
}

export default Home