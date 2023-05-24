import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BookTabs from "../components/BookTabs";
import { getBookById } from "../actions/bookActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";

const bookFormat = [
  {
    id: 1,
    name: "Hardcover",
  },
  {
    id: 2,
    name: "Paperback",
  },
  {
    id: 3,
    name: "Kindle Edition",
  },
  {
    id: 4,
    name: "Audible",
  },
];

const BookDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loading, book, error } = useSelector((state) => state.bookDetails);
  const {
    _id,
    title,
    author,
    price,
    format,
    image,
    description,
    isbestSeller,
    numCOpySold,
    literaryReviews,
  } = book;

  useEffect(() => {
    dispatch(getBookById(id));
  }, [dispatch, id]);

  const [formatType, setFormatType] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleFormatChange = (event) => {
    setFormatType(event.target.value);
  };

  const handleQuantityChnage = (event) => {
    setQuantity(event.target.value);
  };

  const handleDecrement = (event) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = (event) => {
    setQuantity(+quantity + 1);
  };

  const handleCartSubmit = (event) => {
    event.preventDefault();
    console.log(formatType, quantity);
  };

  return (
    <div>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/shop">
            Shop
          </Link>
          <Typography color="text.primary">{title}</Typography>
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
          <Box component="div" sx={{ mx: 10, my: 8 }}>
            <Grid container spacing={2}>
              <Grid item md={3} sm={4} xs={12}>
                <Card sx={{ borderRadius: 0 }}>
                  <CardMedia
                    component="img"
                    src={`/${image}`}
                    alt={`${title}`}
                    height="400"
                  />
                </Card>
              </Grid>

              <Grid item md={5} sm={8} xs={12}>
                <Box component="div" sx={{ textAlign: "justify", ml: 3 }}>
                  <Typography variant="h4" sx={{ fontFamily: "Roboto" }}>
                    {title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ my: 1 }}>
                    by{" "}
                    {author.map((val) => (
                      <Link
                        key={val._id}
                        href={`/author/${val._id}/details`}
                        sx={{
                          ml: 1,
                          textDecoration: "none",
                          color: "#9B908A",
                        }}
                      >
                        {val.name}
                      </Link>
                    ))}
                  </Typography>
                  <Typography component="p" variant="body2" sx={{ my: 3 }}>
                    {description.split(".").slice(0, 4).join(".")}.
                  </Typography>

                  <Box component="div" sx={{ my: 3 }}>
                    {numCOpySold && (
                      <Typography variant="body2">
                        * The {numCOpySold} copy bestseller *
                      </Typography>
                    )}

                    {isbestSeller && (
                      <Typography variant="subtitle2" sx={{ my: 1 }}>
                        A Number One New York Times Bestseller
                      </Typography>
                    )}
                  </Box>

                  {literaryReviews && (
                    <Box component="div" sx={{ my: 3, color: "#505350" }}>
                      {
                        literaryReviews.map(({literar, }))
                      }
                      <Typography variant="body2">
                        'Painfully beautiful' - New York Times
                      </Typography>
                      <Typography variant="body2">
                        'Unforgettable . . . as engrossing as it is moving' -
                        Daily Mail
                      </Typography>
                      <Typography variant="body2">
                        'A rare achievement' - The Times
                      </Typography>
                      <Typography variant="body2">
                        'I can't even express how much I love this book!' -
                        Reese Witherspoon
                      </Typography>
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
                    title={"BDT 200 - BDT 500"}
                    sx={{ bgcolor: "#e3f6f5", p: 3 }}
                  />

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
                      {bookFormat.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      size="medium"
                      type="number"
                      sx={{ mt: 2 }}
                      fullWidth
                      inputProps={{ min: 1, style: { textAlign: "center" } }}
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

                    <Button
                      color="error"
                      variant="outlined"
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
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <BookTabs />
        </div>
      )}
    </div>
  );
};

export default BookDetails;
