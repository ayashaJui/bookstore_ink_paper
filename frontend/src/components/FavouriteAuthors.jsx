import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useEffect } from "react";

import Slider from "react-slick";
import { getFavoriteAuthors } from "../actions/authorActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";

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

const FavouriteAuthors = () => {
  const dispatch = useDispatch();

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const { favoriteAuthors, loading, error } = useSelector(
    (state) => state.favoriteAuthorList
  );

  useEffect(() => {
    dispatch(getFavoriteAuthors());
  }, [dispatch]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Box component="div" sx={{ mt: 15, mx: 4, mb: 14 }}>
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item sm={6}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "left",
              fontFamily: "Nunito",
              my: 3,
              color: "#272643",
            }}
          >
            Favorite Authors
          </Typography>
        </Grid>
        <Grid item sm={6} container justifyContent="flex-end">
          <Button
            component={Link}
            size="large"
            to="/authors"
            sx={{ my: 3, py: 0, px: 3, color: "#272643", fontWeight: " bold" }}
          >
            View All
          </Button>
        </Grid>
      </Grid>

      <Slider {...settings}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error" title="Error">
            {error}
          </Message>
        ) : (
          // favoriteAuthors &&
          favoriteAuthors.map(({ _id, authorInfo, totalBooks }) => (
            <MuiLink
              key={_id}
              component={Link}
              to={`/author/${_id}/profile`}
              sx={{ textDecoration: "none", color: "#000" }}
            >
              <Avatar
                alt={authorInfo.name}
                src={`${baseUrl + authorInfo.image}`}
                sx={{ width: 150, height: 150, mb: 3, mx: "auto" }}
              />
              <Typography
                variant="h6"
                sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
              >
                {authorInfo.name}
              </Typography>
              <Typography
                variant="subtitle"
                sx={{ color: "#9B908A", fontSize: "17px" }}
              >
                {totalBooks} Published Books
              </Typography>
            </MuiLink>
          ))
        )}
      </Slider>
    </Box>
  );
};

export default FavouriteAuthors;
