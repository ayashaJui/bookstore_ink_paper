import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword } from "../actions/userActions";
import { USER_FORGOT_PASSWORD_RESET } from "../constants/user";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import Navbar from "../layouts/Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.userForgotPassword
  );

  useEffect(() => {
    return () => {
      dispatch({ type: USER_FORGOT_PASSWORD_RESET });
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
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
            Forgot Password
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: "center" }}>
            Enter your account email and we'll send you a reset link.
          </Typography>

          {loading && <Loader />}
          {error && (
            <Message severity="error" title="Error!">
              {error}
            </Message>
          )}
          {success ? (
            <Message severity="success" title="Email Sent!">
              Check your inbox for the password reset link. It expires in 30 minutes.
            </Message>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3, width: "100%" }}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#272643" }}
              >
                Send Reset Link
              </Button>
            </Box>
          )}

          <Button component={Link} to="/signin" sx={{ mt: 1, textTransform: "none" }}>
            Back to Sign In
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ForgotPassword;
