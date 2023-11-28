import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../../layouts/admin/MainComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  clearSuccess,
  deleteUser,
  getUserList,
  updateIsAdmin,
} from "../../actions/userActions";
import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import { USER_DETAILS_RESET } from "../../constants/user";

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

const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, users } = useSelector((state) => state.userList);

  const { success: updateAdminSuccess } = useSelector(
    (state) => state.userUpdateIsAdmin
  );
  const { success: createUserSuccess } = useSelector(
    (state) => state.userCreate
  );
  const { success: updateUserSuccess } = useSelector(
    (state) => state.userUpdate
  );
  const { success: deleteUserSuccess } = useSelector(
    (state) => state.userDelete
  );

  useEffect(() => {
    dispatch({ type: USER_DETAILS_RESET });
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUserList());

      if (
        updateAdminSuccess ||
        createUserSuccess ||
        updateUserSuccess ||
        deleteUserSuccess
      ) {
        const timer = setTimeout(() => {
          dispatch(clearSuccess());
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
    updateAdminSuccess,
    createUserSuccess,
    updateUserSuccess,
    deleteUserSuccess,
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAdminSubmit = (event, id, isAdmin) => {
    dispatch(updateIsAdmin(id, { isAdmin: !isAdmin }));
  };

  const handleEdit = (event, id) => {
    navigate(`/admin/user/${id}/edit`);
  };

  const handleDeleteSubmit = (event, id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
      // console.log(id);
    }
  };

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Users</Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ mt: 5 }}>
        {updateAdminSuccess && (
          <Message severity={"success"} title={"Updated"} marginY={3}>
            {" "}
            User info has been updated{" "}
          </Message>
        )}
        {updateUserSuccess && (
          <Message severity={"success"} title={"Updated"} marginY={3}>
            {" "}
            User info has been updated{" "}
          </Message>
        )}
        {createUserSuccess && (
          <Message severity={"success"} title={"Created"} marginY={3}>
            New user has been created
          </Message>
        )}
        {deleteUserSuccess && (
          <Message severity={"success"} title={"Deleted"} marginY={3}>
            User has been deleted
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
                    <StyledTableCell>Full Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Street</StyledTableCell>
                    <StyledTableCell>City</StyledTableCell>
                    <StyledTableCell>Postal Code</StyledTableCell>
                    <StyledTableCell>Country</StyledTableCell>
                    <StyledTableCell>Admin</StyledTableCell>
                    <StyledTableCell colSpan={2}>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                        {" "}
                        No User Found{" "}
                      </TableCell>
                    </TableRow>
                  )}
                  {(rowsPerPage > 0
                    ? users.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : users
                  ).map(
                    (
                      { _id, name, email, phone, address, isAdmin, isDeleted },
                      idx
                    ) => (
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

                        <StyledTableCell>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={(event) =>
                              handleAdminSubmit(event, _id, isAdmin)
                            }
                          >
                            {isAdmin ? "Remove" : "Add"}
                          </Button>
                        </StyledTableCell>

                        {isDeleted || isAdmin ? (
                          <>
                            <StyledTableCell>
                              <IconButton
                                color="error"
                                size="small"
                                onClick={(event) =>
                                  handleDeleteSubmit(event, _id)
                                }
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </StyledTableCell>
                            {isAdmin && (
                              <StyledTableCell>
                                <IconButton
                                  color="secondary"
                                  size="small"
                                  onClick={(event) => handleEdit(event, _id)}
                                >
                                  <ModeEditIcon fontSize="small" />
                                </IconButton>
                              </StyledTableCell>
                            )}
                          </>
                        ) : (
                          <StyledTableCell colSpan={2}></StyledTableCell>
                        )}
                      </StyledTableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {users.length > 0 && (
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
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

export default Users;
