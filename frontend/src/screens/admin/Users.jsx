import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../../layouts/admin/MainComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserList, updateIsAdmin } from "../../actions/userActions";
import {
  Box,
  Breadcrumbs,
  Button,
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

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, users } = useSelector((state) => state.userList);

  const { success } = useSelector((state) => state.userUpdateIsAdmin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUserList());
    } else {
      navigate("/signin");
    }
  }, [dispatch, navigate, userInfo, success]);

  const handleAdminSubmit = (event, id, isAdmin) => {
    dispatch(updateIsAdmin(id, { isAdmin: !isAdmin }));
  };

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Users</Typography>
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
              <TableBody>
                {users.map(
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

export default Users;
