import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import FeatureCard from "./FeatureCard";

const FeaturedBooks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
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
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </Slider>
      </Paper>
    </Box>
  );
};

export default FeaturedBooks;
