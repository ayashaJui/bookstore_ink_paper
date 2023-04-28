import BookDeals from "../components/BookDeals";
import FavouriteAuthors from "../components/FavouriteAuthors";
import FeaturedBooks from "../components/FeaturedBooks";
import HeroCarousal from "../components/HeroCarousal";
import LatestNews from "../components/LatestNews";
import NewArrivals from "../components/NewArivals";
import PopularBooks from "../components/PopularBook";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <HeroCarousal />
      <SearchBar />
      <NewArrivals />
      <PopularBooks />
      <FeaturedBooks />
      <FavouriteAuthors />
      <BookDeals />
      <LatestNews />
    </div>
  );
};

export default Home;
