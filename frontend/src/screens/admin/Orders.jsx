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
  TablePagination,
  TableRow,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrderList } from "../../actions/orderActions";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import { formattedDate } from "../../helper/helperFunction";

const Orders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, orders } = useSelector((state) => state.orderList);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getOrderList());
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

  const handleDeliveryStatusChange = (event, id) => {
    console.log(id);
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
                    <TableCell>ID</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell> Payment Status </TableCell>
                    <TableCell> Payment Method </TableCell>
                    <TableCell> Delivery Status </TableCell>
                    <TableCell> Order Date </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? orders.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : orders
                  ).map(
                    (
                      {
                        _id,
                        user,
                        paymentStatus,
                        paymentMethod,
                        totalPrice,
                        deliveryStatus,
                        createdAt,
                      },
                      idx
                    ) => (
                      <TableRow
                        key={idx}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <MuiLink component={Link} to={`/order/${_id}`}>
                            {_id}
                          </MuiLink>
                        </TableCell>
                        <TableCell>{user.name}</TableCell>

                        <TableCell>{totalPrice}</TableCell>
                        <TableCell>
                          <Chip
                            label={`${paymentStatus ? "Paid" : "Not Paid"}`}
                            variant={`outlined`}
                            color={`${paymentStatus ? "sucess" : "error"}`}
                          />
                        </TableCell>
                        <TableCell>{paymentMethod}</TableCell>
                        <TableCell>
                          <Button
                            onClick={(event) =>
                              handleDeliveryStatusChange(event, _id)
                            }
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
                        </TableCell>
                        <TableCell>{formattedDate(createdAt)}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={orders.length}
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

export default Orders;
