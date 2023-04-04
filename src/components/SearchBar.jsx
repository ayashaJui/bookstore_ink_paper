import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@mui/material";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(title, author, category)
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{ my: 4, mx: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3.3}>
          <Autocomplete
            freeSolo
            disableClearable
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Title"
                margin="normal"
                variant="outlined" 
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            )}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" type="submit" sx={{mt:2, px: 2, py: 1.5, bgcolor: '#2c698d'}}>
            <SearchIcon /> Find
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
