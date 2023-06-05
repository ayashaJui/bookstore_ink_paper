import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import SearchIcon from "@mui/icons-material/Search";

const items = [
  {
    title: "trash",
    count: 100,
  },
  {
    title: "travel",
    count: 150,
  },
  {
    title: "Fashion",
    count: 50,
  },
  {
    title: "Lifestyle",
    count: 10,
  },
];

const times = [
  {
    title: "March 2015",
    count: 10,
  },
  {
    title: "March 2015",
    count: 10,
  },
  {
    title: "March 2015",
    count: 10,
  },
];

const CustomList = ({ index, data }) => {
  //   const item = data[index];
  // console.log(data);
  return (
    <ListItem disablePadding>
      <ListItemButton href="#">
        <ListItemText primary={data.title} sx={{}} />
        <Typography variant="subttle2" sx={{ fontSize: "12px" }}>
          ({data.count})
        </Typography>
      </ListItemButton>
    </ListItem>
  );
};
const BlogSidebar = () => {
  const handleSubmit = () => {};

  return (
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
          <Grid item md={9} xs={7}>
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
          <Grid item md={2} xs={2}>
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

      <Virtuoso
        style={{ height: "250px" }}
        totalCount={50}
        data={items}
        itemContent={(index, data) => <CustomList index={index} data={data} />}
      />

      <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 2, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        RECENT POSTS
      </Typography>

      <Box component="div" sx={{ mb: 7 }}>
        <Card sx={{ my: 2, boxShadow: "none", ml: 1 }}>
          <Grid container spacing={0}>
            <Grid item>
              <CardMedia
                component="img"
                image="/images/static/carousal/1.jpg"
                alt="featured image"
                height="60px"
                width="60px"
              />
            </Grid>
            <Grid item>
              <CardContent sx={{ pt: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                  }}
                >
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Lizard
                  </a>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "left",
                    fontSize: "10px",
                  }}
                >
                  March 18, 2023
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Card sx={{ my: 2, boxShadow: "none", ml: 1 }}>
          <Grid container spacing={2}>
            <Grid item>
              <CardMedia
                component="img"
                image="/images/static/carousal/1.jpg"
                alt="featured image"
                height="60px"
                width="60px"
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                Lizard
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "left",
                  fontSize: "10px",
                }}
              >
                March 18, 2023
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Card sx={{ my: 2, boxShadow: "none", ml: 1 }}>
          <Grid container spacing={2}>
            <Grid item>
              <CardMedia
                component="img"
                image="/images/static/carousal/1.jpg"
                alt="featured image"
                height="60px"
                width="60px"
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                Lizard
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "left",
                  fontSize: "10px",
                }}
              >
                March 18, 2023
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Card sx={{ my: 2, boxShadow: "none", ml: 1 }}>
          <Grid container spacing={2}>
            <Grid item>
              <CardMedia
                component="img"
                image="/images/static/carousal/1.jpg"
                alt="featured image"
                height="60px"
                width="60px"
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                Lizard
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "left",
                  fontSize: "10px",
                }}
              >
                March 18, 2023
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>

      <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 2, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        Tags
      </Typography>

      <Box component="div" sx={{ mx: 1, my: 2 }}>
        <Grid container spacing={1}>
          <Grid item>
            <Link sx={{ textDecoration: "none" }} href="/#">
              <Chip label="Chip Filled" />
            </Link>
          </Grid>
          <Grid item>
            <Link sx={{ textDecoration: "none" }}>
              <Chip label="Chip Filled" />
            </Link>
          </Grid>
          <Grid item>
            <Link sx={{ textDecoration: "none" }}>
              <Chip label="Chip Filled" />
            </Link>
          </Grid>
          <Grid item>
            <Link sx={{ textDecoration: "none" }}>
              <Chip label="Chip Filled" />
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 6, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        ARCHIVES
      </Typography>

      <Virtuoso
        style={{ height: "250px" }}
        totalCount={50}
        data={times}
        itemContent={(index, data) => <CustomList index={index} data={data} />}
      />
    </Box>
  );
};

export default BlogSidebar;
