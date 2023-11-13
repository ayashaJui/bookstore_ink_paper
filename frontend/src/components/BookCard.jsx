import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../actions/favoriteActions";

const BookCard = ({ mediaHeight, cardColor, cardMargin, book }) => {
  const dispatch = useDispatch();

  const { _id, image, format, title, author, rating, numReviews, price } = book;

  const { cartItems } = useSelector((state) => state.cart);
  const { favoriteItems } = useSelector((state) => state.favorite);

  const baseUrl = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : "http://localhost:5000";

  return (
    <Grid item sm={4} xs={12} md={3}>
      <Card
        sx={{
          bgcolor: `${cardColor}`,
          mx: `${cardMargin}`,
          my: 2,
          height: "480px",
          maxWidth: 320,
          // boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.43)",
        }}
      >
        <CardActionArea sx={{ height: "480px", maxWidth: 320 }}>
          <CardMedia
            component="img"
            height={mediaHeight}
            image={`${
              image
                ? baseUrl + image
                : "/images/sample_book.jpg"
            }`}
            alt={`${title}`}
            sx={{ objectFit: "contain" }}
          />
          <CardContent sx={{ textAlign: "left" }}>
            <Typography variant="caption" component="div" color="error">
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
              <Grid item md={8} sx={{ mt: 0.5 }}>
                <Rating
                  name="half-rating-read"
                  value={rating}
                  precision={0.5}
                  readOnly
                />
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FF9529", fontSize: 10 }}
                >
                  ({numReviews} Reviews)
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant="subtitle1">{price[0]}/-</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Box
            component="div"
            sx={{
              backgroundColor: "rgba(39, 38, 67, 0.8)",
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
                sx={{ bgcolor: "#2c698d", "&:hover": { bgcolor: "#1565C0" } }}
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
                sx={{ bgcolor: "#2c698d", "&:hover": { bgcolor: "#1565C0" } }}
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
                  sx={{ bgcolor: "#2c698d", "&:hover": { bgcolor: "#1565C0" } }}
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
                  sx={{ bgcolor: "#2c698d", "&:hover": { bgcolor: "#1565C0" } }}
                >
                  <FavoriteBorderIcon />
                </Avatar>
              </Button>
            )}
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default BookCard;
