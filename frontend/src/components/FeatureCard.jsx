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

const FeatureCard = () => {
  return (
    <Card sx={{ bgcolor: "#272643" }}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            image="/images/new_arrivals/pride_and_prejudice.jpg"
            alt="featured image"
            height="100%"
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
              Pride and Prejudice
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fff", textAlign: "left", my: 1 }}
            >
              by Jane Austen
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fff", textAlign: "left", mt: 5, fontSize: "25px" }}
            >
              BDT 5.58
            </Typography>
            <Box component="div" sx={{ textAlign: "left", my: 3 }}>
              <Rating
                readOnly
                name="customized"
                defaultValue={2.5}
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
                (1500 Reviews)
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ ml: 3, mb: 2 }}>
            <Button
              size="small"
              href="/books/1/details"
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
