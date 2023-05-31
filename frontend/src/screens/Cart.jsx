import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  MenuItem,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../layouts/Message";

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quantity = location.search
    ? Number(location.search.split("&")[0].split("=")[1])
    : 1;
  const formatChosen = location.search
    ? Number(location.search.split("&")[1].split("=")[1])
    : 0;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleItemRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate("/login?redirect=checkout");
  };

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity, formatChosen));
    }
  }, [dispatch, id, quantity, formatChosen]);

  return (
    <div>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink component={Link} underline="hover" color="inherit" to="/">
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            underline="hover"
            color="inherit"
            to="/shop"
          >
            Shop
          </MuiLink>
          <Typography color="text.primary">Cart</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      {cartItems.length === 0 ? (
        <Message title="Empty Cart">
          Your cart is empty. <Link to="/shop">Go to shop</Link>
        </Message>
      ) : (
        <Box sx={{ mx: { md: 10, sm: 4, xs: 2 }, my: 6 }}>
          <TableContainer component="div">
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Book Format</TableCell>
                  <TableCell align="center">Price&nbsp;(each) </TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="center">Remove</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.book}>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "bold" }}
                    >
                      <Card component={Link} to={`/book/${item.book}/details`}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={`/${item.image}`}
                            alt={`${item.title}`}
                            height="80"
                            width="20"
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
                      <TextField
                        size="small"
                        id="outlined-select-bookformat"
                        select
                        value={item.formatType}
                        onChange={(e) =>
                          dispatch(
                            addToCart(
                              item.book,
                              item.quantity,
                              Number(e.target.value)
                            )
                          )
                        }
                        sx={{ borderRadius: 0 }}
                      >
                        {item.format.map((option, idx) => (
                          <MenuItem key={idx} value={idx}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>

                    <TableCell align="center">
                      {item.price[item.formatType]}/-
                    </TableCell>

                    <TableCell align="center">
                      <TextField
                        size="small"
                        id="outlined-select-bookformat"
                        select
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            addToCart(
                              item.book,
                              Number(e.target.value),
                              item.formatType
                            )
                          )
                        }
                        sx={{ borderRadius: 0 }}
                      >
                        {[
                          ...Array(item.countInStock[item.formatType]).keys(),
                        ].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>

                    <TableCell align="center">
                      {item.price[item.formatType] * item.quantity}/-
                    </TableCell>

                    <TableCell align="center">
                      <Button onClick={() => handleItemRemove(item.book)}>
                        <CloseIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={4} sx={{ fontWeight: "bold" }}>
                    Subtotal
                  </TableCell>
                  <TableCell colSpan={3} sx={{ fontWeight: "bold" }}>
                    {cartItems
                      .reduce(
                        (acc, item) =>
                          acc + item.quantity * item.price[item.formatType],
                        0
                      )
                      .toFixed(2)}
                    /-
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            onClick={handleCheckout}
            variant="contained"
            sx={{ mt: 6, borderRadius: 0, bgcolor: "#272643" }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Cart;
