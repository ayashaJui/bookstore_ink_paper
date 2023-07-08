import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Table,
  TableBody,
  Link as MuiLink,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Chip,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderCustomerList, getOrderList } from "../../actions/orderActions";
import { formattedDate } from "../../helper/helperFunction";
import Loader from "../../layouts/Loader";
import { getAllBooks } from "../../actions/bookActions";

const Dashboard = () => {
  const page = 0;
  const rowsPerPageOrder = 5;
  const rowsPerPageCustomer = 7;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, orders } = useSelector((state) => state.orderList);
  const { loading: customerLoading, customerOrders } = useSelector(
    (state) => state.orderCustomerList
  );
  const { books } = useSelector((state) => state.bookList);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getOrderList());
      dispatch(getOrderCustomerList());
      dispatch(getAllBooks());
    } else {
      navigate("/signin");
    }
  }, [dispatch, navigate, userInfo]);

  const totalEarnings =
    orders && orders.reduce((total, order) => total + order.totalPrice, 0);

  const handleDeliveryStatusChange = (event, id) => {
    console.log(id);
  };
  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">
          Welcome Back, {userInfo && userInfo.name}
        </Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Card
              sx={{
                minWidth: 275,
                borderTop: "3px solid #272643",
                textAlign: "left",
                height: 150,
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {totalEarnings} TK
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                  Total Earnings
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/admin/orders`}>
                  More Info
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                minWidth: 275,
                borderTop: "3px solid #272643",
                textAlign: "left",
                height: 150,
              }}
              variant="outlined"
            >
              <CardContent>
                {/* <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  BDT 5000
                </Typography> */}
                <Typography variant="h5" component="div">
                  {orders && orders.length}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                  Total Orders
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/admin/orders`}>
                  View All Orders
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                minWidth: 275,
                borderTop: "3px solid #272643",
                textAlign: "left",
                height: 150,
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {customerOrders && customerOrders.length}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                  Total Customers
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/admin/customers`}>
                  Find All Customers
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                minWidth: 275,
                borderTop: "3px solid #272643",
                textAlign: "left",
                height: 150,
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {books && books.length}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                  Total Books
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/admin/books`}>
                  Info of books
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              {customerLoading ? (
                <Loader />
              ) : (
                <Paper sx={{ boxShadow: 0, borderRadius: 0, p: 1 }}>
                  <Typography variant="h6" sx={{ py: 2, textAlign: "left" }}>
                    New Customers
                  </Typography>
                  <Divider />
                  <List sx={{ width: "100%", maxWidth: 360 }}>
                    {customerOrders &&
                      (rowsPerPageCustomer > 0
                        ? customerOrders.slice(
                            page * rowsPerPageCustomer,
                            page * rowsPerPageCustomer + rowsPerPageCustomer
                          )
                        : customerOrders
                      ).map(({ name, orders, totalSpend }, idx) => (
                        <ListItem alignItems="flex-start" key={idx}>
                          <ListItemAvatar>
                            <Avatar alt={name} src="" />
                          </ListItemAvatar>
                          <ListItemText
                            primary={name}
                            secondary={
                              <>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {orders.length} Orders
                                </Typography>
                                {` — ${totalSpend} tk`}
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                  </List>
                </Paper>
              )}
            </Grid>
            <Grid item md={9}>
              {loading ? (
                <Loader />
              ) : (
                <Paper sx={{ boxShadow: 0, borderRadius: 0, p: 1 }}>
                  <Typography variant="h6" sx={{ py: 2, textAlign: "left" }}>
                    Recent Orders
                  </Typography>
                  <Divider />

                  <Box sx={{ width: "100%", mb: 2 }}>
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
                        {orders &&
                          (rowsPerPageOrder > 0
                            ? orders.slice(
                                page * rowsPerPageOrder,
                                page * rowsPerPageOrder + rowsPerPageOrder
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
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  <MuiLink
                                    component={Link}
                                    to={`/order/${_id}`}
                                  >
                                    {_id}
                                  </MuiLink>
                                </TableCell>
                                <TableCell>{user.name}</TableCell>

                                <TableCell>{totalPrice}</TableCell>

                                <TableCell>
                                  <Chip
                                    label={`${
                                      paymentStatus ? "Paid" : "Not Paid"
                                    }`}
                                    variant={`outlined`}
                                    color={`${
                                      paymentStatus ? "sucess" : "error"
                                    }`}
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
                                <TableCell>
                                  {formattedDate(createdAt)}
                                </TableCell>
                              </TableRow>
                            )
                          )}
                      </TableBody>
                    </Table>
                  </Box>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainComponent>
  );
};

export default Dashboard;
