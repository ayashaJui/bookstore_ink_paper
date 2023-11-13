import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "./BookCard";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { useDispatch, useSelector } from "react-redux";
import { getPopularBooks } from "../actions/bookActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#2c698d",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#2c698d",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const PopularBooks = () => {
  const dispatch = useDispatch();

  const { popularBooks, loading, error } = useSelector(
    (state) => state.popularBookList
  );

  useEffect(() => {
    dispatch(getPopularBooks());
  }, [dispatch]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        },
      },

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

      <Box component="div">
        <Slider {...settings}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message severity="error" title="Error">
              {error}
            </Message>
          ) : (
            
            popularBooks.map((book, idx) => (
              <BookCard
                mediaHeight="280"
                cardColor="#e3f6f5"
                cardMargin="6px"
                book={book}
                key={idx}
              />
            ))
          )}
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
