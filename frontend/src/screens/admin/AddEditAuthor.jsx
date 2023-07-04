import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddEditAuthor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfDeath, setDateOfDeath] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [descriptionError, setDescriptionError] = useState();

  const { id } = useParams();
  const location = useLocation();
  const url = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // const name = data.get("name");
    // const email = data.get("email");
    // const password = data.get("password");
    // const confirmPassword = data.get("confirm_password");
    // const address = {
    //   street: data.get("street"),
    //   city: data.get("city"),
    //   country: data.get("country"),
    //   code: data.get("code"),
    // };
    // const phone = data.get("phone");

    // if (url.includes("add_user")) {
    //   if (name === "" || email === "" || password === "") {
    //     if (name === "") setNameError("Name is required");
    //     if (email === "") setEmailError("Email is required");
    //     if (password === "") setPasswordError("Password is required");
    //   } else if (password !== confirmPassword) {
    //     setPasswordMatchError("Password doesnot match!!");
    //   } else {
    //     dispatch(
    //       createUser({
    //         name,
    //         email,
    //         password,
    //         address,
    //         phone,
    //       })
    //     );
    //   }
    // } else if (url.includes("edit") && id) {
    //   if (password !== confirmPassword) {
    //     setPasswordMatchError("Password doesnot match!!");
    //   } else {
    //     dispatch(
    //       updateUser({
    //         id,
    //         name,
    //         email,
    //         password,
    //         address,
    //         phone,
    //       })
    //     );
    //   }
    // }
  };

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">
          {url.includes("add_author")
            ? "Add New Author"
            : url.includes("edit") && id
            ? "Edit Author Details"
            : "You are at wrong path!!!"}
        </Typography>
      </Breadcrumbs>

      <Divider />

      <Container component="main" maxWidth="sm" sx={{ width: "100%", mt: 5 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            size="medium"
            required
            fullWidth
            label="Name of Author"
            name="name"
            // value={name}
            // onChange={(event) => setName(event.target.value)}
            // error={!!nameError}
            // helperText={nameError}
          />
          <TextField
            margin="normal"
            size="medium"
            required
            fullWidth
            label="Email"
            name="email"
            // onChange={(event) => setEmail(event.target.value)}
            // value={email}
            // error={!!emailError}
            // helperText={emailError}
          />

          <TextField
            margin="normal"
            size="medium"
            fullWidth
            required
            multiline
            rows={8}
            label="Description"
            name="description"
            // value={phone}
            // onChange={(event) => setPhone(event.target.value)}
          />

          <TextField
            margin="normal"
            size="medium"
            fullWidth
            label="Date of Birth"
            name="dob"
            // value={street}
            // onChange={(event) => setStreet(event.target.value)}
          />
          <TextField
            margin="normal"
            size="medium"
            fullWidth
            label="Date of Death"
            name="dod"
            // value={street}
            // onChange={(event) => setStreet(event.target.value)}
          />
          <TextField
            margin="normal"
            size="medium"
            fullWidth
            label="Website"
            name="website"
            // value={city}
            // onChange={(event) => setCity(event.target.value)}
          />
          <TextField
            margin="normal"
            size="medium"
            fullWidth
            label="Youtube Link"
            name="youtube"
            // value={code}
            // onChange={(event) => setCode(event.target.value)}
          />
          <TextField
            margin="normal"
            type="url"
            size="medium"
            fullWidth
            label="Twitter Link"
            name="twitter"
            // value={country}
            // onChange={(event) => setCountry(event.target.value)}
          />

          <TextField
            margin="normal"
            type="url"
            size="medium"
            fullWidth
            label="Facebook Link"
            name="facebook"
            // value={country}
            // onChange={(event) => setCountry(event.target.value)}
          />

          <TextField
            margin="normal"
            type="url"
            size="medium"
            fullWidth
            label="Instagram Link"
            name="instagram"
            // value={country}
            // onChange={(event) => setCountry(event.target.value)}
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
            {url.includes("add_author")
              ? "Create"
              : url.includes("edit") && id
              ? "Update"
              : ""}
          </Button>
        </Box>
      </Container>
    </MainComponent>
  );
};

export default AddEditAuthor;
