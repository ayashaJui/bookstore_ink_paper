import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const FeatureCard = ({ book }) => {
  const { _id, title, image, author, rating, numReviews, price } = book;

  const baseUrl = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : "http://localhost:3000";

  return (
    <Card sx={{ bgcolor: "#272643", height: "400px" }}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            image={`${image ? baseUrl +image : "/images/sample_book.jpg"}`}
            alt={title}
            height="100%"
            sx={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent sx={{ ml: 3, mt: 2 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: "#fff", textAlign: "left" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fff", textAlign: "left", my: 1 }}
            >
              by {author.map((val) => val.name).join(", ")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fff", textAlign: "left", mt: 5, fontSize: "25px" }}
            >
              BDT {price[0]}
            </Typography>
            <Box component="div" sx={{ textAlign: "left", my: 3 }}>
              <Rating
                readOnly
                name="customized"
                value={rating}
                precision={0.5}
                icon={<StarIcon fontSize="inherit" sx={{ color: "#fff" }} />}
                emptyIcon={
                  <StarBorderIcon fontSize="inherit" sx={{ color: "#fff" }} />
                }
              />
              <Typography
                variant="subtitle2"
                sx={{ fontSize: 10, color: "#fff" }}
              >
                ({numReviews} Reviews)
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ ml: 3, mb: 2 }}>
            <Button
              component={Link}
              size="small"
              to={`/book/${_id}/details`}
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
            >
              view Details
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FeatureCard;
