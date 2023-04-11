import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "./BookCard";

const PopularBooks = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box component="div" sx={{ mx: 1 , my: 2}}>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Roboto", my: 3, mx: 4, color: "#272643", textAlign: 'left' }}
      >
        Popular Books
      </Typography>

      <Box
        component="div"
        sx={{ boxShadow: "0px 9px 11px 0px rgba(0,0,0,0.43)" }}
      >
        <Slider {...settings}>
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
        </Slider>
      </Box>

      <Button
        variant="contained"
        href="/popular_books"
        size="large"
        sx={{ my: 5, bgcolor: "#2c698d" }}
      >
        View All
      </Button>
    </Box>
  );
};

export default PopularBooks;
