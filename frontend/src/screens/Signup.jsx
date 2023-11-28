import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { registerUser } from "../actions/userActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import Navbar from "../layouts/Navbar";

const Signup = () => {
  const [passwordError, setPasswordError] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirm_password");

    if (password !== confirmPassword) {
      setPasswordError("Password doesnot match!!");
    } else {
      dispatch(registerUser(name, email, password));
    }
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
          <Typography component="h1" variant="h5">
            Sign up
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
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            {/* <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
          /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirm_password"
              error={!!passwordError}
              helperText={passwordError}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, my: 6 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink to="/forgetpassword" variant="body2" sx={{}} component={Link}>
                  Forgot password?
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink to="/signin" variant="body2" component={Link}>
                  {"Already have an account? Sign in"}
                </MuiLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
