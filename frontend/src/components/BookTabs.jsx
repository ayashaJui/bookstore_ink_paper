import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  LinearProgress,
  Link,
  Rating,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBookRatings, deleteBookRatings } from "../actions/bookActions";
import { formattedDate } from "../helper/helperFunction";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: "auto", py: 8, textAlign: "justify" }}>{children}</Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

function createData(name, value, url) {
  return { name, value, url };
}

const BookTabs = ({ book, bookRatings, ratingDistribution }) => {
  const {
    description,
    genres,
    format,
    isbn,
    series,
    pages,
    release,
    publisher,
    reviews,
    author,
  } = book;

  const { totalRatings, avgRatings } = bookRatings;

  const bookId = book?._id;

  const rows = [
    createData("ISBN", isbn),
    createData("Publisher", publisher),
    createData("Published Year", release?.split("T")[0]),
    createData("Pages", pages),
  ];

  const totalCount =
    (ratingDistribution?.length > 0 &&
      Object.values(ratingDistribution[0]).reduce(
        (total, count) => total + count,
        0
      )) ||
    1;

  const progressValues = [
    {
      type: "5 stars",
      value:
        (ratingDistribution?.length > 0 &&
          ratingDistribution[0]["5"] / totalCount) * 100,
      count: `${
        ratingDistribution?.length > 0 ? ratingDistribution[0]["5"] : 0
      }`,
      color: "success",
    },
    {
      type: "4 stars",
      value:
        (ratingDistribution?.length > 0 &&
          ratingDistribution[0]["4"] / totalCount) * 100,
      count: `${
        ratingDistribution?.length > 0 ? ratingDistribution[0]["4"] : 0
      }`,
      color: "primary",
    },
    {
      type: "3 stars",
      value:
        (ratingDistribution?.length > 0 &&
          ratingDistribution[0]["3"] / totalCount) * 100,
      count: `${
        ratingDistribution?.length > 0 ? ratingDistribution[0]["3"] : 0
      }`,
      color: "secondary",
    },
    {
      type: "2 stars",
      value:
        (ratingDistribution?.length > 0 &&
          ratingDistribution[0]["2"] / totalCount) * 100,
      count: `${
        ratingDistribution?.length > 0 ? ratingDistribution[0]["2"] : 0
      }`,
      color: "error",
    },
    {
      type: "1 stars",
      value:
        (ratingDistribution?.length > 0 &&
          ratingDistribution[0]["1"] / totalCount) * 100,
      count: `${
        ratingDistribution?.length > 0 ? ratingDistribution[0]["1"] : 0
      }`,
      color: "inherit",
    },
  ];

  const [value, setValue] = useState(0);
  const [ratingSubmit, setRatingSubmit] = useState(0);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createBookRatings(bookId, { rating: ratingSubmit, comment: review })
    );
  };

  // const handleEditSubmit = (event, id) => {
  //   console.log(id);
  // };

  const handleDeleteSubmit = (event, ratingId) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBookRatings(bookId, ratingId));
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 8, mb: 15 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Product Details" {...a11yProps(1)} />
          <Tab label={`Reviews (${reviews?.length})`} {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Typography sx={{ minWidth: 200, px: { xs: 1, sm: 10, md: 15 } }}>
          {description}
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TableContainer component="div">
          <Table
            sx={{ minWidth: 200, maxWidth: 500, mx: "auto" }}
            aria-label="simple table"
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ borderBottom: "none", fontWeight: "bold" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ borderBottom: "none" }}>
                    {row.value}
                  </TableCell>
                  {/* {Array.isArray(row.value) ? (
                    ""
                  ) : (
                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                      {row.url ? (
                        <Link
                          href={`${row.url}`}
                          sx={{ textDecoration: "none" }}
                        >
                          {row.value}
                        </Link>
                      ) : (
                        row.value
                      )}
                    </TableCell>
                  )} */}
                </TableRow>
              ))}

              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "none", fontWeight: "bold" }}
                >
                  Author(s)
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "none" }}>
                  {Array.isArray(author)
                    ? author.map(({ _id, name }, idx) => (
                        <span key={idx}>
                          <Link
                            href={`/author/${_id}/profile`}
                            sx={{ textDecoration: "none" }}
                          >
                            {name}
                          </Link>
                          {idx !== author.length - 1 && <span>, </span>}
                        </span>
                      ))
                    : author}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "none", fontWeight: "bold" }}
                >
                  Book Format
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "none" }}>
                  {Array.isArray(format)
                    ? format.slice(0, -1).join(", ")
                    : format}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "none", fontWeight: "bold" }}
                >
                  Genre(s)
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "none" }}>
                  {Array.isArray(genres)
                    ? genres.map((genre, idx) => (
                        <span key={idx}>
                          <Link
                            href={`/genre/${genre.toLowerCase()}`}
                            sx={{ textDecoration: "none" }}
                          >
                            {genre}
                          </Link>
                          {idx !== genres.length - 1 && <span>, </span>}
                        </span>
                      ))
                    : genres}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "none", fontWeight: "bold" }}
                >
                  Series
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "none" }}>
                  {series?.length > 0
                    ? series.map(({ _id, name, no }, idx) => (
                        <span key={idx}>
                          <Link
                            href={`/series/${_id}`}
                            sx={{ textDecoration: "none" }}
                          >
                            {name} #{no}
                          </Link>
                          {idx !== series.length - 1 && <span>, </span>}
                        </span>
                      ))
                    : "Standalone"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box sx={{ maxWidth: 800, px: 1, mx: "auto", mb: 5 }}>
          <Grid container spacing={3} justifyContent="space-evenly">
            <Grid item md={5} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Ratings ({totalRatings})</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "50px",
                    my: 3,
                    fontWeight: "bold",
                    px: 2,
                  }}
                >
                  {Number(avgRatings)}
                </Typography>
                <Rating
                  name="read-only"
                  value={Number(avgRatings)}
                  precision={0.5}
                  readOnly
                  sx={{ px: 1 }}
                />
              </Box>
            </Grid>

            <Grid item md={7} sm={6} xs={12}>
              {progressValues.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    my: 2,
                  }}
                >
                  <Box sx={{ minWidth: 60 }}>
                    <Typography variant="body2">{item.type}</Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      color={`${item.color}`}
                      sx={{ mr: 2 }}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2">{item.count}</Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>

        <Divider />

        <Box sx={{ mt: 3, mb: 5, px: { md: 10, sm: 5, xs: 1 }, minWidth: 200 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 5 }}>
            Reviews
          </Typography>
          <Box>
            {reviews?.length > 0 ? (
              reviews?.map(({ rating, comment, user, _id, createdAt }, idx) => (
                <Card sx={{ my: 2, boxShadow: "none" }} key={idx}>
                  <CardContent>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ fontSize: "16px" }}
                    >
                      {user?.name}
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ ml: 5 }}
                      >
                        {formattedDate(createdAt)}
                      </Typography>
                    </Typography>

                    <Rating
                      name="read-only"
                      value={Number(rating)}
                      precision={0.5}
                      readOnly
                      sx={{ fontSize: "15px", my: 1 }}
                    />
                    <Typography variant="body2">{comment}</Typography>
                  </CardContent>
                  {user?._id === userInfo?._id && (
                    <CardActions style={{ justifyContent: "flex-end" }}>
                      {/* <Button
                        size="small"
                        color="warning"
                        onClick={(event) => handleEditSubmit(event, _id)}
                      >
                        <EditIcon fontSize="small" />
                      </Button> */}
                      <Button
                        size="small"
                        color="error"
                        onClick={(event) => handleDeleteSubmit(event, _id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </CardActions>
                  )}
                </Card>
              ))
            ) : (
              <Typography variant="body2" textAlign={"center"}>
                No Reviews Found
              </Typography>
            )}

            {/* <Card sx={{ my: 2, boxShadow: "none" }}>
              <CardContent>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ fontSize: "16px" }}
                >
                  John Doe
                  <Typography component="span" variant="body2" sx={{ ml: 5 }}>
                    March 20, 2023
                  </Typography>
                </Typography>

                <Rating
                  name="read-only"
                  value={3}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "15px", my: 1 }}
                />
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quod, provident! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Fugiat, expedita!
                </Typography>
              </CardContent>
            </Card> */}
          </Box>
        </Box>

        <Divider sx={{ maxWidth: 800, mx: "auto" }} />

        <Box sx={{ mt: 3, mb: 5, minWidth: 200, px: { md: 10, sm: 5, xs: 1 } }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 5 }}>
            Write a Review
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Rating
              name="rating"
              value={ratingSubmit}
              // precision={0.5}
              onChange={(event) => setRatingSubmit(+event.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={8}
              id="review"
              label="Review"
              name="review"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, bgcolor: "#272643", borderRadius: 0 }}
              size="large"
            >
              Post
            </Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default BookTabs;
