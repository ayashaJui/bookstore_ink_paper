import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../../layouts/admin/MainComponent";
import { useEffect, useState } from "react";
import { getAllBookReviews } from "../../actions/bookActions";
import {
  Box,
  Breadcrumbs,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Link as MuiLink,
  TableRow,
  Typography,
  // Chip,
  // Button,
  TablePagination,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import { formattedDate } from "../../helper/helperFunction";

const Reviews = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();
  const navigate = useLocation();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, reviews } = useSelector(
    (state) => state.bookReviewList
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllBookReviews());
    } else {
      navigate("/signin");
    }
  }, [dispatch, navigate, userInfo]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Orders</Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ mt: 5 }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error" title="Error!">
            {" "}
            {error}{" "}
          </Message>
        ) : (
          <Box sx={{ width: "100%", mb: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Book Name</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Comment</TableCell>
                    <TableCell>Created At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? reviews?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : reviews
                  ).map(({ bookId, bookName, review }, idx) => (
                    <TableRow
                      key={idx}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <MuiLink
                          component={Link}
                          sx={{ textDecoration: "none" }}
                          to={`/book/${bookId}/details`}
                        >
                          {bookName}
                        </MuiLink>
                      </TableCell>
                      <TableCell>{review.rating}</TableCell>

                      <TableCell>{review.comment}</TableCell>
                      {/* <TableCell>
                          <Chip
                            label={`${paymentStatus ? "Paid" : "Not Paid"}`}
                            variant={`outlined`}
                            color={`${paymentStatus ? "sucess" : "error"}`}
                          />
                        </TableCell> */}
                      {/* <TableCell>{paymentMethod}</TableCell>
                        <TableCell>
                          <Button
                            
                            sx={{
                              textDecoration: "none",
                              textTransform: "capitalize",
                            }}
                          >
                            <Chip
                              label={`${
                                deliveryStatus ? "Delivered" : "Deliver"
                              }`}
                              color={`${
                                deliveryStatus ? "sucess" : "secondary"
                              }`}
                            />
                          </Button>
                        </TableCell> */}
                      <TableCell>{formattedDate(review.createdAt)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={reviews.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        )}
      </Box>
    </MainComponent>
  );
};

export default Reviews;
