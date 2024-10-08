import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import HeroImage from "../components/HeroImage";
import ShopSidebar from "../components/ShopSidebar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks } from "../actions/bookActions";
import { addToFavorite, removeFromFavorite } from "../actions/favoriteActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import SearchBar from "../components/SearchBar";

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParam = location.search.split("?")[1];
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 15;

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const { loading, books, error } = useSelector((state) => state.bookList);
  const { cartItems } = useSelector((state) => state.cart);
  const { favoriteItems } = useSelector((state) => state.favorite);

  const totalPages = Math.ceil(books?.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const visibleBooks = books?.slice(startIndex, endIndex);

  useEffect(() => {
    if (queryParam) {
      dispatch(getAllBooks(queryParam));
    } else {
      dispatch(getAllBooks());
    }
  }, [dispatch, queryParam]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <Box component="div">
        <HeroImage title="Shop" imgPath="/images/static/shop.jpg" />

        <Box component="div" sx={{ mx: { md: 10, sm: 5, xs: 1 }, mb: 12 }}>
          <SearchBar />
          <Grid container spacing={4}>
            <Grid item md={3} sm={9} xs={12}>
              <Card
                sx={{
                  mt: 4,
                  boxShadow: "none",
                  border: "1px solid #ccc",
                  maxWidth: 400,
                  mx: "auto",
                }}
              >
                <ShopSidebar />
              </Card>
            </Grid>

            <Grid item md={9} sm={12} xs={12}>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message severity={"error"} title={"Error"}>
                  {error}
                </Message>
              ) : (
                <>
                  <Grid container spacing={3}>
                    {visibleBooks.map(
                      ({
                        _id,
                        title,
                        price,
                        author,
                        format,
                        offer,
                        avgRatings,
                        image,
                      }) => (
                        <Grid item md={4} sm={6} xs={12} key={_id}>
                          <Card
                            sx={{
                              mt: 4,
                              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)",
                              height: "520px",
                              maxWidth: 320,
                              mx: "auto",
                            }}
                          >
                            <Box component="div" sx={{ position: "relative" }}>
                              <CardMedia
                                component="img"
                                alt={title}
                                height="330"
                                image={`${
                                  image
                                    ? baseUrl + image
                                    : "/images/sample_book.jpg"
                                }`}
                                sx={{ objectFit: "contain" }}
                              />
                              {offer > 0 && (
                                <Chip
                                  label={"sale"}
                                  sx={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    borderRadius: 0,
                                    color: "#fff",
                                    bgcolor: "#272643",
                                    fontWeight: "bold",
                                    p: 1,
                                    letterSpacing: 0.5,
                                  }}
                                />
                              )}
                            </Box>
                            <CardActionArea>
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
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  by {author.map((val) => val.name).join(", ")}
                                </Typography>
                                <Typography
                                  variant="subtitle2"
                                  sx={{ mt: 1, fontSize: "18px" }}
                                  fontWeight={"bold"}
                                >
                                  BDT {price[0]} /-
                                </Typography>
                              </CardContent>
                              <Box
                                component="div"
                                sx={{
                                  backgroundColor: "rgba(255, 255, 255, 1)",
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  display: "grid",
                                  flexDirection: "row",
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                  opacity: 0,
                                  transition: "opacity 0.2s ease-in-out",
                                  "&:hover": {
                                    opacity: 1,
                                  },
                                }}
                              >
                                <Box component={"div"}>
                                  <Rating
                                    name="half-rating-read"
                                    value={Number(avgRatings)}
                                    precision={0.5}
                                    readOnly
                                  />
                                </Box>
                                <Box component="div">
                                  <Button
                                    component={Link}
                                    size="medium"
                                    to={`/cart/${_id}`}
                                    sx={{ color: "#e3f6f5" }}
                                  >
                                    {cartItems.find(
                                      (item) => item.book === _id
                                    ) ? (
                                      <ShoppingCartIcon
                                        key={_id}
                                        sx={{
                                          color: "#2c698d",
                                          fontSize: "30px",
                                          "&:hover": { color: "#1565C0" },
                                        }}
                                      />
                                    ) : (
                                      <ShoppingCartOutlinedIcon
                                        key={_id}
                                        sx={{
                                          color: "#2c698d",
                                          fontSize: "30px",
                                          "&:hover": { color: "#1565C0" },
                                        }}
                                      />
                                    )}
                                  </Button>
                                  {favoriteItems.find(
                                    (item) => item.book === _id
                                  ) ? (
                                    <Button
                                      component={Link}
                                      size="medium"
                                      onClick={() =>
                                        dispatch(removeFromFavorite(_id))
                                      }
                                      sx={{ color: "#e3f6f5" }}
                                    >
                                      <FavoriteIcon
                                        sx={{
                                          color: "#2c698d",
                                          fontSize: "30px",
                                          "&:hover": { color: "#1565C0" },
                                        }}
                                      />
                                    </Button>
                                  ) : (
                                    <Button
                                      component={Link}
                                      size="medium"
                                      onClick={() =>
                                        dispatch(addToFavorite(_id))
                                      }
                                      sx={{ color: "#e3f6f5" }}
                                    >
                                      <FavoriteBorderIcon
                                        sx={{
                                          color: "#2c698d",
                                          fontSize: "30px",
                                          "&:hover": { color: "#1565C0" },
                                        }}
                                      />
                                    </Button>
                                  )}
                                  <Button
                                    component={Link}
                                    size="medium"
                                    sx={{ color: "#e3f6f5" }}
                                    to={`/book/${_id}/details`}
                                  >
                                    <ReadMoreIcon
                                      sx={{
                                        color: "#2c698d",
                                        fontSize: "30px",
                                        "&:hover": { color: "#1565C0" },
                                      }}
                                    />
                                  </Button>
                                </Box>
                              </Box>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      )
                    )}
                  </Grid>

                  {totalPages > 1 && (
                    <Stack
                      spacing={2}
                      sx={{ mt: 10, mb: 6, alignItems: "center" }}
                    >
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        renderItem={(item) => (
                          <PaginationItem
                            slots={{
                              previous: ArrowBackIcon,
                              next: ArrowForwardIcon,
                            }}
                            {...item}
                          />
                        )}
                      />
                    </Stack>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Shop;
