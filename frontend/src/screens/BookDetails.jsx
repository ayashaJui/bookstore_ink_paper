import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BookTabs from "../components/BookTabs";
import { getBookById } from "../actions/bookActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { addToFavorite, removeFromFavorite } from "../actions/favoriteActions";
import Navbar from "../layouts/Navbar";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, book, error } = useSelector((state) => state.bookDetails);

  const { favoriteItems } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(getBookById(id));
  }, [dispatch, id]);

  const [formatType, setFormatType] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleFormatChange = (event) => {
    setFormatType(event.target.value);
  };

  const handleQuantityChnage = (event) => {
    const val = event.target.value;

    if (val >= 0 && val <= book.countInStock[formatType]) {
      setQuantity(event.target.value);
    }
  };

  const handleDecrement = (event) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = (event) => {
    if (quantity < book.countInStock[formatType]) {
      setQuantity(+quantity + 1);
    }
  };

  const handleCartSubmit = (event) => {
    event.preventDefault();
    console.log(formatType, quantity);
    navigate(`/cart/${book._id}?quantity=${quantity}&format=${formatType}`);
  };

  return (
    <div>
      <Navbar />
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink underline="hover" component={Link} color="inherit" to="/">
            Home
          </MuiLink>
          <MuiLink
            underline="hover"
            component={Link}
            color="inherit"
            to="/shop"
          >
            Shop
          </MuiLink>
          <Typography color="text.primary">{book && book.title}</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity={"error"} title={"Error"}>
          {error}
        </Message>
      ) : (
        <div>
          {book && (
            <Box component="div" sx={{ mx: 10, my: 8 }}>
              <Grid container spacing={2}>
                <Grid item md={3} sm={4} xs={12}>
                  <Card sx={{ borderRadius: 0, boxShadow: 0 }}>
                    <CardMedia
                      component="img"
                      src={`${
                        book.image
                          ? process.env.REACT_APP_BASE_URL + book.image
                          : "/images/sample_book.jpg"
                      }`}
                      alt={`${book.title}`}
                      height="400"
                      sx={{ objectFit: "contain", backgroundColor: "#F5F5F5" }}
                    />
                  </Card>
                </Grid>

                <Grid item md={5} sm={8} xs={12}>
                  <Box component="div" sx={{ textAlign: "justify", ml: 2 }}>
                    <Typography variant="h4" sx={{ fontFamily: "Roboto" }}>
                      {book.title}{" "}
                      {book.offer ? (
                        <Chip color="primary" label={`${book.offer}% off`} />
                      ) : (
                        ""
                      )}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ my: 1 }}>
                      by{" "}
                      {book.author &&
                        book.author.map(({ _id, name }, index) => (
                          <span key={_id}>
                            <Link
                              href={`/author/${_id}/profile`}
                              sx={{
                                ml: 1,
                                textDecoration: "none",
                                color: "#9B908A",
                              }}
                            >
                              {name}
                            </Link>
                            {index !== book.author.length - 1 && (
                              <Typography
                                component={"span"}
                                sx={{ color: "#9B908A" }}
                              >
                                ,
                              </Typography>
                            )}
                          </span>
                        ))}
                    </Typography>
                    <Typography component="p" variant="body2" sx={{ my: 3 }}>
                      {book.description &&
                        book.description.split(".").slice(0, 4).join(".")}
                      .
                    </Typography>

                    <Box component="div" sx={{ my: 3 }}>
                      {book.numCopySold && (
                        <Typography variant="body2">
                          * The {book.numCopySold} copy bestseller *
                        </Typography>
                      )}

                      {book.isBestSeller && (
                        <Typography variant="subtitle2" sx={{ my: 1 }}>
                          A Number One New York Times Bestseller
                        </Typography>
                      )}
                    </Box>

                    {book.literaryReviews && (
                      <Box component="div" sx={{ my: 3, color: "#505350" }}>
                        {book.literaryReviews.map(
                          ({ _id, literar, comment }) => (
                            <Typography variant="body2" key={_id}>
                              '{comment}' - {literar}
                            </Typography>
                          )
                        )}
                      </Box>
                    )}
                  </Box>
                </Grid>

                <Grid item md={4} sm={12} xs={12}>
                  <Card
                    variant="outlined"
                    sx={{ textAlign: "left", ml: 3, borderRadius: 0 }}
                  >
                    <CardHeader
                      title={
                        book.price?.length > 1
                          ? `BDT ${Math.min(...book.price)} - BDT ${Math.max(
                              ...book.price
                            )}`
                          : `BDT ${book.price?.[0]}`
                      }
                      sx={{ bgcolor: "#e3f6f5", p: 3 }}
                    ></CardHeader>

                    <CardContent sx={{ mt: 2 }}>
                      <Typography variant="body2">Book Format</Typography>

                      <TextField
                        size="medium"
                        fullWidth
                        id="outlined-select-bookformat"
                        select
                        label="Choose an option"
                        defaultValue=""
                        onChange={handleFormatChange}
                        sx={{ mt: 3, borderRadius: 0 }}
                      >
                        {book.format?.map((option, idx) => (
                          <MenuItem key={idx} value={idx}>
                            {option} - {book.price[idx]}/-
                          </MenuItem>
                        ))}
                      </TextField>

                      <TextField
                        size="medium"
                        type="number"
                        sx={{ mt: 2 }}
                        fullWidth
                        inputProps={{
                          style: { textAlign: "center" },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                sx={{ m: 0, p: 0 }}
                                onClick={handleDecrement}
                              >
                                <RemoveIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                sx={{ m: 0, p: 0 }}
                                onClick={handleIncrement}
                              >
                                {" "}
                                <AddIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        onChange={handleQuantityChnage}
                        value={quantity}
                      />

                      {book.countInStock?.[formatType] > 0 ? (
                        <Button
                          size="large"
                          onClick={handleCartSubmit}
                          variant="contained"
                          sx={{
                            bgcolor: "#272643",
                            mt: 2,
                            borderRadius: 0,
                            width: "100%",
                          }}
                        >
                          Add to Cart
                        </Button>
                      ) : (
                        <Button
                          disabled
                          size="large"
                          onClick={handleCartSubmit}
                          variant="contained"
                          sx={{
                            bgcolor: "#272643",
                            mt: 2,
                            borderRadius: 0,
                            width: "100%",
                          }}
                        >
                          Add to Cart
                        </Button>
                      )}

                      {favoriteItems.find((item) => item.book === book._id) ? (
                        <Button
                          color="error"
                          variant="outlined"
                          onClick={() => dispatch(removeFromFavorite(book._id))}
                          sx={{
                            mt: 2,
                            px: 2,
                            py: 1.5,
                            border: "none",
                            "&:hover": { color: "#000", border: "none" },
                          }}
                          fullWidth
                        >
                          <FavoriteIcon sx={{ mr: 1 }} /> Remove from Favorite
                        </Button>
                      ) : (
                        <Button
                          color="error"
                          variant="outlined"
                          onClick={() => dispatch(addToFavorite(book._id))}
                          sx={{
                            mt: 2,
                            px: 2,
                            py: 1.5,
                            border: "none",
                            "&:hover": { color: "#000", border: "none" },
                          }}
                          fullWidth
                        >
                          <FavoriteBorderIcon sx={{ mr: 1 }} /> Add to Favorite
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}

          {book && <BookTabs book={book} />}
        </div>
      )}
    </div>
  );
};

export default BookDetails;
