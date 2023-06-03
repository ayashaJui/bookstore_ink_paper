import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import FeatureCard from "./FeatureCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFeaturedBooks } from "../actions/bookActions";

const FeaturedBooks = () => {
  const dispatch = useDispatch();

  const { featuredBooks } = useSelector((state) => state.featuredBookList);
  const { featured } = featuredBooks;
  // console.log(featured);

  useEffect(() => {
    dispatch(getFeaturedBooks());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 2,
  };

  return (
    <Box component="div" sx={{ mb: 3, mt: 4, mx: 4 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "left",
          fontFamily: "Nunito",
          my: 3,
          color: "#272643",
        }}
      >
        Featured in this Month
      </Typography>
      <Paper elevation={3}>
        <Slider {...settings}>
          {featured &&
            featured.map((book) => <FeatureCard book={book} key={book._id} />)}
          {/* <FeatureCard />
          <FeatureCard />
          <FeatureCard /> */}
        </Slider>
      </Paper>
    </Box>
  );
};

export default FeaturedBooks;
