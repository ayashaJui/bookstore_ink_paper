import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToFavorite } from "../actions/favoriteActions";
import { useDispatch } from "react-redux";

function createData(img, name, price, stock, url, id) {
  return { img, name, price, stock, url, id };
}

const rows = [
  createData(
    "/images/new_arrivals/pride_and_prejudice.jpg",
    "Pride & Prejudice",
    "100 /-",
    "In stock",
    "/url",
    1
  ),
  createData(
    "/images/new_arrivals/pride_and_prejudice.jpg",
    "Pride & Prejudice",
    "100 /-",
    "In stock",
    "/url",
    11
  ),
];
const Favorite = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToFavorite(id));
  });

  const handleItemRemove = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
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
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    <Card component="a" href={`${row.url}`}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={`${row.img}`}
                          alt="featured image"
                          height="150"
                          sx={{ width: { md: "60%", sm: "100%" }, mx: "auto" }}
                        />
                      </CardActionArea>
                    </Card>
                  </TableCell>

                  <TableCell align="center">
                    <Link href={`${row.url}`} sx={{ textDecoration: "none" }}>
                      {row.name}
                    </Link>
                  </TableCell>

                  <TableCell align="center">{row.price}</TableCell>

                  <TableCell align="center">
                    <Typography fontWeight="bold">{row.stock}</Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Button onClick={() => handleItemRemove(row.id)}>
                      <CloseIcon />
                    </Button>
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      onClick={() => handleItemRemove(row.id)}
                      //   variant="outlined"
                    >
                      Add to cart
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Favorite;
