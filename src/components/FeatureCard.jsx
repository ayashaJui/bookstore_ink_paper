import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/system";

const FeatureCard = () => {
  return (
    <Card sx={{ bgcolor: "#272643" }}>
      <Grid container >
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            image="/images/new_arrivals/pride_and_prejudice.jpg" // Replace with the image URL or path
            alt="featured image"
            height="100%" 
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent sx={{ml: 3, mt:2}}>
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
            <Box component="div" sx={{ color: "#fff", textAlign: "left", my: 3 }}>
              <StarIcon sx={{ fontSize: 20 }} />
              <StarIcon sx={{ fontSize: 20 }} />
              <StarIcon sx={{ fontSize: 20 }} />
              <StarHalfIcon sx={{ fontSize: 20 }} />
              <StarBorderIcon sx={{ fontSize: 20 }} />
              <Typography variant="subtitle2" sx={{ fontSize: 10 }}>
                (1500 Reviews)
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ml: 3, mb: 2}}>
            <Button size="small" href='/books/id/details' variant="outlined" sx={{color: '#fff', borderColor: '#fff'}}>view Details</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FeatureCard;
