import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import BookCard from "./BookCard";

export default function NewArrivals() {
  return (
    <Box component="div" sx={{ mx: 2, mb: 10 }}>
      <Typography
        variant="h3"
        sx={{ mt: 5, mb: 3, float: "left", fontFamily: "Roboto" }}
      >
        New Arrivals
      </Typography>
      <Grid
        container
        spacing={1}
        // sx={{  border: "1px solid grey" }}
      >
        <CssBaseline />
        <Grid item sm={false} md={3}>
          <Card sx={{ bgcolor: "#e3f6f5" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image="/images/new_arrivals/pride_and_prejudice_chiltern_800x.jpg"
                alt="pride_prejudice"
              />
              <Chip
                label="Most Recent"
                color="error"
                sx={{ position: "absolute", left: 0, top: 0 }}
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="subtitle1" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h5" sx={{ my: 0.2 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.2 }}>
                  <Grid item md={8} sx={{ color: "#FF9529" }}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                    <Typography variant="subtitle2">(1500 Reviews)</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="h6">BDT 5.58</Typography>
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
                  size="large"
                  sx={{ color: "#e3f6f5", my: 2 }}
                  href="/book/details/id"
                >
                  Details
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <ShoppingCartIcon />
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <FavoriteBorderIcon />
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={10} md={9} elevation={6}>
          <Grid container spacing={1}>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Grid>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        href="/new_arrivals"
        sx={{ my: 5, bgcolor: "#2c698d" }}
      >
        Browse More
      </Button>
    </Box>
  );
}
