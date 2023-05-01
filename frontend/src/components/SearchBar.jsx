import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(title, author, genre);
  };

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
      {/* <Grid container spacing={2}>
        <Grid item xs={3.3}>
          <Autocomplete
            freeSolo
            
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Title"
                margin="normal"
                variant="outlined" 
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            )}
          />
        </Grid>
        <Grid item xs={3.3}>
          <Autocomplete
            freeSolo
            disableClearable
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Author"
                margin="normal"
                variant="outlined"
                value={author}
                size="small"
                onChange={(e) => setAuthor(e.target.value)}
              />
            )}
          />
        </Grid>
        <Grid item xs={3.3}>
          <Autocomplete
            freeSolo
            disableClearable
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Category"
                margin="normal"
                variant="outlined"
                size="small"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            )}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" type="submit" size="small" sx={{mt:2, pl: 1, py: 1, bgcolor: '#2c698d'}}>
            <SearchIcon /> Find
          </Button>
        </Grid>
      </Grid> */}
      <TextField
        label="Title"
        margin="normal"
        variant="outlined"
        size="small"
        value={title}
        sx={{ mx: 1 }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Author"
        margin="normal"
        variant="outlined"
        size="small"
        value={author}
        sx={{ mx: 1 }}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <TextField
        label="Genre"
        margin="normal"
        variant="outlined"
        size="small"
        value={genre}
        sx={{ mx: 1 }}
        onChange={(e) => setGenre(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        size="small"
        sx={{ mt: 1, pl: 1, py: 1, bgcolor: "#2c698d", mx: 1 }}
      >
        <SearchIcon /> Find
      </Button>
    </Box>
  );
}
