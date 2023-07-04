import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  getUserDetails,
  updateUser,
} from "../../actions/userActions";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";

const AddEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");

  const [passwordMatchError, setPasswordMatchError] = useState();
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const { id } = useParams();
  const location = useLocation();
  const url = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loading,
    error,
    success: successCreate,
  } = useSelector((state) => state.userCreate);
  const { user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success: successUpdate } = useSelector((state) => state.userUpdate);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      if (url.includes("add_user")) {
        if (successCreate) {
          navigate("/admin/users");
        }
      } else if (url.includes("edit") && id) {
        if (successUpdate) {
          navigate("/admin/users");
        } else if (!user.name) {
          dispatch(getUserDetails(id));
        } else {
          setName(user.name || "");
          setEmail(user.email || "");
          setStreet(user.address?.street || "");
          setCity(user.address?.city || "");
          setCountry(user.address?.country || "");
          setCode(user.address?.code || "");
          setPhone(user.phone || "");
        }
      }
    }
  }, [
    navigate,
    successCreate,
    successUpdate,
    dispatch,
    id,
    url,
    user,
    userInfo,
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

    if (url.includes("add_user")) {
      if (name === "" || email === "" || password === "") {
        if (name === "") setNameError("Name is required");
        if (email === "") setEmailError("Email is required");
        if (password === "") setPasswordError("Password is required");
      } else if (password !== confirmPassword) {
        setPasswordMatchError("Password doesnot match!!");
      } else {
        dispatch(
          createUser({
            name,
            email,
            password,
            address,
            phone,
          })
        );
      }
    } else if (url.includes("edit") && id) {
      if (password !== confirmPassword) {
        setPasswordMatchError("Password doesnot match!!");
      } else {
        dispatch(
          updateUser({
            id,
            name,
            email,
            password,
            address,
            phone,
          })
        );
      }
    }
  };

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">
          {url.includes("add_user")
            ? "Register New User"
            : url.includes("edit") && id
            ? "Edit User Details"
            : "You are at wrong path!!!"}
        </Typography>
      </Breadcrumbs>

      <Divider />

      <Container component="main" maxWidth="sm" sx={{ width: "100%", mt: 5 }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity={"error"} title={"Error!!"}>
            {error}
          </Message>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sm={12}>
                <TextField
                  margin="normal"
                  size="medium"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  error={!!nameError}
                  helperText={nameError}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  error={!!emailError}
                  helperText={emailError}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  required={url.includes("add_user")}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={!!passwordError}
                  helperText={passwordError}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  required={url.includes("add_user")}
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  error={!!passwordMatchError}
                  helperText={passwordMatchError}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <TextField
                  margin="normal"
                  size="medium"
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  value={street}
                  onChange={(event) => setStreet(event.target.value)}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  fullWidth
                  id="code"
                  label="Postal Code"
                  name="code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: "14px",
                    fontSize: "15px",
                    letterSpacing: 2,
                  }}
                >
                  {url.includes("add_user")
                    ? "Create"
                    : url.includes("edit") && id
                    ? "Update"
                    : ""}
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </MainComponent>
  );
};

export default AddEditUser;
