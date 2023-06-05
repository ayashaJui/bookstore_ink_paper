import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlogSidebar from "../components/BlogSidebar";
import HeroImage from "../components/HeroImage";

const Blogs = () => {
  return (
    <Box component="div" >
      <HeroImage title="Blog" imgPath="/images/static/blog.jpg" />

      <Box component="div" maxWidth={"1150px"} sx={{ mx: {md: 'auto', sm: 3, xs: 2}}}>
        <Grid container spacing={3}>
          <Grid item md={8} sm={12} xs={12} sx={{mx: 'auto'}}>
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
                      href="/blogs/1/details"
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

            <Stack spacing={2} sx={{ mt: 10, mb: 6, alignItems: "center" }}>
              <Pagination
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item md={3} sm={9} xs={12} sx={{mx: 'auto'}}>
            <BlogSidebar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Blogs;
