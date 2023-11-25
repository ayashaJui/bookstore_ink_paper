import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [genre, setGenre] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    params.set("title", title);
    navigate({
      pathname: location.pathname,
      search: `?${params.toString()}`,
    });
  };

  window.addEventListener("load", (event) => {
    navigate("/shop");
  });

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        mb: 4,
        mt: 10,
        mx: { md: 10, sm: 5, xs: 1 },
        display: "flex",
        flexDirection: { md: "row", sm: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        // spacing={3}
        justifyContent={"space-around"}
        sx={{ mx: "auto" }}
      >
        <Grid item md={10}>
          <TextField
            label="Search by title "
            margin="normal"
            variant="outlined"
            fullWidth
            size="small"
            value={title}
            required
            // sx={{ mx: 1 }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            type="submit"
            size="small"
            sx={{ mt: 2, pl: 1, py: 1, bgcolor: "#2c698d" }}
          >
            <SearchIcon /> Find
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
