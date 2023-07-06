import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link as MuiLink,
  Grid,
  TextField,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearSuccess,
  getUserDetails,
  updateUserProfile,
} from "../actions/userActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { USER_UPDATE_PROFILE_RESET } from "../constants/user";
import {
  blogClearSuccess,
  deleteBlog,
  getMyBlogList,
} from "../actions/blogActions";
import { formattedDate } from "../helper/helperFunction";
import Navbar from "../layouts/Navbar";
import { BLOG_DETAILS_RESET } from "../constants/blog";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordError, setPasswordError] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, user, error } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdateProfile);
  const { success: createBlogSuccess } = useSelector(
    (state) => state.blogCreate
  );

  const { success: updateBlogSuccess } = useSelector(
    (state) => state.blogUpdate
  );

  const { success: deleteBlogSuccess } = useSelector(
    (state) => state.blogDelete
  );

  const {
    loading: loadingBlogs,
    error: errorBlogs,
    myBlogs: { blogs, count },
  } = useSelector((state) => state.userBlogList);

  useEffect(() => {
    dispatch({ type: BLOG_DETAILS_RESET });
    if (!userInfo) {
      navigate("/signin");
    } else {
      dispatch(getMyBlogList());
      if (!user.name) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name || "");
        setEmail(user.email || "");
        setStreet(user.address?.street || "");
        setCity(user.address?.city || "");
        setCountry(user.address?.country || "");
        setCode(user.address?.code || "");
        setPhone(user.phone || "");

        if (
          success ||
          createBlogSuccess ||
          updateBlogSuccess ||
          deleteBlogSuccess
        ) {
          const timer = setTimeout(() => {
            if (createBlogSuccess || updateBlogSuccess || deleteBlogSuccess) {
              dispatch(blogClearSuccess());
            } else if (success) {
              dispatch(clearSuccess());
            }
          }, 6000);

          return () => clearTimeout(timer);
        }
      }
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    user,
    success,
    createBlogSuccess,
    updateBlogSuccess,
    deleteBlogSuccess,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirm_password");
    const address = {
      street: data.get("street"),
      city: data.get("city"),
      country: data.get("country"),
      code: data.get("code"),
    };
    const phone = data.get("phone");

    if (password !== confirmPassword) {
      setPasswordError("Password doesnot match!!");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name,
          email,
          password,
          address,
          phone,
        })
      );
      // console.log(name, email, password);
    }
  };

  const handleEdit = (event, id) => {
    navigate(`/blog/${id}/edit`);
  };

  const handleDeleteSubmit = (event, id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteBlog(id));
    }
    // console.log(id);
  };
  return (
    <>
      <Navbar />
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink underline="hover" color="inherit" component={Link} to="/">
            Home
          </MuiLink>
          <MuiLink
            underline="hover"
            color="inherit"
            component={Link}
            to="/profile"
          >
            Profile
          </MuiLink>
          <Typography color="text.primary">{user.name}</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box
        sx={{
          maxWidth: "1100px",
          mx: { md: "auto", sm: 2, xs: 1 },
          my: 6,
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={4.5}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "left",
                fontFamily: "Nunito",
                letterSpacing: "3",
                mx: 2,
              }}
            >
              User Profile
            </Typography>
            {success && (
              <Message severity={"success"} title={"Success!"}>
                Profile Updated
              </Message>
            )}
            {error && (
              <Message severity="error" title={"Error!!"}>
                Error
              </Message>
            )}
            {loading ? (
              <Loader />
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3, mx: 2 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  // autoComplete="name"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  // autoComplete="email"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  error={!!passwordError}
                  helperText={passwordError}
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  value={street}
                  onChange={(event) => setStreet(event.target.value)}
                  // autoComplete="name"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="code"
                  label="Postal Code"
                  name="code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  // autoComplete="name"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  // autoComplete="name"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    my: 6,
                  }}
                >
                  Update Profile
                </Button>
              </Box>
            )}
          </Grid>

          <Grid item md={7}>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    fontFamily: "Nunito",
                    letterSpacing: "3",
                    mx: 3,
                  }}
                >
                  Manage Your Articles
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/blog/create`}
                >
                  <AddIcon /> New Article
                </Button>
              </Grid>
            </Grid>

            <Box sx={{ mx: 3 }}>
              {createBlogSuccess && (
                <Message severity={"success"} title={"Added"} marginY={3}>
                  New Article has been added.
                </Message>
              )}
              {updateBlogSuccess && (
                <Message severity={"success"} title={"Updated"} marginY={3}>
                  Article has been updated.
                </Message>
              )}

              {deleteBlogSuccess && (
                <Message severity={"success"} title={"Deleted"} marginY={3}>
                  Article has been deleted.
                </Message>
              )}

              {loadingBlogs ? (
                <Loader />
              ) : errorBlogs ? (
                <Message severity={"error"} title={"Error!!"}>
                  {errorBlogs}
                </Message>
              ) : count === 0 ? (
                <Message severity={"info"} title={"Empty"}>
                  No Article Found
                </Message>
              ) : (
                blogs &&
                blogs.map(
                  (
                    { _id, title, description, image, createdAt, isHidden },
                    idx
                  ) => (
                    <Card
                      sx={{ my: 4, boxShadow: "none", mx: "auto" }}
                      key={idx}
                      height="150px"
                    >
                      <Grid container>
                        <Grid item xs={12} sm={4} md={5}>
                          <CardMedia
                            component="img"
                            image={`/${
                              image ? image : "images/sample_blog.png"
                            }`}
                            alt={title}
                            height="100%"
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
                              {isHidden && (
                                <Chip label={"Warning!"} color="error" />
                              )}
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
                              Post on {formattedDate(createdAt)}
                            </Typography>
                            <Divider />
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                my: 1,
                                fontSize: "15px",
                              }}
                            >
                              {description.split(" ").slice(0, 20).join(" ")}
                              .....
                            </Typography>
                          </CardContent>
                          <CardActions sx={{ ml: 1 }}>
                            <Grid container justifyContent={"space-between"}>
                              <Grid item>
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
                              </Grid>

                              <Grid item>
                                <IconButton
                                  color="secondary"
                                  size="small"
                                  onClick={(event) => handleEdit(event, _id)}
                                >
                                  <ModeEditIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                  color="error"
                                  size="small"
                                  onClick={(event) =>
                                    handleDeleteSubmit(event, _id)
                                  }
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Grid>
                      </Grid>
                    </Card>
                  )
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserProfile;
