import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link as MuiLink,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthorDetails } from "../actions/authorActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { formattedDate } from "../helper/helperFunction";
import Navbar from "../layouts/Navbar";

const AuthorProfile = () => {
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const authorBooksPerPage = 5;

  const dispatch = useDispatch();

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const { loading, error, author } = useSelector(
    (state) => state.authorDetails
  );

  const totalPages = Math.ceil(author?.books?.length / authorBooksPerPage);
  const startIndex = (currentPage - 1) * authorBooksPerPage;
  const endIndex = startIndex + authorBooksPerPage;
  const visibleBooks = author?.books?.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getAuthorDetails(id));
  }, [dispatch, id]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink component={Link} underline="hover" color="inherit" to="/">
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            underline="hover"
            color="inherit"
            to="/authors"
          >
            Authors List
          </MuiLink>
          <Typography color="text.primary">
            {author && author.authorInfo && author.authorInfo.name}
          </Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message title={"Error"} severity="error">
          {error}
        </Message>
      ) : (
        author && (
          <Box sx={{ maxWidth: 1000, mx: "auto", my: 4, px: { sm: 2 } }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item md={4}>
                <Card sx={{ p: 2, boxShadow: "none" }}>
                  {author.authorInfo?.image ? (
                    <CardMedia
                      component="img"
                      image={`${baseUrl + author.authorInfo.image}`}
                      alt={`${author.authorInfo?.name}`}
                      height="300px"
                    />
                  ) : (
                    <Avatar
                      alt={`${author.authorInfo?.name}`}
                      src={`${author.authorInfo?.image}`}
                      sx={{ mx: "auto", width: "150px", height: "150px" }}
                    />
                  )}

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "#2c698d", my: 2 }}
                  >
                    Follow (static)
                  </Button>
                </Card>
              </Grid>

              <Grid item md={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    p: 2,
                    pb: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {author.authorInfo?.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Registered Author
                  </Typography>
                </Box>
                <Divider />
                <TableContainer component="div">
                  <Table sx={{ p: 1, maxWidth: 500 }} aria-label="simple table">
                    <TableBody>
                      {author.authorInfo?.dob && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Born
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {formattedDate(author.authorInfo.dob)}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.dod && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Death
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {formattedDate(author.authorInfo.dod)}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.email && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Email
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {author.authorInfo.email}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.website && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Website
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {author.authorInfo.website}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.youtube && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            YouYube
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {author.authorInfo.youtube}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.twitter && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Twitter
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {author.authorInfo.twitter}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.facebook && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            FaceBook
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {author.authorInfo.facebook}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.instagram && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Instagram
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {author.authorInfo.instagram}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.uniqueGenres && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Genre
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {[...new Set(author.uniqueGenres.flat())].map(
                              (genre, idx) => (
                                <span key={idx}>
                                  <MuiLink
                                    component={Link}
                                    to={`/shop?genre=${genre}`}
                                    sx={{ textDecoration: "none", px: 0.5 }}
                                  >
                                    {genre}
                                  </MuiLink>

                                  {idx !==
                                    [...new Set(author.uniqueGenres.flat())]
                                      .length -
                                      1 && <span>, </span>}
                                </span>
                              )
                            )}
                          </TableCell>
                        </TableRow>
                      )}

                      {author.authorInfo?.createdAt && (
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "none", fontWeight: "bold" }}
                          >
                            Member Since
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            {author.authorInfo.createdAt.split("-")[0]}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography
                  variant="body2"
                  sx={{ p: 1, my: 2, textAlign: "left" }}
                >
                  {author.authorInfo?.description}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", p: 1, mt: 6 }}
                >
                  {author.authorInfo?.name}'s Books
                </Typography>
                <Divider />
                <Typography variant="caption" sx={{ p: 2, my: 5 }}>
                  Average rating: {author.avgRating} | Rated by 5200 people
                  (static) | {author.totalNumReviews} reviews |{" "}
                  {author.totalBooks} Books
                </Typography>

                {author.books &&
                  visibleBooks.map((book, idx) => (
                    <div key={idx}>
                      <Card sx={{ my: 1, boxShadow: "none" }}>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="center"
                          alignContent="center"
                        >
                          <Grid item md={2}>
                            <CardMedia
                              component="img"
                              image={`${
                                book.image
                                  ? baseUrl + book.image
                                  : "/images/sample_book.jpg"
                              }`}
                              alt={book.title}
                              height="100"
                              sx={{ p: 1, objectFit: "contain" }}
                            />
                          </Grid>

                          <Grid item md={7}>
                            <CardContent sx={{ p: 0 }}>
                              <Typography
                                variant="h6"
                                sx={{ textAlign: "left", fontWeight: "bold" }}
                              >
                                {book.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ textAlign: "left", fontSize: "12px" }}
                              >
                                by {author.authorInfo.name}
                              </Typography>

                              <Box
                                component="div"
                                sx={{
                                  textAlign: "left",
                                  py: 1,
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Rating
                                  readOnly
                                  name="customized"
                                  value={book.rating}
                                  precision={0.5}
                                  icon={<StarIcon sx={{ fontSize: 20 }} />}
                                  emptyIcon={
                                    <StarBorderIcon sx={{ fontSize: 20 }} />
                                  }
                                />
                                <Typography
                                  variant="subtitle2"
                                  sx={{ ml: 2, fontSize: 12 }}
                                >
                                  {" "}
                                  - 5000 ratings (static)
                                </Typography>
                                <Typography
                                  variant="subtitle2"
                                  sx={{ fontSize: 12, ml: 2 }}
                                >
                                  ({book.numReviews} Reviews)
                                </Typography>
                              </Box>
                            </CardContent>
                          </Grid>

                          <Grid item md={3} justifyContent="center">
                            <Typography
                              variant="subtitle2"
                              sx={{
                                textAlign: "center",
                                fontSize: "15px",
                                mt: 3,
                              }}
                            >
                              BDT {book.price[0]}
                            </Typography>
                            <CardActions sx={{}}>
                              <Button
                                component={Link}
                                size="small"
                                to={`/book/${book._id}/details`}
                                variant="outlined"
                                sx={{ borderColor: "#fff" }}
                              >
                                view Details
                              </Button>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </Card>

                      <Divider />
                    </div>
                  ))}

                {totalPages > 1 && author.books && (
                  <Stack
                    spacing={2}
                    sx={{ mt: 10, mb: 6, alignItems: "center" }}
                  >
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={handlePageChange}
                      renderItem={(item) => (
                        <PaginationItem
                          slots={{
                            previous: ArrowBackIcon,
                            next: ArrowForwardIcon,
                          }}
                          {...item}
                        />
                      )}
                    />
                  </Stack>
                )}
              </Grid>
            </Grid>
          </Box>
        )
      )}
    </div>
  );
};

export default AuthorProfile;
