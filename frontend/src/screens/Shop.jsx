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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBooks } from "../actions/bookActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParam = location.search.split("?")[1];

  const { loading, books, error } = useSelector((state) => state.bookList);

  useEffect(() => {
    if (queryParam) {
      dispatch(getAllBooks(queryParam));
    } else {
      dispatch(getAllBooks());
    }
  }, [dispatch, queryParam]);

  return (
    <Box component="div">
      <HeroImage title="Shop" imgPath="/images/static/shop.jpg" />
      <Box component="div" sx={{ mx: { md: 10, sm: 5, xs: 1 }, mb: 8 }}>
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
              <Grid container spacing={3}>
                {books.books.map(
                  ({
                    _id,
                    title,
                    price,
                    author,
                    format,
                    offer,
                    rating,
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
                            height="350"
                            image={`/${image}`}
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
                            <Typography variant="body2" color="text.secondary">
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
                                value={rating}
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
                                <ShoppingCartIcon
                                  sx={{
                                    color: "#2c698d",
                                    fontSize: "30px",
                                    "&:hover": { color: "#1565C0" },
                                  }}
                                />
                              </Button>
                              <Button
                                component={Link}
                                size="medium"
                                to={`/favorite/${_id}`}
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
            )}

            <Stack spacing={2} sx={{ mt: 10, mb: 6, alignItems: "center" }}>
              <Pagination
                count={10}
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop;
