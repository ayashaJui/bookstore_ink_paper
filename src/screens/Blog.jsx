import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { FixedSizeList } from "react-window";

function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }

const Blog = () => {
  const handleSubmit = () => {};

  return (
    <Box component="div">
      <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/blog.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          color: "white",
          borderRadius: 0,
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
          bgcolor="rgba(0, 0, 0, 0.6)"
        />
        <CardContent>
          <Typography
            variant="h2"
            position="absolute"
            top="40%"
            left="20%"
            right="20%"
            zIndex={2}
            fontFamily="Roboto"
            letterSpacing={3}
          >
            Blog
          </Typography>
        </CardContent>
      </Card>

      <Box component="div" sx={{ mx: 5 }}>
        <Grid container spacing={3}>
          <Grid item md={8} sm={12} xs={12}>
            <Card sx={{ my: 4, boxShadow: "none" }}>
              <Grid container>
                <Grid item xs={12} sm={4} md={5}>
                  <CardMedia
                    component="img"
                    image="/images/static/carousal/1.jpg"
                    alt="featured image"
                    height="300px"
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={7}>
                  <CardContent sx={{ ml: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    >
                      LIZARD
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "left",
                        my: 2,
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    >
                      POSTS BY JANE AUSTEN / MARCH 2018
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "left",
                        my: 3,
                        fontSize: "15px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis tempore deserunt doloremque. Sapiente laboriosam non,
                      exercitationem enim distinctio iure accusantium.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ ml: 1, mb: 2 }}>
                    <Button
                      size="small"
                      href="/books/id/details"
                      //   variant="outlined"
                      sx={{
                        color: "#272643",
                        fontWeight: "bold",
                        "&:hover": { color: "#2c698d" },
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>

            <Card sx={{ my: 4, boxShadow: "none" }}>
              <Grid container>
                <Grid item xs={12} sm={4} md={5}>
                  <CardMedia
                    component="img"
                    image="/images/static/carousal/1.jpg"
                    alt="featured image"
                    height="300px"
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={7}>
                  <CardContent sx={{ ml: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    >
                      LIZARD
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "left",
                        my: 2,
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    >
                      POSTS BY JANE AUSTEN / MARCH 2018
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "left",
                        my: 3,
                        fontSize: "15px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis tempore deserunt doloremque. Sapiente laboriosam non,
                      exercitationem enim distinctio iure accusantium.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ ml: 1, mb: 2 }}>
                    <Button
                      size="small"
                      href="/books/id/details"
                      //   variant="outlined"
                      sx={{
                        color: "#272643",
                        fontWeight: "bold",
                        "&:hover": { color: "#2c698d" },
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item md={4} sm={9} xs={12}>
            <Box component="div">
              <Typography
                variant="h6"
                borderBottom={"2px solid black"}
                textAlign="left"
                sx={{ mt: 4, pb: 1, fontSize: "15px", fontWeight: "bold" }}
              >
                SEARCH
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="search"
                      label="Search"
                      name="search"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Button type="submit" sx={{ mt: 2 }}>
                      <SearchIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Typography
                variant="h6"
                borderBottom={"2px solid black"}
                textAlign="left"
                sx={{ mt: 4, pb: 1, fontSize: "15px", fontWeight: "bold" }}
              >
                CATEGORIES
              </Typography>
              <FixedSizeList
                height={400}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
              >
                {/* <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" sx={{ fontSize: "15px" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Travel" sx={{ fontSize: "5px" }} />
                  </ListItemButton>
                </ListItem> */}
                {renderRow}
              </FixedSizeList>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Blog;
