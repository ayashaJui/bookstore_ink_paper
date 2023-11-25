import { Box } from "@mui/material";
import BookDeals from "../components/BookDeals";
import FavouriteAuthors from "../components/FavouriteAuthors";
import FeaturedBooks from "../components/FeaturedBooks";
import HeroCarousal from "../components/HeroCarousal";
import LatestNews from "../components/LatestNews";
import NewArrivals from "../components/NewArivals";
import PopularBooks from "../components/PopularBook";
import Navbar from "../layouts/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousal />
      <Box component={"div"} maxWidth={"1550px"} sx={{ mx: "auto" }}>
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
