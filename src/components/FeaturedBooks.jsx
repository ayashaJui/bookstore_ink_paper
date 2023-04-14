import { Button, Grid, Paper, Typography } from "@mui/material";
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
    <Box component="div" sx={{ my: 3, mx: 4 }}>
      <Grid container spacing={3} sx={{}}>
        <Grid item sm={6}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "left",
              fontFamily: "Roboto",
              my: 3,
              color: "#272643",
            }}
          >
            Featured in this Month
          </Typography>
        </Grid>
        <Grid item sm={6} container justifyContent="flex-end">
          <Button
            size="large"
            href="/featured"
            sx={{ my: 3, py: 0, px: 3, color: "#272643", fontWeight: " bold" }}
          >
            View All
          </Button>
        </Grid>
      </Grid>
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
