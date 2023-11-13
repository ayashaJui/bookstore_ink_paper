import { useLocation, useNavigate, useParams } from "react-router-dom";
import MainComponent from "../../layouts/admin/MainComponent";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllAuthors } from "../../actions/authorActions";
import { createBook, getBookById, updateBook } from "../../actions/bookActions";
import { BOOK_DETAILS_RESET } from "../../constants/book";
import axios from "axios";

const AddEditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState([]);
  const [isbn, setIsbn] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState("");
  const [publisher, setPublisher] = useState("");
  const [release, setRelease] = useState("");
  const [pages, setPages] = useState(0);
  const [offer, setOffer] = useState(0);
  const [numCopySold, setNumCopySold] = useState("");
  const [format, setFormat] = useState([
    { format: "", price: 0, countInStock: 0 },
  ]);
  const [uploading, setUploading] = useState(false);

  const [titleError, setTitleError] = useState();
  const [authorError, setAuthorError] = useState();
  const [isbnError, setIsbnError] = useState();
  const [descriptionError, setDescriptionError] = useState();
  const [genresError, setGenresError] = useState("");
  const [formatError, setFormatError] = useState([{}]);

  const { id } = useParams();
  const location = useLocation();
  const url = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:5000";

  const { success: successCreate } = useSelector((state) => state.bookCreate);
  const { loading, error, book } = useSelector((state) => state.bookDetails);

  const { userInfo } = useSelector((state) => state.userLogin);
  const { success: successUpdate } = useSelector((state) => state.bookUpdate);

  const { authors } = useSelector((state) => state.authorList);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      if (authors.length === 0) {
        dispatch(getAllAuthors());
      }
      if (url.includes("add_book")) {
        dispatch({ type: BOOK_DETAILS_RESET });
        if (successCreate) {
          navigate("/admin/books");
        }
      } else if (url.includes("edit") && id) {
        if (!book?.title) {
          dispatch(getBookById(id));
        } else if (successUpdate) {
          navigate("/admin/books");
        } else {
          const formatData = book.format.map((f, idx) => ({
            format: f,
            price: book.price[idx],
            countInStock: book.countInStock[idx],
          }));

          setTitle(book.title || "");
          setIsbn(book.isbn || "");
          // setAuthor(bookAuthors || "");
          setGenres(book.genres.join(",") || "");
          setDescription(book.description || "");
          setFormat(formatData || "");
          setPublisher(book.publisher || "");
          setRelease(book.release || "");
          setPages(book.pages || 0);
          setOffer(book.offer || 0);
          setNumCopySold(book.numCopySold || "");
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
    authors.length,
    book,
    userInfo,
  ]);

  const handleAuthorChange = (event) => {
    const {
      target: { value },
    } = event;
    setAuthor(typeof value === "string" ? value.split(",") : value);
  };

  const handleFormatChange = (index, field, value) => {
    const updatedFormats = [...format];
    updatedFormats[index][field] = value;
    setFormat(updatedFormats);
  };

  const handleAddFormat = () => {
    const newFormat = { format: "", price: "", countInStock: "" };
    setFormat([...format, newFormat]);
    setFormatError([...formatError, {}]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (url.includes("add_book")) {
      const errors = format.map((f) => {
        const formatErrors = {};

        if (!f.format) {
          formatErrors.format = "Format is required";
        }
        if (!f.price) {
          formatErrors.price = "Price is required";
        }
        if (!f.countInStock) {
          formatErrors.countInStock = "Count in Stock is required";
        }

        return formatErrors;
      });

      setFormatError(errors);

      if (
        title === "" ||
        isbn === "" ||
        description === "" ||
        author.length === 0 ||
        genres === ""
      ) {
        if (title === "") setTitleError("Title is required");
        if (isbn === "") setIsbnError("ISBN is required");
        if (author.length === 0) setAuthorError("Author is required");
        if (description === "") setDescriptionError("Description is required");
        if (genres === "") setGenresError("Genres are required");
      } else {
        const formatInfo = format.map((f) => f.format);
        const price = format.map((f) => f.price);
        const countInStock = format.map((f) => f.countInStock);

        dispatch(
          createBook({
            author,
            isbn,
            title,
            image,
            description,
            genres: genres.split(","),
            format: formatInfo,
            price,
            countInStock,
            publisher,
            release: new Date(release),
            pages: Number(pages),
            offer: Number(offer),
            numCopySold,
          })
        );
      }
    } else if (url.includes("edit") && id) {
      const formatInfo = format.map((f) => f.format);
      const price = format.map((f) => f.price);
      const countInStock = format.map((f) => f.countInStock);

      if (author.length === 0) setAuthorError("Author is required");
      else {
        dispatch(
          updateBook({
            id,
            author,
            image,
            isbn,
            title,
            description,
            genres: genres.split(","),
            format: formatInfo,
            price,
            countInStock,
            publisher,
            release: new Date(release),
            pages: Number(pages),
            offer: Number(offer),
            numCopySold,
          })
        );
      }
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
        `${baseUrl}/api/upload/book`,
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
          {url.includes("add_book")
            ? "Add New Book"
            : url.includes("edit") && id
            ? "Edit Book Details"
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
              label="Title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              error={!!titleError}
              helperText={titleError}
            />
            <TextField
              margin="normal"
              size="medium"
              required
              fullWidth
              label="ISBN"
              name="isbn"
              value={isbn}
              onChange={(event) => setIsbn(event.target.value)}
              error={!!isbnError}
              helperText={isbnError}
            />

            <FormControl fullWidth margin="normal" error={!!authorError}>
              <InputLabel id="demo-simple-select-helper-label">
                Choose Author(s)
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                multiple
                value={author}
                label="Choose Author(s)"
                onChange={handleAuthorChange}
              >
                {authors.map((option, idx) => (
                  <MenuItem key={idx} value={option.authorInfo._id}>
                    {option.authorInfo.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText color="error">{authorError}</FormHelperText>
            </FormControl>
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
              required
              fullWidth
              label="Genres"
              name="genres"
              value={genres}
              onChange={(event) => setGenres(event.target.value)}
              error={!!genresError}
              helperText={genresError}
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

            {format.map((f, idx) => (
              <div key={idx}>
                <TextField
                  margin="normal"
                  size="medium"
                  required
                  fullWidth
                  label="Format"
                  value={f.format}
                  onChange={(e) =>
                    handleFormatChange(idx, "format", e.target.value)
                  }
                  error={!!formatError[idx]?.format}
                  helperText={formatError[idx]?.format}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  required
                  fullWidth
                  label="Price"
                  type="number"
                  value={f.price}
                  onChange={(e) =>
                    handleFormatChange(idx, "price", e.target.value)
                  }
                  error={!!formatError[idx]?.price}
                  helperText={formatError[idx]?.price}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  required
                  fullWidth
                  label="Count in Stock"
                  type="number"
                  value={f.countInStock}
                  onChange={(e) =>
                    handleFormatChange(idx, "countInStock", e.target.value)
                  }
                  error={!!formatError[idx]?.countInStock}
                  helperText={formatError[idx]?.countInStock}
                />
              </div>
            ))}
            <Button variant="contained" onClick={handleAddFormat}>
              Add Another Format, Price, Count In Stock
            </Button>
            <TextField
              margin="normal"
              size="medium"
              fullWidth
              label="Publisher"
              name="publisher"
              value={publisher}
              onChange={(event) => setPublisher(event.target.value)}
            />
            <TextField
              margin="normal"
              size="medium"
              fullWidth
              label="Release Date (yyyy-mm-dd)"
              name="release"
              value={release}
              onChange={(event) => setRelease(event.target.value)}
            />
            <TextField
              margin="normal"
              type="number"
              size="medium"
              fullWidth
              label="Number of Pages"
              name="pages"
              value={pages}
              onChange={(event) => setPages(event.target.value)}
            />
            <TextField
              margin="normal"
              type="number"
              size="medium"
              fullWidth
              label="Surprise with an offer (%)"
              name="offer"
              value={offer}
              onChange={(event) => setOffer(event.target.value)}
            />

            <TextField
              margin="normal"
              size="medium"
              fullWidth
              label="Number of Copy Sold around the World (billion, million, multi-billion)"
              name="numCopySold"
              value={numCopySold}
              onChange={(event) => setNumCopySold(event.target.value)}
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
              {url.includes("add_book")
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

export default AddEditBook;
