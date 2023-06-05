import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import BlogSidebar from "../components/BlogSidebar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import HeroImage from "../components/HeroImage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogById } from "../actions/blogActions";
import { Link, useParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { formattedDate } from "../helper/authorHelper";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { blog, loading, error } = useSelector((state) => state.blogDetails);

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch, id]);
  const handleSubmit = () => {};

  return (
    <Box component="div">
      <HeroImage title={blog && blog.title} imgPath="/images/static/blog.jpg" />

      <Box
        component="div"
        maxWidth={"1150px"}
        sx={{ mx: { md: "auto", sm: 3, xs: 2 } }}
      >
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error" title={"Error"}>
            {error}
          </Message>
        ) : (
          <Grid container spacing={2} sx={{ mx: "auto" }}>
            <Grid item md={8} sm={12} xs={12}>
              <Box component="div" sx={{ mr: 5, mt: 8 }}>
                <Box
                  component="div"
                  sx={{
                    position: "relative",
                    marginBottom: "20px",
                    backgroundImage: `url("/${blog.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "500px",
                    color: "white",
                    borderRadius: 0,
                  }}
                />

                <Typography
                  variant="subtitle2"
                  textAlign="left"
                  color="error"
                  fontWeight="bold"
                >
                  {blog.categories.slice(0, -1).join(", ") +
                    (blog.categories.length > 1 ? ", " : "") +
                    blog.categories[blog.categories.length - 1]}
                </Typography>

                <Typography
                  variant="h3"
                  textAlign="left"
                  fontWeight="bold"
                  fontFamily="Roboto"
                  sx={{
                    my: 3,
                    fontSize: "40px",
                    letterSpacing: "1.5px",
                    color: "#272643",
                  }}
                >
                  {blog.title}
                </Typography>

                <Divider />

                <Typography
                  variant="subtitle2"
                  textAlign="left"
                  sx={{ my: 1, color: "#9B908A", fontWeight: "bold" }}
                >
                  {formattedDate(blog.createdAt)}
                </Typography>

                <Typography variant="body2" textAlign="justify" sx={{ my: 3 }}>
                  {blog.description}
                </Typography>

                <Box component="div" sx={{ mx: 1, mt: 6, mb: 3 }}>
                  <Grid container spacing={1}>
                    {blog.tags.map((tag, idx) => (
                      <Grid item key={idx}>
                        <MuiLink
                          component={Link}
                          sx={{ textDecoration: "none" }}
                          to={`/`}
                        >
                          <Chip
                            label={`${tag}`}
                            variant="outlined"
                            color="primary"
                          />
                        </MuiLink>
                      </Grid>
                    ))}

                    {/* <Grid item>
                      <Link sx={{ textDecoration: "none" }}>
                        <Chip
                          label="Chip Filled"
                          variant="outlined"
                          color="primary"
                        />
                      </Link>
                    </Grid>

                    <Grid item>
                      <Link sx={{ textDecoration: "none" }}>
                        <Chip
                          label="Chip Filled"
                          variant="outlined"
                          color="primary"
                        />
                      </Link>
                    </Grid>

                    <Grid item>
                      <Link sx={{ textDecoration: "none" }}>
                        <Chip
                          label="Chip Filled"
                          variant="outlined"
                          color="primary"
                        />
                      </Link>
                    </Grid> */}
                  </Grid>
                </Box>

                <Divider />

                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item>
                    <Button
                      variant="body2"
                      sx={{ px: 2, py: 1.5, textTransform: "capitalize" }}
                    >
                      <FavoriteBorderIcon sx={{ mr: 1 }} /> {blog.likes.length}{" "}
                      people like this
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={{ py: 1.5, px: 2 }}>
                      {blog.comments.length}{" "}
                      {blog.comments.length === 1 ? "Comment" : "Comments"}
                    </Typography>
                  </Grid>
                </Grid>

                <Box component="div" sx={{ mb: 8 }}>
                  <Typography
                    variant="h6"
                    textAlign="left"
                    sx={{ px: 2, py: 1.5, my: 3 }}
                  >
                    <ForumOutlinedIcon /> Comments
                  </Typography>

                  {blog.comments.length === 0
                    ? "No Comment"
                    : blog.comments.map((comment, idx) => (
                        <Card
                          sx={{ my: 3, ml: 3, boxShadow: "none" }}
                          key={idx}
                        >
                          <CardContent>
                            {/* <Grid container spacing={2}>
                              <Grid item>
                                <Avatar
                                  src={comment.user.avatar}
                                  alt={comment.user.name}
                                  // sx={{ mr: 2 }}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="subtitle1"
                                  // textAlign="left"
                                >
                                  {comment.user.name}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                  {comment.details}
                                </Typography>
                                <Typography variant="body2" sx={{}}>
                                  {formattedDate(comment.createdAt)}
                                  <Typography
                                    variant="body2"
                                    component="span"
                                    sx={{ ml: 5 }}
                                  >
                                    <Button
                                      sx={{
                                        textTransform: "capitalize",
                                        color: "#000",
                                      }}
                                    >
                                      Like
                                    </Button>
                                    ({comment.likes.length})
                                  </Typography>
                                </Typography>
                              </Grid>
                            </Grid> */}
                          </CardContent>
                        </Card>
                      ))}

                  {/* <Card sx={{ my: 3, ml: 3, boxShadow: "none" }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item md={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/authors/14.jpg"
                            sx={{ height: 100, width: 100 }}
                          />
                          <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            sx={{ p: 2, textAlign: "left" }}
                          >
                            John Doe
                          </Typography>
                        </Grid>
                        <Grid item md={10}>
                          <Typography variant="body2" textAlign="left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est impedit, laudantium distinctio id culpa
                            quis sequi iste suscipit quae cum sed velit nihil
                            deserunt quos. Aliquid tempora corporis magni
                            magnam, dolor, ipsa, blanditiis tenetur velit cum
                            laborum quis in! Ab itaque sapiente veritatis totam
                            corporis laudantium tempora, animi excepturi
                            perferendis minima hic vitae sint eaque voluptatem
                            dicta, aliquid nam, fugit quibusdam aliquam? Amet id
                            tempore aliquid, perferendis blanditiis provident ut
                            magnam delectus nostrum, modi fugit debitis itaque,
                            expedita vitae velit ducimus neque praesentium esse
                            nulla quos eveniet! Veritatis sint corporis,
                            exercitationem accusamus inventore debitis doloribus
                            obcaecati sed ea ipsum vel.
                          </Typography>
                          <Box
                            component="div"
                            sx={{ mt: 2, textAlign: "left" }}
                          >
                            <Typography variant="body2" fontWeight="bold">
                              March 23, 2023
                              <Typography
                                variant="body2"
                                component="span"
                                sx={{ ml: 5 }}
                              >
                                <Button
                                  sx={{
                                    textTransform: "capitalize",
                                    color: "#000",
                                  }}
                                >
                                  Like
                                </Button>
                              </Typography>
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card> */}
                </Box>

                <Divider />

                <Box component="div" sx={{ mt: 2, mb: 15 }}>
                  <Typography
                    variant="h5"
                    textAlign="left"
                    sx={{ m: 2 }}
                    fontFamily="Roboto"
                  >
                    Leave a Comment
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ mt: 4, mx: 2 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      multiline
                      rows={8}
                      id="comment"
                      label="Comment"
                      name="comment"
                    />
                    <Grid container spacing={2}>
                      <Grid item md={6} sm={12} xs={12}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="name"
                          label="Name"
                          name="name"
                          size="small"
                        />
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email (won't be published)"
                          name="email"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="subject"
                      label="Subject"
                      name="subject"
                      size="small"
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 2, bgcolor: "#272643" }}
                      size="large"
                      fullWidth
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} sm={9} xs={12}>
              <BlogSidebar />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default BlogDetails;
