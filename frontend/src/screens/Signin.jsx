import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import Navbar from "../layouts/Navbar";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const redirect = location.search ? `/${location.search.split("=")[1]}` : "/";

  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate(redirect);
      }
    }
  }, [navigate, userInfo, redirect]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    // console.log(email, password);
    dispatch(loginUser(email, password));
  };
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs" sx={{ minHeight: "70vh" }}>
        <CssBaseline />
        <Box
          sx={{
            my: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {loading && <Loader />}
          {error && (
            <Message severity="error" title="Error!">
              {error}
            </Message>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, my: 6 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink
                  component={Link}
                  to="/forgetpassword"
                  variant="body2"
                  sx={{}}
                >
                  Forgot password?
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink component={Link} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </MuiLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signin;
