import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Link as MuiLink,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMyOrderList } from "../actions/orderActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { formattedDate } from "../helper/helperFunction";

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

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, orders } = useSelector(
    (state) => state.userOrderList
  );

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    } else {
      dispatch(getMyOrderList());
    }
  }, [dispatch, userInfo, navigate]);
  return (
    <>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink component={Link} underline="hover" color="inherit" to="/">
            Home
          </MuiLink>

          <Typography color="text.primary">All Order</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ mx: { md: 10, sm: 4, xs: 2 }, mt: 6, mb: 10 }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity={"error"} title={"Error!!"}>
            {error}
          </Message>
        ) : (
          orders.orders && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="right">Date</StyledTableCell>
                    <StyledTableCell align="right">Total</StyledTableCell>
                    <StyledTableCell align="right">Paid</StyledTableCell>
                    <StyledTableCell align="right">Paid Date</StyledTableCell>
                    <StyledTableCell align="right">Delivered</StyledTableCell>
                    <StyledTableCell align="right">
                      Delivered Date
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.orders.map((order, idx) => (
                    <StyledTableRow key={idx}>
                      <StyledTableCell component="th" scope="row">
                        {order._id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {formattedDate(order.createdAt)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {order.totalPrice}/-
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {order.isPaid ? (
                          <DoneIcon color="success" />
                        ) : (
                          <CloseIcon color="error" />
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {order.paidAt ? formattedDate(orders.paidAt) : ""}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {order.Delivered ? (
                          <DoneIcon color="success" />
                        ) : (
                          <CloseIcon color="error" />
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {order.deliveredAt
                          ? formattedDate(orders.deliveredAt)
                          : ""}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button component={Link} to={`/order/${order._id}`}>
                          Details
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        )}
      </Box>
    </>
  );
};

export default Orders;
