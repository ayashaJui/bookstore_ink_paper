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
  styled,
  tableCellClasses,
  Avatar,
  TablePagination,
  IconButton,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import MainComponent from "../../layouts/admin/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, authors } = useSelector((state) => state.authorList);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllAuthors());
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

  const handleEdit = (event, id) => {
    console.log(id);
  };

  const handleDeleteSubmit = (event, id) => {
    console.log(id);
  };

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
                    <StyledTableCell>Image</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Books</StyledTableCell>
                    <StyledTableCell colSpan={2}>Actions</StyledTableCell>
                    <StyledTableCell>Created By</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? authors.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : authors
                  ).map(({ authorInfo, user, totalBooks }, idx) => (
                    <StyledTableRow key={idx}>
                      <StyledTableCell component="th" scope="row">
                        {idx + 1}
                      </StyledTableCell>
                      <StyledTableCell>
                        <MuiLink
                          component={Link}
                          to={`/author/${authorInfo._id}/profile`}
                          sx={{ textDecoration: "none", color: "#000" }}
                        >
                          <Avatar
                            alt={`${authorInfo.name}`}
                            src={`/${authorInfo.image}`}
                            sx={{ width: 50, height: 50 }}
                          />
                        </MuiLink>
                      </StyledTableCell>
                      <StyledTableCell>
                        <MuiLink
                          component={Link}
                          to={`/author/${authorInfo._id}/profile`}
                          sx={{ textDecoration: "none" }}
                        >
                          {authorInfo.name}
                        </MuiLink>
                      </StyledTableCell>
                      <StyledTableCell>{authorInfo.email}</StyledTableCell>
                      <StyledTableCell>{totalBooks}</StyledTableCell>
                      <StyledTableCell>
                        <IconButton
                          color="secondary"
                          size="small"
                          onClick={(event) => handleEdit(event, authorInfo._id)}
                        >
                          <ModeEditIcon fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                      <StyledTableCell>
                        <IconButton
                          color="error"
                          size="small"
                          onClick={(event) =>
                            handleDeleteSubmit(event, authorInfo._id)
                          }
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                      <StyledTableCell>{user}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={authors.length}
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

export default AuthorList;
