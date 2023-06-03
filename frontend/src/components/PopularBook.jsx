import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { getPopularBooks } from "../actions/bookActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PopularBooks = () => {
  const dispatch = useDispatch();

  const { popularBooks } = useSelector((state) => state.popularBookList);
  const { popular } = popularBooks;

  useEffect(() => {
    dispatch(getPopularBooks());
  }, [dispatch]);

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
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 3,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box component="div" sx={{ mx: 1, my: 2 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Nunito",
          my: 3,
          mx: 4,
          color: "#272643",
          textAlign: "left",
        }}
      >
        Popular Books
      </Typography>

      <Box
        component="div"
        // sx={{ py: 4, boxShadow: "0px 9px 11px 0px rgba(0,0,0,0.43)" }}
      >
        <Slider {...settings}>
          {popular &&
            popular.map((book, idx) => (
              <BookCard
                mediaHeight="280"
                cardColor="#e3f6f5"
                cardMargin="6px"
                book={book}
                key={idx}
              />
            ))}

          {/* <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" />
          <BookCard mediaHeight="300" cardMargin="6px" /> */}
        </Slider>
      </Box>

      <Button
        component={Link}
        variant="contained"
        to="/shop/?sort=popular"
        size="large"
        sx={{ my: 5, bgcolor: "#2c698d" }}
      >
        View All
      </Button>
    </Box>
  );
};

export default PopularBooks;
