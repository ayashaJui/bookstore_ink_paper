import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import Message from "../layouts/Message";
import Loader from "../layouts/Loader";
import { getOrderById } from "../actions/orderActions";
import Navbar from "../layouts/Navbar";

const OrderDetails = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { id } = useParams();

  const { loading, error, order } = useSelector((state) => state.orderDetails);

  //   Calculate prices
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!order || order._id !== id) {
      dispatch(getOrderById(id));
    }
  }, [dispatch, order, id]);

  // const handlePlaceOrder = () => {
  //   console.log("");
  // };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity={"error"} title={"Error!!"}>
          {error}
        </Message>
      ) : (
        <Box sx={{ maxWidth: 1000, mx: { md: "auto", sm: 4, xs: 2 }, my: 6 }}>
          <Typography variant="h3" sx={{ my: 4, fontFamily: "Nunito" }}>
            Order No {order._id}
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={7} sm={12} xs={12}>
              <List>
                <ListItem disablePadding>
                  <ListItemText sx={{ mb: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{ my: 3, fontFamily: "Nunito" }}
                    >
                      Shipping
                    </Typography>
                    <Typography component="p" sx={{ m: 1 }}>
                      <strong>Name: </strong>
                      {order.user.name}
                    </Typography>
                    <Typography component={"p"} sx={{ m: 1 }}>
                      <strong>Email: </strong>
                      <MuiLink
                        component={Link}
                        to={`mailto:${order.user.email}`}
                      >
                        {order.user.email}
                      </MuiLink>
                    </Typography>
                    <Typography component="p" sx={{ m: 1 }}>
                      <strong>Address: </strong>
                      {order.shippingAddress.street},{" "}
                      {order.shippingAddress.city} {order.shippingAddress.code},{" "}
                      {order.shippingAddress.country}
                    </Typography>
                    {order.isDelivered ? (
                      <Message
                        severity={"success"}
                        title={"Delivered"}
                        marginY={"8"}
                      >
                        Order is delivered to the customer on{" "}
                        {order.deliveredAt}
                      </Message>
                    ) : (
                      <Message
                        severity={"error"}
                        title={"Not Delivered"}
                        marginY={"8"}
                      >
                        Order is still not delivered
                      </Message>
                    )}
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText sx={{ mb: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{ my: 3, fontFamily: "Nunito" }}
                    >
                      Payment Method
                    </Typography>
                    <Typography component="p" sx={{ m: 1 }}>
                      <strong>Method: </strong>
                      {order.paymentMethod === "paypal"
                        ? "PayPal"
                        : order.paymentMethod === "stripe"
                        ? "Stripe"
                        : order.paymentMethod === "credit_card"
                        ? "Credit Card"
                        : order.paymentMethod === "bkash"
                        ? "Bkash"
                        : ""}
                    </Typography>
                    {order.isPaid ? (
                      <Message
                        severity={"success"}
                        title={"Paid"}
                        marginY={"5"}
                      >
                        Paid on {order.paidAt}
                      </Message>
                    ) : (
                      <Message
                        severity={"error"}
                        title={"Not Paid"}
                        marginY={"5"}
                      >
                        Payment is still on due.
                      </Message>
                    )}
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText>
                    <Typography
                      variant="h4"
                      sx={{ my: 3, fontFamily: "Nunito" }}
                    >
                      Order Items
                    </Typography>

                    <Table sx={{ p: 2 }} aria-label="simple table">
                      <TableBody>
                        {order.orderItems.map((item, idx) => (
                          <TableRow key={idx}>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              <Card
                                component={Link}
                                to={`/book/${item.book}/details`}
                              >
                                <CardActionArea>
                                  <CardMedia
                                    component="img"
                                    image={`/${item.image ? item.image : 'images/sample_book.jpg'}`}
                                    alt={`${item.title}`}
                                    height="50"
                                    sx={{ objectFit: "contain" }}
                                  />
                                </CardActionArea>
                              </Card>
                            </TableCell>
                            <TableCell align="center">
                              <MuiLink
                                component={Link}
                                to={`/book/${item.book}/details`}
                                sx={{ textDecoration: "none" }}
                              >
                                {item.title}
                              </MuiLink>
                            </TableCell>
                            <TableCell align="center">
                              <Typography>
                                {item.qty} x {item.price} ={" "}
                                {item.qty * item.price}
                                /-
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <Card sx={{ my: 6, ml: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ my: 2 }}>
                    Order Summary
                  </Typography>

                  <Table sx={{ minWidth: 200, p: 2 }} aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="left">
                          <Typography>Items</Typography>
                        </TableCell>
                        <TableCell align="right">
                          {order.itemsPrice}/-
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">
                          <Typography>Shipping</Typography>
                        </TableCell>
                        <TableCell align="right">
                          {order.shippingPrice}/-
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">
                          <Typography>Tax</Typography>
                        </TableCell>
                        <TableCell align="right">{order.taxPrice}/-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">
                          <Typography fontWeight={"bold"}>Total</Typography>
                        </TableCell>
                        <TableCell align="right">
                          {Math.round(order.totalPrice)}/-
                        </TableCell>
                      </TableRow>
                      {/* <TableRow>
                          {error && (
                            <Message severity="error" title="Error!!">
                              {error}
                            </Message>
                          )}
                        </TableRow>
                        <TableRow>
                          <TableCell align="center" colSpan={2} sx={{ border: 0 }}>
                            <Button
                              component="div"
                              variant="contained"
                              onClick={handlePlaceOrder}
                            >
                              Place Order
                            </Button>
                          </TableCell>
                        </TableRow> */}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default OrderDetails;
