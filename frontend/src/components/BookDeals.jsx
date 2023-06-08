import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSaleBooks } from "../actions/bookActions";
import { addToFavorite, removeFromFavorite } from "../actions/favoriteActions";

import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { makeOfferPrice } from "../helper/helperFunction";

const BookDeals = () => {
  const dispatch = useDispatch();

  const { saleBooks, loading, error } = useSelector(
    (state) => state.saleBookList
  );
  const { sales } = saleBooks;

  const { cartItems } = useSelector((state) => state.cart);
  const { favoriteItems } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(getSaleBooks());
  }, [dispatch]);

  return (
    <Box component="div" sx={{ mx: 4, mb: 10 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 7,
          mb: 4,
          fontFamily: "Nunito",
          color: "#272643",
          textAlign: "left",
        }}
      >
        Books With Offer
      </Typography>

      <Grid container spacing={3}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error" title="Error">
            {error}
          </Message>
        ) : (
          sales.map(
            ({ _id, image, title, format, price, author, offer }, idx) => (
              <Grid item md={3} sm={6} xs={false} key={idx}>
                <Card
                  sx={{
                    bgcolor: "#e3f6f5",
                    boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.48)",
                    height: "480px",
                    maxWidth: 320,
                  }}
                >
                  <CardActionArea sx={{ height: "480px" }}>
                    <CardMedia
                      component="img"
                      height={300}
                      image={`/${image}`}
                      alt={title}
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        variant="caption"
                        component="div"
                        color="error"
                      >
                        {format.slice(0, -1).join(", ") +
                          (format.length > 1 ? ", " : "") +
                          format[format.length - 1]}
                      </Typography>
                      <Typography variant="h6" sx={{ my: 0.5 }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by {author.map((val) => val.name).join(", ")}
                      </Typography>
                      <Grid container spacing={2} sx={{}}>
                        <Grid item md={6} sx={{ mt: 2 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textDecoration: "line-through",
                              color: "#9B908A",
                              fontSize: "15px",
                            }}
                          >
                            BDT {price[0]}
                          </Typography>
                        </Grid>
                        <Grid item md={6} sx={{ mt: 2 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontSize: "16px" }}
                          >
                            BDT {makeOfferPrice(offer, price[0])}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Box
                      component="div"
                      sx={{
                        backgroundColor: "rgba(39, 38, 67, 0.5)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Button
                        component={Link}
                        size="large"
                        to={`/book/${_id}/details`}
                        sx={{ color: "#e3f6f5", my: 2 }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "#2c698d",
                            "&:hover": { bgcolor: "#1565C0" },
                          }}
                        >
                          <ReadMoreIcon />
                        </Avatar>
                      </Button>

                      <Button
                        component={Link}
                        size="large"
                        to={`/cart/${_id}`}
                        sx={{ color: "#e3f6f5", my: 2 }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "#2c698d",
                            "&:hover": { bgcolor: "#1565C0" },
                          }}
                        >
                          {cartItems.find((item) => item.book === _id) ? (
                            <ShoppingCartIcon />
                          ) : (
                            <ShoppingCartOutlinedIcon />
                          )}
                        </Avatar>
                      </Button>
                      {favoriteItems.find((item) => item.book === _id) ? (
                        <Button
                          component={Link}
                          size="large"
                          // to={`/favorite/${_id}`}
                          onClick={() => dispatch(removeFromFavorite(_id))}
                          sx={{ color: "#e3f6f5", my: 2 }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: "#2c698d",
                              "&:hover": { bgcolor: "#1565C0" },
                            }}
                          >
                            <FavoriteIcon />
                          </Avatar>
                        </Button>
                      ) : (
                        <Button
                          component={Link}
                          size="large"
                          // to={`/favorite/${_id}`}
                          onClick={() => dispatch(addToFavorite(_id))}
                          sx={{ color: "#e3f6f5", my: 2 }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: "#2c698d",
                              "&:hover": { bgcolor: "#1565C0" },
                            }}
                          >
                            <FavoriteBorderIcon />
                          </Avatar>
                        </Button>
                      )}
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          )
        )}

        {/* <Grid item md={3} sm={6} xs={false}>
          <Card
            sx={{
              bgcolor: "#e3f6f5",

              boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.48)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={300}
                image="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="pride_prejudice"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h6" sx={{ my: 0.5 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{}}>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "#9B908A",
                        fontSize: "18px",
                      }}
                    >
                      BDT 6.60
                    </Typography>
                  </Grid>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
                      BDT 5.58
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box
                component="div"
                sx={{
                  backgroundColor: "rgba(39, 38, 67, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  size="large"
                  href="/book/1/details"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ReadMoreIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Avatar>
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} sm={6} xs={false}>
          <Card
            sx={{
              bgcolor: "#e3f6f5",
              boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.48)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={300}
                image="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="pride_prejudice"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h6" sx={{ my: 0.5 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{}}>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "#9B908A",
                        fontSize: "18px",
                      }}
                    >
                      BDT 6.60
                    </Typography>
                  </Grid>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
                      BDT 5.58
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box
                component="div"
                sx={{
                  backgroundColor: "rgba(39, 38, 67, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ color: "#e3f6f5", my: 2, bgcolor: "#2c698d" }}
                  href="/book/id/details"
                >
                  Details
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Avatar>
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} sm={6} xs={false}>
          <Card
            sx={{
              bgcolor: "#e3f6f5",
              boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.48)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={300}
                image="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="pride_prejudice"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h6" sx={{ my: 0.5 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{}}>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "#9B908A",
                        fontSize: "18px",
                      }}
                    >
                      BDT 6.60
                    </Typography>
                  </Grid>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
                      BDT 5.58
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box
                component="div"
                sx={{
                  backgroundColor: "rgba(39, 38, 67, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ color: "#e3f6f5", my: 2, bgcolor: "#2c698d" }}
                  href="/book/id/details"
                >
                  Details
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Avatar>
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid> */}
      </Grid>

      {sales && sales.length > 4 && (
        <Button
          component={Link}
          variant="contained"
          to="/shop?offer=true"
          sx={{ my: 8, bgcolor: "#2c698d" }}
        >
          Browse More
        </Button>
      )}
    </Box>
  );
};

export default BookDeals;
