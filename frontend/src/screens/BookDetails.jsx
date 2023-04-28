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
import { useState } from "react";
import BookTabs from "../components/BookTabs";

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
  const [format, setFormat] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
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
    console.log(format, quantity);
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
          <Typography color="text.primary">Pride & Prejudice</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box component="div" sx={{ mx: 5, my: 8 }}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={4} xs={12}>
            <Card sx={{ borderRadius: 0 }}>
              <CardMedia
                component="img"
                src="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="title"
                height="400"
              />
            </Card>
          </Grid>

          <Grid item md={5} sm={8} xs={12}>
            <Box component="div" sx={{ textAlign: "justify", ml: 3 }}>
              <Typography variant="h4" sx={{ fontFamily: "Roboto" }}>
                Pride & Prejudice
              </Typography>
              <Typography variant="subtitle2" sx={{ my: 1 }}>
                by{" "}
                <Link
                  href="/author/1/details"
                  sx={{ ml: 1, textDecoration: "none", color: "#9B908A" }}
                >
                  Jane Austen
                </Link>
              </Typography>
              <Typography component="p" variant="body2" sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident iste impedit cum inventore reprehenderit distinctio
                velit id quidem odio maiores officiis modi quo, aliquid libero
                magnam dignissimos, nisi odit tempore voluptates soluta saepe
                molestias sed! In culpa quo tempora quia quae sed omnis
                obcaecati labore sint a! Quam, qui voluptatibus?
              </Typography>

              <Box component="div" sx={{ my: 3 }}>
                <Typography variant="body2">
                  * The multi-million copy bestseller *
                </Typography>
                <Typography variant="subtitle2" sx={{ my: 1 }}>
                  A Number One New York Times Bestseller
                </Typography>
              </Box>

              <Box component="div" sx={{ my: 3, color: "#505350" }}>
                <Typography variant="body2">
                  'Painfully beautiful' - New York Times
                </Typography>
                <Typography variant="body2">
                  'Unforgettable . . . as engrossing as it is moving' - Daily
                  Mail
                </Typography>
                <Typography variant="body2">
                  'A rare achievement' - The Times
                </Typography>
                <Typography variant="body2">
                  'I can't even express how much I love this book!' - Reese
                  Witherspoon
                </Typography>
              </Box>
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
  );
};

export default BookDetails;
