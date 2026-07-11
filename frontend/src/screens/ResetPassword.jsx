import {
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../actions/userActions";
import { USER_RESET_PASSWORD_RESET } from "../constants/user";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import Navbar from "../layouts/Navbar";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector(
    (state) => state.userResetPassword
  );

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch({ type: USER_RESET_PASSWORD_RESET });
        navigate("/signin");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    dispatch(resetPassword(token, password));
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
            Reset Password
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: "center" }}>
            Enter your new password below.
          </Typography>

          {loading && <Loader />}
          {error && (
            <Message severity="error" title="Error!">
              {error}
            </Message>
          )}
          {success ? (
            <Message severity="success" title="Password Reset!">
              Your password has been updated. Redirecting to sign in…
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
                label="New Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((p) => !p)} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Confirm New Password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword((p) => !p)} edge="end">
                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#272643" }}
              >
                Reset Password
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

export default ResetPassword;
