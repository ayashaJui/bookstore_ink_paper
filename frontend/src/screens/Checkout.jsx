import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartActions";
import OrderCard from "../components/OrderCard";
import Navbar from "../layouts/Navbar";

const Checkout = () => {
  const { cartItems, shippingAddress } = useSelector((state) => state.cart);

  const [name, setName] = useState(shippingAddress?.name || "");
  const [phone, setPhone] = useState(shippingAddress?.phone || "");
  const [country, setCountry] = useState(shippingAddress?.country || "");
  const [street, setStreet] = useState(shippingAddress?.street || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [code, setCode] = useState(shippingAddress?.code || "");
  const [formError, setFormError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !country || !street || !city || !code) {
      setFormError(true);
      return;
    }

    setFormError(false);
    // console.log({ name, phone, country, street, city, code });
    dispatch(saveShippingAddress({ name, phone, country, street, city, code }));
    navigate("/payment");
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
          <Typography color="text.primary">Shipping Details</Typography>

          <Typography color="text.secondary">Payment</Typography>
          <Typography color="text.secondary">Place Order</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ maxWidth: 1000, mx: { md: "auto", sm: 4, xs: 2 }, my: 6 }}>
        <Grid container spacing={2}>
          <Grid item md={7} sm={12} xs={12}>
            <Typography variant="h4" align="left">
              Shipping Details
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3, mx: 2 }}
            >
              <TextField
                variant="standard"
                margin="normal"
                size="small"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={formError && !name}
                helperText={formError && !name ? "Full Name is required" : ""}
              />

              <TextField
                variant="standard"
                margin="normal"
                size="small"
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                variant="standard"
                margin="normal"
                size="small"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                error={formError && !country}
                helperText={formError && !country ? "Country is required" : ""}
              />
              <TextField
                variant="standard"
                margin="normal"
                size="small"
                required
                fullWidth
                id="street"
                label="Street Address"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                error={formError && !street}
                helperText={formError && !street ? "Street is required" : ""}
              />
              <TextField
                variant="standard"
                margin="normal"
                size="small"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                error={formError && !city}
                helperText={formError && !city ? "City is required" : ""}
              />
              <TextField
                variant="standard"
                margin="normal"
                size="small"
                required
                fullWidth
                id="postal"
                label="Postal Code"
                name="postal"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                error={formError && !code}
                helperText={formError && !code ? "postal Code is required" : ""}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, my: 6 }}
              >
                Continue
              </Button>
            </Box>
          </Grid>

          <Grid item md={5} sm={12} xs={12}>
            <OrderCard cartItems={cartItems} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Checkout;
