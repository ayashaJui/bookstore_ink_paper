import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../layouts/Navbar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, getBlogById } from "../actions/blogActions";

const CreateEditBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");

  const [titleError, setTitleError] = useState();
  const [descriptionError, setDescriptionError] = useState();

  const { id } = useParams();
  const location = useLocation();
  const url = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loading,
    error,
    success: successCreate,
  } = useSelector((state) => state.blogCreate);
//   const { blog } = useSelector((state) => state.blogDetails);
  //   const { success: successUpdate } = useSelector((state) => state.blogUpdate);

  useEffect(() => {
    if (url.includes("create")) {
      if (successCreate) {
        navigate("/profile");
      }
    } else if (url.includes("edit") && id) {
      //   if (successUpdate) {
      //     navigate("/");
      //   } else if (!blog.title) {
      //     dispatch(getBlogById(id));
      //   } else {
      //     setName(blog.title || "");
      //     setName(blog.description || "");
      //     setName(blog.categories || "");
      //     setName(blog.tags || "");

      //   }
      console.log("hello");
    }
  }, [navigate, successCreate, dispatch, id, url]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title");
    const description = data.get("description");
    const categories = data.get("categories").split(",");
    const tags = data.get("tags").split(",");

    if (url.includes("create")) {
      if (title === "" || description === "") {
        if (title === "") setTitleError("Title is required");
        if (description === "") setDescriptionError("Description is required");
      } else {
        dispatch(
          createBlog({
            title,
            tags,
            description,
            categories,
          })
        );
      }
    } else if (url.includes("edit") && id) {
      //   dispatch(
      //     updateUser({
      //       id,
      //       name,
      //       email,
      //       password,
      //       address,
      //       phone,
      //     })
      //   );
    }
  };

  return (
    <div>
      <Navbar />

      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink underline="hover" color="inherit" href="/">
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            underline="hover"
            color="inherit"
            to="/blog"
          >
            Blog
          </MuiLink>
          <Typography color="text.primary">
            {url.includes("create")
              ? "Create"
              : url.includes("edit") && id
              ? "Edit"
              : ""}
          </Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box
        align="center"
        sx={{ maxWidth: 1000, minWidth: 250, mx: { md: "auto", sm: 4 }, my: 6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#272643", fontFamily: "nunito" }}
        >
          {url.includes("create")
            ? "Create a new article"
            : url.includes("edit") && id
            ? "Edit your article"
            : ""}
        </Typography>

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
              sx={{
                mt: 3,
              }}
            >
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                label="Blog Title"
                name="title"
                autoFocus
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                error={!!titleError}
                helperText={titleError}
              />

              <TextField
                margin="normal"
                size="medium"
                fullWidth
                label="Categories"
                name="categories"
                value={categories}
                onChange={(event) => setCategories(event.target.value)}
              />
              <TextField
                margin="normal"
                size="medium"
                fullWidth
                label="Tags"
                name="tags"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
              />
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                label="Description"
                multiline
                rows={8}
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                error={!!descriptionError}
                helperText={descriptionError}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#272643",
                  letterSpacing: 2,
                }}
              >
                {url.includes("create")
                  ? "Create"
                  : url.includes("edit") && id
                  ? "Update"
                  : ""}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default CreateEditBlog;
