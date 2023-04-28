import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

function createData(name, total) {
  return { name, total };
}

const rows = [
  createData("pride & prejudice", "100"),
  createData("cart Subtotal", "400"),
  createData("shipping", "100"),
];

const Checkout = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/cart">
            Cart
          </Link>
          <Typography color="text.primary">Shipping Details</Typography>
          {/* <Link underline="hover" color="inherit" href="/shipping">
            Shipping
          </Link> */}
          <Typography color="text.secondary">Payment</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ maxWidth: 1000, mx: {md: "auto", sm: 4, xs: 2}, my: 6 }}>
        <Grid container spacing={2}>
          <Grid item md={7} sm={12} xs={12}>
            <Typography variant="h4" align="left">
              Billing Details
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
                autoComplete="name"
                autoFocus
              />

              <TextField
                variant="standard"
                margin="normal"
                size="small"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
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
            <Card sx={{ my: 6, ml: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Your Order
                </Typography>

                <TableContainer component="div">
                  <Table sx={{ minWidth: 200, p: 2 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" sx={{ borderBottom: 0 }}>
                          Product
                        </TableCell>
                        <TableCell align="right" sx={{ borderBottom: 0 }}>
                          Total
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="left" sx={{ borderBottom: 0 }}>
                            {row.name}
                          </TableCell>

                          <TableCell align="right" sx={{ borderBottom: 0 }}>
                            {row.total} /-
                          </TableCell>
                        </TableRow>
                      ))}

                      <TableRow>
                        <TableCell align="left" sx={{ borderBottom: 0 }}>
                          <Typography fontWeight="bold">Order Total</Typography>
                        </TableCell>
                        <TableCell align="right" sx={{ borderBottom: 0 }}>
                          600 /-
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Checkout;
