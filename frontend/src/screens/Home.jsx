import { Box } from "@mui/material";
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
      <Box component={"div"} maxWidth={"1550px"} sx={{ mx: "auto" }}>
        <SearchBar />
        <NewArrivals />
        <PopularBooks />
        <FeaturedBooks />
        <FavouriteAuthors />
        <BookDeals />
        <LatestNews />
      </Box>
    </div>
  );
};

export default Home;
