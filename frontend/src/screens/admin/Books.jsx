import {
  Box,
  Breadcrumbs,
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
  TablePagination,
  IconButton,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
// import AddIcon from "@mui/icons-material/Add";
import MainComponent from "../../layouts/admin/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  bookClearSuccess,
  deleteBook,
  getBookWithOrderList,
} from "../../actions/bookActions";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import styled from "@emotion/styled";
import { formattedDate } from "../../helper/helperFunction";
import { BOOK_DETAILS_RESET } from "../../constants/book";

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

const StyledTableSortLabel = styled(TableSortLabel)({
  "&.Mui-active": {
    color: "#ffffff", // Set your desired white color here
  },
  "&.MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon": {
    color: "inherit",
  },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const Books = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("desc");
  let visibleRows = [];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, bookWithOrder } = useSelector(
    (state) => state.bookWithOrderList
  );

  const { success: createBookSuccess } = useSelector(
    (state) => state.bookCreate
  );

  const { success: updateBookSuccess } = useSelector(
    (state) => state.bookUpdate
  );

  const { success: deleteBookSuccess } = useSelector(
    (state) => state.bookDelete
  );

  useEffect(() => {
    dispatch({ type: BOOK_DETAILS_RESET });
    if (userInfo && userInfo.isAdmin) {
      dispatch(getBookWithOrderList());

      if (createBookSuccess || updateBookSuccess || deleteBookSuccess) {
        const timer = setTimeout(() => {
          dispatch(bookClearSuccess());
        }, 6000);

        return () => clearTimeout(timer);
      }
    } else {
      navigate("/signin");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    createBookSuccess,
    updateBookSuccess,
    deleteBookSuccess,
  ]);

  const handleFeatureSubmit = (event, id, isFeatured) => {
    console.log(id, isFeatured);
  };

  const handleBestSellerSubmit = (event, id, isBestSeller) => {
    console.log(id, isBestSeller);
  };

  const handleEdit = (event, id) => {
    navigate(`/admin/book/${id}/edit`);
  };

  const handleDeleteSubmit = (event, id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteBook(id));
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - bookWithOrder.length) : 0;

  if (bookWithOrder && bookWithOrder.length > 0) {
    visibleRows = stableSort(
      bookWithOrder,
      getComparator(sortOrder, "saleCount")
    ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Book Info</Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ mt: 5 }}>
        {createBookSuccess && (
          <Message severity={"success"} title={"Created"} marginY={3}>
            New book has been created
          </Message>
        )}
        {updateBookSuccess && (
          <Message severity={"success"} title={"Updated"} marginY={3}>
            Book Info has been updated
          </Message>
        )}
        {deleteBookSuccess && (
          <Message severity={"success"} title={"Deleted"} marginY={3}>
            Book Info has been deleted
          </Message>
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity={"error"} title={"Error!"}>
            {" "}
            {error}{" "}
          </Message>
        ) : (
          <Box sx={{ width: "100%", mb: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No</StyledTableCell>
                    <StyledTableCell>Image</StyledTableCell>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell>Format</StyledTableCell>
                    <StyledTableCell>Prices</StyledTableCell>
                    <StyledTableCell>Stock</StyledTableCell>
                    <StyledTableCell>Release Date</StyledTableCell>
                    <StyledTableCell>
                      <StyledTableSortLabel
                        active={true}
                        sx={{
                          "&:hover": { color: "white" },
                        }}
                        direction={sortOrder}
                        onClick={handleSort}
                      >
                        {" "}
                        Sales{" "}
                      </StyledTableSortLabel>
                    </StyledTableCell>
                    <StyledTableCell>Offer (%) </StyledTableCell>
                    {/* <StyledTableCell>Series</StyledTableCell>
                    <StyledTableCell>Literary Reviews</StyledTableCell> */}
                    <StyledTableCell>Featured</StyledTableCell>
                    <StyledTableCell>Best Seller</StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      Actions
                    </StyledTableCell>
                    <StyledTableCell>Created By</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookWithOrder.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                        {" "}
                        No Customer Order Found{" "}
                      </TableCell>
                    </TableRow>
                  )}
                  {visibleRows.map(
                    (
                      {
                        _id,
                        title,
                        user,
                        format,
                        price,
                        countInStock,
                        image,
                        release,
                        offer,
                        isFeatured,
                        series,
                        literaryReviews,
                        isBestSeller,
                        saleCount,
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
                                image={`${
                                  image
                                    ? `${baseUrl + image}`
                                    : "/images/sample_book.jpg"
                                }`}
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
                        <StyledTableCell> {saleCount} </StyledTableCell>
                        <StyledTableCell> {offer} </StyledTableCell>
                        {/* <StyledTableCell>
                          {series.map((s) => `${s.name}#${s.no}`)}
                          <IconButton
                            size="small"
                            variant="contained"
                            fontWeight="bold"
                            // onClick={(event) =>
                            //   handleFeatureSubmit(event, _id, isFeatured)
                            // }
                          >
                            
                              <ModeEditIcon fontSize="small" />
                           
                              <AddIcon fontSize="small" />
                            
                          </IconButton>
                        </StyledTableCell>
                        <StyledTableCell>
                          {literaryReviews ? "Edit" : "Create"}
                        </StyledTableCell> */}
                        <StyledTableCell>
                          <Tooltip
                            title={`Press to ${
                              isFeatured ? "stop Featuring" : "start Featuring"
                            }`}
                          >
                            <IconButton
                              size="small"
                              variant="contained"
                              fontWeight="bold"
                              onClick={(event) =>
                                handleFeatureSubmit(event, _id, isFeatured)
                              }
                            >
                              {isFeatured ? (
                                <DoneIcon fontSize="small" color="success" />
                              ) : (
                                <CloseIcon fontSize="small" color="error" />
                              )}
                            </IconButton>
                          </Tooltip>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Tooltip
                            title={`press to ${
                              isBestSeller ? "remove" : "add"
                            }`}
                          >
                            <IconButton
                              size="small"
                              variant="contained"
                              onClick={(event) =>
                                handleBestSellerSubmit(event, _id, isFeatured)
                              }
                            >
                              {isBestSeller ? (
                                <DoneIcon fontSize="small" color="success" />
                              ) : (
                                <CloseIcon fontSize="small" color="error" />
                              )}
                            </IconButton>
                          </Tooltip>
                        </StyledTableCell>
                        <StyledTableCell>
                          <IconButton
                            color="secondary"
                            size="small"
                            onClick={(event) => handleEdit(event, _id)}
                          >
                            <ModeEditIcon fontSize="small" />
                          </IconButton>
                        </StyledTableCell>
                        <StyledTableCell>
                          <IconButton
                            color="error"
                            size="small"
                            onClick={(event) => handleDeleteSubmit(event, _id)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </StyledTableCell>
                        <StyledTableCell>{user}</StyledTableCell>
                      </StyledTableRow>
                    )
                  )}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {bookWithOrder.length > 0 && (
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={bookWithOrder.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </Box>
        )}
      </Box>
    </MainComponent>
  );
};

export default Books;
