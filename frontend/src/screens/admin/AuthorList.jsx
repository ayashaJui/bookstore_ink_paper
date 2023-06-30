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
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllAuthors } from "../../actions/authorActions";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";

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

const AuthorList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, authors } = useSelector((state) => state.authorList);
  console.log(authors);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllAuthors());
    } else {
      navigate("/signin");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Author List</Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ width: "100%", mt: 5 }}>
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
                    <StyledTableCell>Full Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Street</StyledTableCell>
                    <StyledTableCell>City</StyledTableCell>
                    <StyledTableCell>Postal Code</StyledTableCell>
                    <StyledTableCell>Country</StyledTableCell>
                    <StyledTableCell>Admin</StyledTableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {(rowsPerPage > 0
                    ? orders.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : orders
                  ).map(
                    ({ _id, name, email, phone, address, isAdmin }, idx) => (
                      <StyledTableRow key={idx}>
                        <StyledTableCell component="th" scope="row">
                          {idx + 1}
                        </StyledTableCell>
                        <StyledTableCell>{name}</StyledTableCell>
                        <StyledTableCell>{email}</StyledTableCell>
                        <StyledTableCell>{phone}</StyledTableCell>
                        <StyledTableCell>{address?.street}</StyledTableCell>
                        <StyledTableCell>{address?.city}</StyledTableCell>
                        <StyledTableCell>{address?.code}</StyledTableCell>
                        <StyledTableCell>{address?.country}</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                      </StyledTableRow>
                    )
                  )}
                </TableBody> */}
              </Table>
            </TableContainer>
            {/* <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={authors.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
          </Box>
        )}
      </Box>
    </MainComponent>
  );
};

export default AuthorList;
