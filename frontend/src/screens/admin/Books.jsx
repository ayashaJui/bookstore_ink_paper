import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Paper,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllBooks } from "../../actions/bookActions";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import styled from "@emotion/styled";
import { formattedDate } from "../../helper/helperFunction";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Books = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, books } = useSelector((state) => state.bookList);

  console.log(books.books);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllBooks());
    } else {
      navigate("/signin");
    }
  }, [dispatch, navigate, userInfo]);

  const handleFeatureSubmit = (event, id, isFeatured) => {
    console.log(id, isFeatured)
  }

  const handleBestSellerSubmit = (event, id, isBestSeller) => {
    console.log(id, isBestSeller)
  }

  const handleEdit = (event, id) => {
    console.log(id)
  }

  const handleDeleteSubmit = (event, id) => {
    console.log(id)
  }

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Book Info</Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ mt: 5 }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity={"error"} title={"Error!"}>
            {" "}
            {error}{" "}
          </Message>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>No</StyledTableCell>
                  <StyledTableCell>Image</StyledTableCell>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell>Author</StyledTableCell>
                  <StyledTableCell>Formats</StyledTableCell>
                  <StyledTableCell>Prices</StyledTableCell>
                  <StyledTableCell>Stock</StyledTableCell>
                  <StyledTableCell>Release Date</StyledTableCell>
                  <StyledTableCell>Created By</StyledTableCell>
                  {/* <StyledTableCell>Rating</StyledTableCell>
                  <StyledTableCell>No of Reviews</StyledTableCell> */}
                  <StyledTableCell>Offer (%) </StyledTableCell>
                  <StyledTableCell>Featured</StyledTableCell>
                  <StyledTableCell>BestSeller</StyledTableCell>
                  <StyledTableCell colSpan={2} align="center">
                    Actions
                  </StyledTableCell>
                  {/* <StyledTableCell ></StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {books.books.map(
                  (
                    {
                      _id,
                      //   isbn,
                      title,
                      author,
                      user,
                      format,
                      price,
                      countInStock,
                      image,
                      release,
                      //   rating,
                      //   numReviews,
                      offer,
                      isFeatured,
                      isBestSeller,
                    },
                    idx
                  ) => (
                    <StyledTableRow key={idx}>
                      <StyledTableCell component="th" scope="row">
                        {idx + 1}
                      </StyledTableCell>

                      <StyledTableCell>
                        <Card component={Link} to={`/book/${_id}/details`}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              image={`/${image}`}
                              alt={`${title}`}
                              height="80"
                              sx={{ objectFit: "contain" }}
                            />
                          </CardActionArea>
                        </Card>
                      </StyledTableCell>
                      <StyledTableCell>
                        <MuiLink
                          component={Link}
                          to={`/book/${_id}/details`}
                          sx={{ textDecoration: "none" }}
                        >
                          {" "}
                          {title}{" "}
                        </MuiLink>
                      </StyledTableCell>
                      <StyledTableCell>
                        {" "}
                        {author.map(({ _id, name }, index) => (
                          <span key={index}>
                            <MuiLink
                              component={Link}
                              to={`/author/${_id}/profile`}
                              sx={{
                                ml: 1,
                                textDecoration: "none",
                              }}
                            >
                              {name}
                            </MuiLink>
                            {index !== author.length - 1 && (
                              <Typography component={"span"}>,</Typography>
                            )}
                          </span>
                        ))}{" "}
                      </StyledTableCell>
                      <StyledTableCell>
                        {format.slice(0, -1).join(", ") +
                          (format.length > 1 ? ", " : "") +
                          format[format.length - 1]}
                      </StyledTableCell>
                      <StyledTableCell>
                        {price.slice(0, -1).join(", ") +
                          (price.length > 1 ? ", " : "") +
                          price[price.length - 1]}
                      </StyledTableCell>
                      <StyledTableCell>
                        {countInStock.slice(0, -1).join(", ") +
                          (countInStock.length > 1 ? ", " : "") +
                          countInStock[countInStock.length - 1]}
                      </StyledTableCell>
                      <StyledTableCell>
                        {formattedDate(release)}
                      </StyledTableCell>
                      <StyledTableCell>{user.name}</StyledTableCell>
                      {/* <StyledTableCell>{rating}</StyledTableCell>
                      <StyledTableCell> {numReviews} </StyledTableCell> */}
                      <StyledTableCell> {offer} </StyledTableCell>
                      <StyledTableCell>
                        <Button  size="small" variant="contained" onClick={(event) => handleFeatureSubmit(event, _id, isFeatured)}>
                            {
                                isFeatured ? "Remove" : "Add"
                            }
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                      <Button  size="small" variant="contained" onClick={(event) => handleBestSellerSubmit(event, _id, isFeatured)}>
                            {
                                isBestSeller ? "Remove" : "Add"
                            }
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                            onClick={(event) =>
                              handleEdit(event, _id)
                            }
                        >
                          Edit
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                            onClick={(event) =>
                              handleDeleteSubmit(event, _id)
                            }
                        >
                          delete
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </MainComponent>
  );
};

export default Books;
