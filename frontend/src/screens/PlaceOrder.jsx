import {
  Box,
  Breadcrumbs,
  Button,
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
import { Link, useNavigate } from "react-router-dom";
import { makeOfferPrice } from "../helper/helperFunction";
import { createOrder } from "../actions/orderActions";
import { useEffect } from "react";

import Message from "../layouts/Message";
import Navbar from "../layouts/Navbar";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const { shippingAddress, paymentMethod, cartItems } = cart;

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce(
      (acc, item) =>
        acc +
        makeOfferPrice(item.offer, item.price[item.formatType]) * item.quantity,
      0
    )
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice < 1000 ? 50 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderItems = cartItems.map((item) => ({
    title: item.title,
    qty: item.quantity,
    image: item.image,
    price: makeOfferPrice(item.offer, item.price[item.formatType]),
    format: item.format[item.formatType],
    book: item.book,
  }));

  const baseUrl = process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:5000";

  const { success, error, order } = useSelector((state) => state.orderCreate);

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [navigate, success]);

  const handlePlaceOrder = () => {
    dispatch(
      createOrder({
        orderItems,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <Navbar />
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink
            underline="hover"
            color="inherit"
            to="/cart"
            component={Link}
          >
            Cart
          </MuiLink>
          <MuiLink
            underline="hover"
            color="inherit"
            to="/checkout"
            component={Link}
          >
            Shipping Details
          </MuiLink>

          <MuiLink
            underline="hover"
            color="inherit"
            to="/payment"
            component={Link}
          >
            Payment
          </MuiLink>

          <Typography color="text.primary">Place Order</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ maxWidth: 1000, mx: { md: "auto", sm: 4, xs: 2 }, my: 6 }}>
        <Grid container spacing={2}>
          <Grid item md={7} sm={12} xs={12}>
            <List>
              <ListItem disablePadding>
                {/* <Typography variant="h5">Shipping</Typography> */}
                <ListItemText sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ my: 3, fontFamily: "Nunito" }}>
                    Shipping
                  </Typography>
                  <Typography component="p" sx={{ m: 1 }}>
                    <strong>To: </strong>
                    {shippingAddress.name}
                  </Typography>
                  <Typography component="p" sx={{ m: 1 }}>
                    <strong>Address: </strong>
                    {shippingAddress.street}, {shippingAddress.city} ,{" "}
                    {shippingAddress.country} - {shippingAddress.code}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemText sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ my: 3, fontFamily: "Nunito" }}>
                    Payment Method
                  </Typography>
                  <Typography component="p" sx={{ m: 1 }}>
                    <strong>Method: </strong>
                    {paymentMethod === "paypal"
                      ? "PayPal"
                      : paymentMethod === "stripe"
                      ? "Stripe"
                      : paymentMethod === "credit_card"
                      ? "Credit Card"
                      : paymentMethod === "bkash"
                      ? "Bkash"
                      : ""}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemText>
                  <Typography variant="h4" sx={{ my: 3, fontFamily: "Nunito" }}>
                    Order Items
                  </Typography>

                  <Table sx={{ p: 2 }} aria-label="simple table">
                    <TableBody>
                      {cartItems.map((item, idx) => (
                        <TableRow key={idx}>
                          <TableCell align="center" component="th" scope="row">
                            <Card
                              component={Link}
                              to={`/book/${item.book}/details`}
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={`${
                                    item.image
                                      ? baseUrl +
                                        item.image
                                      : "/images/sample_book.jpg"
                                  }`}
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
                              {item.quantity} x{" "}
                              {makeOfferPrice(
                                item.offer,
                                item.price[item.formatType]
                              )}{" "}
                              ={" "}
                              {item.quantity *
                                makeOfferPrice(
                                  item.offer,
                                  item.price[item.formatType]
                                )}
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

                {/* <TableContainer component="div"> */}
                <Table sx={{ minWidth: 200, p: 2 }} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        <Typography>Items</Typography>
                      </TableCell>
                      <TableCell align="right">{cart.itemsPrice}/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        <Typography>Shipping</Typography>
                      </TableCell>
                      <TableCell align="right">
                        {cart.shippingPrice}/-
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        <Typography>Tax</Typography>
                      </TableCell>
                      <TableCell align="right">{cart.taxPrice}/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        <Typography fontWeight={"bold"}>Total</Typography>
                      </TableCell>
                      <TableCell align="right">
                        {Math.round(cart.totalPrice)}/-
                      </TableCell>
                    </TableRow>
                    <TableRow>
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
                    </TableRow>
                  </TableBody>
                </Table>
                {/* </TableContainer> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PlaceOrder;
