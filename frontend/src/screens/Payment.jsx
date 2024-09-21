import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Link as MuiLink,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import OrderCard from "../components/OrderCard";
import Navbar from "../layouts/Navbar";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  if (!shippingAddress) {
    navigate("/checkout");
  }

  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/place_order");
  };
  return (
    <div>
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

          <Typography color="text.primary">Payment</Typography>
          <Typography color="text.secondary">Place Order</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ maxWidth: 1000, mx: { md: "auto", sm: 4, xs: 2 }, my: 6 }}>
        <Grid container spacing={2}>
          <Grid item md={7} sm={12} xs={12}>
            <Typography variant="h4">Payment Method</Typography>
            <FormControl
              sx={{ my: 5 }}
              component={"form"}
              onSubmit={handleSubmit}
            >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={paymentMethod}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="paypal"
                  control={<Radio />}
                  label="Paypal"
                />
                <FormControlLabel
                  value="stripe"
                  control={<Radio />}
                  label="Stripe"
                />
                <FormControlLabel
                  value="sslcommerz"
                  control={<Radio />}
                  label="SSLCOMMERZ"
                />
                <FormControlLabel
                  value="bkash"
                  control={<Radio />}
                  label="Bkash"
                />
              </RadioGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, my: 6 }}
              >
                Continue
              </Button>
            </FormControl>
          </Grid>

          <Grid item md={5} sm={12} xs={12}>
            <OrderCard cartItems={cartItems} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Payment;
