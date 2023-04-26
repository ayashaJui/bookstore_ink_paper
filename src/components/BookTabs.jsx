import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  LinearProgress,
  Link,
  Rating,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: "auto", py: 8, textAlign: "justify" }}>{children}</Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

function createData(name, value, url) {
  return { name, value, url };
}

const rows = [
  createData("ISBN", "BW-1003046"),
  createData("GENRE", "Fiction", "/categories/1"),
  createData("Author", "Jane Austen", "/author/1/profile"),
  createData("Book Format", "Kindle, Hardcover, Paperback"),
  createData("Publisher", "Sheba"),
  createData("Published Year", 1992),
  createData("Editions", 223),
  createData("Pages", 500),
  createData("Series", "Standalone"),

];

const progressValues = [
  {
    type: "5 stars",
    value: 60,
    count: 10,
    color: "success",
  },
  {
    type: "4 stars",
    value: 70,
    count: 50,
    color: "primary",
  },
  {
    type: "3 stars",
    value: 50,
    count: 10,
    color: "secondary",
  },
  {
    type: "2 stars",
    value: 25,
    count: 5,
    color: "error",
  },
  {
    type: "1 stars",
    value: 30,
    count: 3,
    color: "inherit",
  },
];

const BookTabs = () => {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(review, rating);
    setRating(0);
    setReview(" ");
  };

  return (
    <Box sx={{ width: "100%", mt: 8, mb: 15 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Product Details" {...a11yProps(1)} />
          <Tab label="Reviews (3)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography sx={{ minWidth: 200, px: { xs: 1, sm: 10, md: 15 } }}>
          We aim to show you accurate product information. Manufacturers,
          suppliers and others provide what you see here, and we have not
          verified it. See our disclaimer #1 New York Times Bestseller A Reese
          Witherspoon x Hello Sunshine Book Club Pick “I can't even express how
          much I love this book! I didn't want this story to end!” - Reese
          Witherspoon “Painfully beautiful.” - The New York Times Book Review
          “Perfect for fans of Barbara Kingsolver.” - Bustle For years, rumors
          of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the
          North Carolina coast. So in late 1969, when handsome Chase Andrews is
          found dead, the locals immediately suspect Kya Clark, the so-called
          Marsh Girl. But Kya is not what they say. Sensitive and intelligent,
          she has survived for years alone in the marsh that she calls home,
          finding friends in the gulls and lessons in the sand. Then the time
          comes when she yearns to be touched and loved. When two young men from
          town become intrigued by her wild beauty, Kya opens herself to a new
          life - until the unthinkable happens. Perfect for fans of Barbara
          Kingsolver and Karen Russell, Where the Crawdads Sing is at once an
          exquisite ode to the natural world, a heartbreaking coming-of-age
          story, and a surprising tale of possible murder. Owens reminds us that
          we are forever shaped by the children we once were, and that we are
          all subject to the beautiful and violent secrets that nature keeps
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TableContainer component="div">
          <Table
            sx={{ minWidth: 200, maxWidth: 500, mx: "auto" }}
            aria-label="simple table"
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ borderBottom: "none", fontWeight: "bold" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ borderBottom: "none" }}>
                    {row.url ? (
                      <Link href={`${row.url}`} sx={{ textDecoration: "none" }}>
                        {row.value}
                      </Link>
                    ) : (
                      row.value
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box sx={{ maxWidth: 800, px: 1, mx: "auto", mb: 5 }}>
          <Grid container spacing={3} justifyContent="space-evenly">
            <Grid item md={5} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Ratings (30)</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "50px",
                    my: 3,
                    fontWeight: "bold",
                    px: 2,
                  }}
                >
                  3.0
                </Typography>
                <Rating
                  name="read-only"
                  value={3.0}
                  precision={0.5}
                  readOnly
                  sx={{ px: 1 }}
                />
              </Box>
            </Grid>

            <Grid item md={7} sm={6} xs={12}>
              {progressValues.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    my: 2,
                  }}
                >
                  <Box sx={{ minWidth: 60 }}>
                    <Typography variant="body2">{item.type}</Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      color={`${item.color}`}
                      sx={{ mr: 2 }}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2">{item.count}</Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>

        <Divider />

        <Box sx={{ mt: 3, mb: 5, px: { md: 10, sm: 5, xs: 1 }, minWidth: 200 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 5 }}>
            Reviews (15)
          </Typography>
          <Box>
            <Card sx={{ my: 2, boxShadow: "none" }}>
              <CardContent>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ fontSize: "16px" }}
                >
                  John Doe
                  <Typography component="span" variant="body2" sx={{ ml: 5 }}>
                    March 20, 2023
                  </Typography>
                </Typography>

                <Rating
                  name="read-only"
                  value={3}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "15px", my: 1 }}
                />
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quod, provident! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Fugiat, expedita! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Et, officia.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ my: 2, boxShadow: "none" }}>
              <CardContent>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ fontSize: "16px" }}
                >
                  John Doe
                  <Typography component="span" variant="body2" sx={{ ml: 5 }}>
                    March 20, 2023
                  </Typography>
                </Typography>

                <Rating
                  name="read-only"
                  value={3}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "15px", my: 1 }}
                />
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quod, provident! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Fugiat, expedita!
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Divider sx={{ maxWidth: 800, mx: "auto" }} />

        <Box sx={{ mt: 3, mb: 5, minWidth: 200, px: { md: 10, sm: 5, xs: 1 } }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 5 }}>
            Write a Review
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Rating
              name="rating"
              value={rating}
              precision={0.5}
              onChange={(event) => setRating(+event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={8}
              id="review"
              label="Review"
              name="review"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, bgcolor: "#272643", borderRadius: 0 }}
              size="large"
            >
              Post
            </Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default BookTabs;
