import HeroCarousal from "../components/HeroCarousal";
import NewArrivals from "../components/NewArivals";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <HeroCarousal />
      <SearchBar />
      <NewArrivals />
    </div>
  );
};

export default Home;
