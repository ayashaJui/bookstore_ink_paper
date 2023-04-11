import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BookCard from "./BookCard";

const NewArrivals = () => {
  return (
    <Box component="div" sx={{ mx: 4, mb: 10 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 7,
          mb: 3,
          fontFamily: "Roboto",
          color: "#272643",
          textAlign: "left",
        }}
      >
        New Arrivals
      </Typography>
      <Grid container spacing={2}>
        <CssBaseline />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
        <BookCard mediaHeight="250" cardColor="#e3f6f5" />
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
};

export default NewArrivals;
