import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { makeOfferPrice } from "../helper/helperFunction";

const OrderCard = ({ cartItems }) => {
  return (
    <Card sx={{ my: 6, ml: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ my: 2 }}>
          Your Order
        </Typography>

        <TableContainer component="div">
          <Table sx={{ minWidth: 200, p: 2 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Product</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell align="left">{item.title}</TableCell>

                  <TableCell align="right">
                    {makeOfferPrice(item.offer, item.price[item.formatType]) *
                      item.quantity}{" "}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell
                  align="left"
                  sx={{ borderBottom: 0, fontWeight: "bold" }}
                >
                  Cart Total
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: 0, fontWeight: "bold" }}
                >
                  {cartItems
                    .reduce(
                      (acc, item) =>
                        acc +
                        item.quantity *
                          makeOfferPrice(
                            item.offer,
                            item.price[item.formatType]
                          ),
                      0
                    )
                    .toFixed(2)}
                  /-
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
