import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { addToFavorite, removeFromFavorite } from "../actions/favoriteActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../layouts/Message";
import { addToCart } from "../actions/cartActions";
import { makeOfferPrice } from "../helper/shopHelper";

const Favorite = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const quantity = location.search
    ? Number(location.search.split("&")[0].split("=")[1])
    : 1;
  const formatChosen = location.search
    ? Number(location.search.split("&")[1].split("=")[1])
    : 0;

  const favorite = useSelector((state) => state.favorite);
  const { favoriteItems } = favorite;

  useEffect(() => {
    if (id) {
      dispatch(addToFavorite(id));
    }
  }, [dispatch, id]);

  const handleItemRemove = (id) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <div>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink underline="hover" color="inherit" href="/">
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
          <Typography color="text.primary">Favorite List</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box
        align="center"
        sx={{ maxWidth: 1000, minWidth: 250, mx: { md: "auto", sm: 4 }, my: 6 }}
      >
        <Typography variant="h4" fontWeight="bold">
          Favorite List
        </Typography>

        {favoriteItems.length === 0 ? (
          <Message title="Empty ">
            Your favorite list is empty. <Link to="/shop">Go to shop</Link>
          </Message>
        ) : (
          <TableContainer component="div">
            <Table sx={{ minWidth: 200, mt: 6 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Price&nbsp;(each) </TableCell>
                  <TableCell align="center">Stock Status</TableCell>
                  <TableCell align="center">Remove</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favoriteItems.map((item) => (
                  <TableRow key={item.book}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "bold" }}
                    >
                      <Card component={Link} to={`/book/${item.book}/details`}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={`/${item.image}`}
                            alt={item.title}
                            height="150"
                            sx={{
                              objectFit: "contain",
                            }}
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
                      {item.offer ? (
                        <>
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "#9B908A",
                              fontSize: "0.875rem",
                            }}
                          >
                            {item.price[0]}
                          </Typography>

                          <Typography sx={{ fontSize: "0.875rem" }}>
                            {/* {item.price[0] -
                              item.price[0] * (Number(item.offer) / 100)} */}
                            {makeOfferPrice(item.offer, item.price[0])}
                          </Typography>
                        </>
                      ) : (
                        item.price[0]
                      )}
                    </TableCell>

                    <TableCell align="center">
                      <Typography fontWeight="bold">
                        {item.countInStock[0] && item.countInStock[0] > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Button onClick={() => handleItemRemove(item.book)}>
                        <CloseIcon />
                      </Button>
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          dispatch(
                            addToCart(item.book, quantity, formatChosen)
                          );
                          dispatch(removeFromFavorite(item.book));
                          navigate("/cart");
                        }}
                      >
                        Add to cart
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </div>
  );
};

export default Favorite;
