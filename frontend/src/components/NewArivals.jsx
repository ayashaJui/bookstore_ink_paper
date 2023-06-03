import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BookCard from "./BookCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLatestRelease } from "../actions/bookActions";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const dispatch = useDispatch();

  const { latestReleases: latestBooks } = useSelector(
    (state) => state.latestReleaseList
  );
  const { latestReleases } = latestBooks;
  // console.log(latestReleases);

  useEffect(() => {
    dispatch(getLatestRelease());
  }, [dispatch]);

  return (
    <Box component="div" sx={{ mx: 4, mb: 10 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 7,
          mb: 3,
          fontFamily: "Nunito",
          color: "#272643",
          textAlign: "left",
        }}
      >
        New Arrivals
      </Typography>
      <Grid container spacing={2}>
        <CssBaseline />
        {latestReleases &&
          latestReleases.map((book, idx) => (
            <BookCard
              mediaHeight="250"
              cardColor="#e3f6f5"
              book={book}
              key={idx}
            />
          ))}
      </Grid>

      <Button
        component={Link}
        variant="contained"
        to={`/shop/?sort=release`}
        sx={{ my: 5, bgcolor: "#2c698d" }}
      >
        Browse More
      </Button>
    </Box>
  );
};

export default NewArrivals;
