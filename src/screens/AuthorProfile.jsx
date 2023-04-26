import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function createData(name, value, url) {
  return { name, value, url };
}

const rows = [
  createData("Born", "14th April, 1969"),
  createData("Website", "https://johndoe.com"),
  createData("Twitter", "johnDoe", "www.twitter.com"),
  createData("Member Since", "2012"),
];

const AuthorProfile = () => {
  return (
    <div>
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/authors">
            Authors List
          </Link>
          <Typography color="text.primary">John Doe</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box sx={{ maxWidth: 1000, mx: "auto", my: 4 , px: {sm: 2}}}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={4}>
            <Card sx={{ p: 2, boxShadow: "none" }}>
              <CardMedia
                component="img"
                image="/images/authors/14.jpg"
                alt="author"
                height="300px"
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#2c698d", my: 2 }}
              >
                Follow
              </Button>
            </Card>
          </Grid>

          <Grid item md={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 2,
                pb: 1,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                John Doe
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Registered Author
              </Typography>
            </Box>
            <Divider />
            <TableContainer component="div">
              <Table sx={{ p: 1, maxWidth: 450 }} aria-label="simple table">
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
                          <Link
                            href={`${row.url}`}
                            sx={{ textDecoration: "none" }}
                          >
                            {row.value}
                          </Link>
                        ) : (
                          row.value
                        )}
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow key={"genre"}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "none", fontWeight: "bold" }}
                    >
                      Genre
                    </TableCell>
                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                      <Link
                        href={`/#`}
                        sx={{ textDecoration: "none", px: 0.5 }}
                      >
                        Thriller
                      </Link>
                      ,
                      <Link
                        href={`/#`}
                        sx={{ textDecoration: "none", px: 0.5 }}
                      >
                        Thriller
                      </Link>
                      ,
                      <Link
                        href={`/#`}
                        sx={{ textDecoration: "none", px: 0.5 }}
                      >
                        Thriller
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body2" sx={{ p: 1, my: 2, textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Asperiores, necessitatibus. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ex dignissimos reiciendis animi
              dolore labore excepturi ipsam! Blanditiis ut consectetur repellat
              ducimus quo alias, provident aperiam delectus optio expedita.
              Nostrum accusamus magni velit iusto debitis aliquid ullam
              consequuntur doloribus vero quibusdam ipsa odit esse, fuga
              repellendus veniam animi quod, similique excepturi!
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              odit voluptatibus, neque blanditiis fugiat velit soluta labore,
              nemo qui fuga tenetur natus ullam in, possimus optio atque quam!
              Quod, dolores.
            </Typography>

            <Typography variant="h6" sx={{ textAlign: "left", p: 1, mt: 6 }}>
              John Doe's Books
            </Typography>
            <Divider />
            <Typography variant="caption" sx={{ p: 1 }}>
              Average rating: 4.5 | Rated by 5200 people | 500 reviews | 200
              Books
            </Typography>

            <Card sx={{ my: 1, boxShadow: "none" }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignContent="center"
              >
                <Grid item md={2}>
                  <CardMedia
                    component="img"
                    image="/images/new_arrivals/pride_and_prejudice.jpg"
                    alt="featured image"
                    height="100"
                    sx={{ p: 1 }}
                  />
                </Grid>

                <Grid item md={7}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", fontWeight: "bold" }}
                    >
                      Pride and Prejudice
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "left", fontSize: "12px" }}
                    >
                      by Jane Austen
                    </Typography>

                    <Box
                      component="div"
                      sx={{
                        textAlign: "left",
                        py: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        readOnly
                        name="customized"
                        defaultValue={2.5}
                        precision={0.5}
                        icon={<StarIcon sx={{ fontSize: 20 }} />}
                        emptyIcon={<StarBorderIcon sx={{ fontSize: 20 }} />}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ ml: 2, fontSize: 12 }}
                      >
                        {" "}
                        - 5000 ratings
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: 12, ml: 2 }}
                      >
                        (1500 Reviews)
                      </Typography>
                    </Box>
                  </CardContent>
                </Grid>

                <Grid item md={3} justifyContent="center">
                  <Typography
                    variant="subtitle2"
                    sx={{ textAlign: "center", fontSize: "15px" }}
                  >
                    BDT 5.58
                  </Typography>
                  <CardActions sx={{  }}>
                    <Button
                      size="small"
                      href="/books/1/details"
                      variant="outlined"
                      sx={{ borderColor: "#fff" }}
                    >
                      view Details
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>

            <Divider />
            <Card sx={{ my: 1, boxShadow: "none" }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignContent="center"
              >
                <Grid item md={2}>
                  <CardMedia
                    component="img"
                    image="/images/new_arrivals/pride_and_prejudice.jpg"
                    alt="featured image"
                    height="100"
                    sx={{ p: 1 }}
                  />
                </Grid>

                <Grid item md={7}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", fontWeight: "bold" }}
                    >
                      Pride and Prejudice
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "left", fontSize: "12px" }}
                    >
                      by Jane Austen
                    </Typography>

                    <Box
                      component="div"
                      sx={{
                        textAlign: "left",
                        py: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        readOnly
                        name="customized"
                        defaultValue={2.5}
                        precision={0.5}
                        icon={<StarIcon sx={{ fontSize: 20 }} />}
                        emptyIcon={<StarBorderIcon sx={{ fontSize: 20 }} />}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ ml: 2, fontSize: 12 }}
                      >
                        {" "}
                        - 5000 ratings
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: 12, ml: 2 }}
                      >
                        (1500 Reviews)
                      </Typography>
                    </Box>
                  </CardContent>
                </Grid>

                <Grid item md={3} justifyContent="center">
                  <Typography
                    variant="subtitle2"
                    sx={{ textAlign: "center", fontSize: "15px" }}
                  >
                    BDT 5.58
                  </Typography>
                  <CardActions sx={{ ml: 3 }}>
                    <Button
                      size="small"
                      href="/books/1/details"
                      variant="outlined"
                      sx={{ borderColor: "#fff" }}
                    >
                      view Details
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
            <Divider />

            <Stack spacing={2} sx={{ mt: 10, mb: 6, alignItems: "center" }}>
              <Pagination
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AuthorProfile;
