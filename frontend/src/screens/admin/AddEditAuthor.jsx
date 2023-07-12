import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createAuthor,
  getAuthorDetails,
  updateAuthor,
} from "../../actions/authorActions";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import { formattedDate } from "../../helper/helperFunction";
import axios from "axios";

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
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [descriptionError, setDescriptionError] = useState();

  const { id } = useParams();
  const location = useLocation();
  const url = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success: successCreate } = useSelector((state) => state.authorCreate);
  const { loading, error, author } = useSelector(
    (state) => state.authorDetails
  );

  const { userInfo } = useSelector((state) => state.userLogin);
  const { success: successUpdate } = useSelector((state) => state.authorUpdate);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      if (url.includes("add_author")) {
        if (successCreate) {
          navigate("/admin/authors");
        }
      } else if (url.includes("edit") && id) {
        if (!author?.authorInfo) {
          dispatch(getAuthorDetails(id));
        } else if (successUpdate) {
          navigate("/admin/authors");
        } else {
          setName(author.authorInfo?.name || "");
          setEmail(author.authorInfo?.email || "");
          setDescription(author.authorInfo?.description || "");
          setWebsite(author.authorInfo?.website || "");
          setDateOfBirth(formattedDate(author?.authorInfo?.dob) || "");
          setDateOfDeath(formattedDate(author.authorInfo?.dod) || "");
          setFacebook(author.authorInfo?.social?.facebook || "");
          setTwitter(author.authorInfo?.social?.twitter || "");
          setInstagram(author.authorInfo?.social?.instagram || "");
          setYoutube(author.authorInfo?.social?.youtube || "");
        }
      }
    } else {
      navigate("/signin");
    }
  }, [
    navigate,
    successCreate,
    dispatch,
    id,
    url,
    successUpdate,
    author,
    userInfo,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const description = data.get("description");
    const website = data.get("website");
    const dob = new Date(data.get("dob"));
    const dod = new Date(data.get("dod"));
    const social = {
      facebook: data.get("facebook"),
      twitter: data.get("twitter"),
      instagram: data.get("instagram"),
      youtube: data.get("youtube"),
    };

    if (url.includes("add_author")) {
      if (name === "" || email === "" || description === "") {
        if (name === "") setNameError("Name is required");
        if (email === "") setEmailError("Email is required");
        if (description === "") setDescriptionError("Description is required");
      } else {
        dispatch(
          createAuthor({
            name,
            email,
            image,
            description,
            website,
            dob,
            dod,
            social,
          })
        );
      }
    } else if (url.includes("edit") && id) {
      dispatch(
        updateAuthor({
          id,
          name,
          email,
          image,
          description,
          website,
          dob,
          dod,
          social,
        })
      );
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/upload/author",
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
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
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity={"error"} title={"Error!"}>
            {error}
          </Message>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              size="medium"
              required
              fullWidth
              label="Name of Author"
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
              fullWidth
              required
              multiline
              rows={8}
              label="Description"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              error={!!descriptionError}
              helperText={descriptionError}
            />
            <TextField
              margin="normal"
              size="medium"
              fullWidth
              type="file"
              // value={image}
              inputProps={{
                accept: "image/*", // Specify the allowed file types
              }}
              onChange={handleFileChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span>{uploading && <Loader />}</span>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              size="medium"
              fullWidth
              label="Date of Birth (yyyy-mm-dd)"
              name="dob"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
            <TextField
              margin="normal"
              size="medium"
              fullWidth
              label="Date of Death (yyyy-mm-dd)"
              name="dod"
              value={dateOfDeath}
              onChange={(event) => setDateOfDeath(event.target.value)}
            />
            <TextField
              margin="normal"
              size="medium"
              fullWidth
              label="Website"
              name="website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
            <TextField
              margin="normal"
              size="medium"
              fullWidth
              label="Youtube Link"
              name="youtube"
              value={youtube}
              onChange={(event) => setYoutube(event.target.value)}
            />
            <TextField
              margin="normal"
              type="url"
              size="medium"
              fullWidth
              label="Twitter Link"
              name="twitter"
              value={twitter}
              onChange={(event) => setTwitter(event.target.value)}
            />

            <TextField
              margin="normal"
              type="url"
              size="medium"
              fullWidth
              label="Facebook Link"
              name="facebook"
              value={facebook}
              onChange={(event) => setFacebook(event.target.value)}
            />

            <TextField
              margin="normal"
              type="url"
              size="medium"
              fullWidth
              label="Instagram Link"
              name="instagram"
              value={instagram}
              onChange={(event) => setInstagram(event.target.value)}
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
                bgcolor: "#272643",
              }}
            >
              {url.includes("add_author")
                ? "Create"
                : url.includes("edit") && id
                ? "Update"
                : ""}
            </Button>
          </Box>
        )}
      </Container>
    </MainComponent>
  );
};

export default AddEditAuthor;
