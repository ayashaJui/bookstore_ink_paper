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

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../actions/blogActions";
import { formattedDate } from "../helper/authorHelper";
import { Link } from "react-router-dom";

const Blogs = () => {
  const dispatch = useDispatch();

  const { blogs: allBlogs } = useSelector((state) => state.blogList);
  const { blogs } = allBlogs;

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <Box component="div">
      <HeroImage title="Blog" imgPath="/images/static/blog.jpg" />

      <Box
        component="div"
        maxWidth={"1150px"}
        sx={{ mx: { md: "auto", sm: 3, xs: 2 } }}
      >
        <Grid container spacing={3}>
          <Grid item md={8} sm={12} xs={12} sx={{ mx: "auto" }}>
            {blogs &&
              blogs.map(
                ({ _id, title, user, description, image, createdAt }, idx) => (
                  <Card
                    sx={{ my: 4, boxShadow: "none", mx: "auto" }}
                    key={idx}
                    height="300px"
                  >
                    <Grid container>
                      <Grid item xs={12} sm={4} md={5}>
                        <CardMedia
                          component="img"
                          image={`/${image}`}
                          alt={title}
                          height="300px"
                          sx={{ objectFit: "cover" }}
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
                            {title}
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
                            POSTS BY {user.name} / {formattedDate(createdAt)}
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
                            {description.split(" ").slice(0, 30).join(" ")}
                            ......
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ ml: 1, mb: 2 }}>
                          <Button
                            component={Link}
                            size="small"
                            to={`/blog/${_id}/details`}
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
                )
              )}

            {/* <Card sx={{ my: 4, boxShadow: "none" }}>
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
            </Card> */}

            {blogs && blogs.length > 0 && (
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
            )}
          </Grid>

          <Grid item md={3} sm={9} xs={12} sx={{ mx: "auto" }}>
            <BlogSidebar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Blogs;
