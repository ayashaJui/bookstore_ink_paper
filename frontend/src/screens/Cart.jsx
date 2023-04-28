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

function createData(
  img,
  name,
  format,
  each_price,
  quantity,
  total_price,
  url,
  id
) {
  return { img, name, format, each_price, quantity, total_price, url, id };
}

const rows = [
  createData(
    "/images/new_arrivals/pride_and_prejudice.jpg",
    "Pride & Prejudice",
    "Paperback",
    "100 /-",
    "2",
    "200 /-",
    "/url",
    1
  ),
  createData(
    "/images/new_arrivals/pride_and_prejudice.jpg",
    "Pride & Prejudice",
    "Paperback",
    "100 /-",
    "2",
    "200 /-",
    "/url",
    2
  ),
  createData(
    "/images/new_arrivals/pride_and_prejudice.jpg",
    "Pride & Prejudice",
    "Paperback",
    "100 /-",
    "2",
    "200 /-",
    "/url",
    13
  ),
];

const Cart = () => {
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
          <Typography color="text.primary">Cart</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ mx: {md: 10, sm: 4, xs: 2}, my: 6 }}>
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
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    align="center"
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
                          height="80"
                          width="20"
                        />
                      </CardActionArea>
                    </Card>
                  </TableCell>

                  <TableCell align="center">
                    <Link href={`${row.url}`} sx={{ textDecoration: "none" }}>
                      {row.name}
                    </Link>
                  </TableCell>

                  <TableCell align="center">{row.format}</TableCell>

                  <TableCell align="center">{row.each_price}</TableCell>

                  <TableCell align="center">{row.quantity}</TableCell>

                  <TableCell align="center">{row.total_price}</TableCell>

                  <TableCell align="center">
                    <Button onClick={() => handleItemRemove(row.id)}>
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
                  500/-
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button href="/checkout" variant="contained" sx={{mt: 6, borderRadius: 0, bgcolor: '#272643'}}>Proceed to Checkout</Button>
      </Box>
    </div>
  );
};

export default Cart;
