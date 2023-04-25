import {
  Box,
  Breadcrumbs,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Grid,
  Link,
  Rating,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const items = [
  "all",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  " r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Authors = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleItemClick = (event) => {
    // event.preventDefault()
    console.log(event.currentTarget.textContent);
  };

  return (
    <div>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Authors List</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ maxWidth: 1000, mx: { md: "auto", sm: 3, xs: 1 }, my: 3 }}>
        <Typography variant="h3" sx={{ p: 2, mb: 3, fontWeight: "500" }}>
          Author of the Week
        </Typography>

        <Grid container spacing={3}>
          <Grid item md={4} sm={5} xs={6}>
            <Card sx={{ borderRadius: 0, boxShadow: "none", p: 1 }}>
              <CardMedia
                component="img"
                src="/images/authors/14.jpg"
                alt="title"
                height="300"
              />
            </Card>
          </Grid>
          <Grid item md={3} sm={7} xs={6}>
            <Typography
              variant="body2"
              fontWeight={"bold"}
              sx={{ fontSize: "16px", p: 1 }}
            >
              <Link href="/authors/1/details" sx={{ textDecoration: "none" }}>
                John Doe
              </Link>
            </Typography>
            <Typography variant="subtitle2" sx={{ p: 1 }}>
              12 published work
            </Typography>
            <Typography variant="body2" sx={{ p: 1, mt: 2, fontSize: "12px" }}>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Voluptate officiis rem delectus enim iste est modi ratione
              debitis architecto eaque."
            </Typography>
          </Grid>

          <Grid item md={5} sm={12} xs={12}>
            <Grid container spacing={3}>
              <Grid item md={6} sm={6} xs={6}>
                <Typography variant="h6">Best Rated</Typography>
                <Card sx={{ my: 2 }}>
                  <CardActionArea href="/book/1/details">
                    <CardMedia
                      component="img"
                      src="/images/static/carousal/1.jpg"
                      alt="title"
                      height="250"
                    />
                    <Box
                      component="div"
                      sx={{
                        backgroundColor: "rgba(39, 38, 67, 0.6)",
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
                      <Rating
                        name="half-rating"
                        value={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "15px", color: "#fff", my: 2 }}
                      >
                        Rated by 300 people
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <Typography variant="h6">Most Sold</Typography>
                <Card sx={{ my: 2 }}>
                  <CardActionArea href="/book/1/details">
                    <CardMedia
                      component="img"
                      src="/images/static/carousal/1.jpg"
                      alt="title"
                      height="250"
                    />
                    <Box
                      component="div"
                      sx={{
                        backgroundColor: "rgba(39, 38, 67, 0.6)",
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
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "15px", color: "#fff", my: 2 }}
                      >
                        500 copy sold
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 8, mb: 5 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {items.map((item, index) => (
            <Tab
              key={index}
              label={item}
              value={index}
              onClick={handleItemClick}
            />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          mx: "auto",
          my: 5,
          maxWidth: { md: 1200, sm: 700, xs: 300 },
          minWidth: 250,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((val, idx) => {
            return (
              <Grid item key={idx}>
                <Link
                  href="/authors/1/profile"
                  sx={{ textDecoration: "none", color: "#000" }}
                >
                  <Avatar
                    alt="author"
                    src="/images/authors/14.jpg"
                    sx={{ width: 180, height: 180, mb: 3, mx: "auto" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
                  >
                    John Doe
                  </Typography>
                  <Typography
                    variant="subtitle"
                    sx={{ color: "#9B908A", fontSize: "17px" }}
                  >
                    12 Published Books
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Stack spacing={2} sx={{ mt: 10, mb: 6, alignItems: "center" }}>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon,
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default Authors;
