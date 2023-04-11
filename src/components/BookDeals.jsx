import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BookDeals = () => {
  return (
    <Box component="div" sx={{ mx: 4, mb: 8 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 7,
          mb: 3,
          fontFamily: "Roboto",
          color: "#272643",
          textAlign: "left",
        }}
      >
        Books With Offer
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={false}>
          <Card
            sx={{
              bgcolor: "#e3f6f5",

              boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.43)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={300}
                image="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="pride_prejudice"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h6" sx={{ my: 0.5 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{}}>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "#9B908A",
                        fontSize: "18px",
                      }}
                    >
                      BDT 6.60
                    </Typography>
                  </Grid>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
                      BDT 5.58
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box
                component="div"
                sx={{
                  backgroundColor: "rgba(39, 38, 67, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ color: "#e3f6f5", my: 2, bgcolor: "#2c698d" }}
                  href="/book/id/details"
                >
                  Details
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Avatar>
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} sm={6} xs={false}>
          <Card
            sx={{
              bgcolor: "#e3f6f5",

              boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.43)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={300}
                image="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="pride_prejudice"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h6" sx={{ my: 0.5 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{}}>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "#9B908A",
                        fontSize: "18px",
                      }}
                    >
                      BDT 6.60
                    </Typography>
                  </Grid>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
                      BDT 5.58
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box
                component="div"
                sx={{
                  backgroundColor: "rgba(39, 38, 67, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ color: "#e3f6f5", my: 2, bgcolor: "#2c698d" }}
                  href="/book/id/details"
                >
                  Details
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Avatar>
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} sm={6} xs={false}>
          <Card
            sx={{
              bgcolor: "#e3f6f5",

              boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.43)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={300}
                image="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="pride_prejudice"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h6" sx={{ my: 0.5 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{}}>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "#9B908A",
                        fontSize: "18px",
                      }}
                    >
                      BDT 6.60
                    </Typography>
                  </Grid>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
                      BDT 5.58
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box
                component="div"
                sx={{
                  backgroundColor: "rgba(39, 38, 67, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ color: "#e3f6f5", my: 2, bgcolor: "#2c698d" }}
                  href="/book/id/details"
                >
                  Details
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Avatar>
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} sm={6} xs={false}>
          <Card
            sx={{
              bgcolor: "#e3f6f5",

              boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.43)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={300}
                image="/images/new_arrivals/pride_and_prejudice.jpg"
                alt="pride_prejudice"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="div" color="error">
                  Hardcover
                </Typography>
                <Typography variant="h6" sx={{ my: 0.5 }}>
                  Pride & Prejudice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by Jane Austen
                </Typography>
                <Grid container spacing={2} sx={{}}>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "#9B908A",
                        fontSize: "18px",
                      }}
                    >
                      BDT 6.60
                    </Typography>
                  </Grid>
                  <Grid item md={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
                      BDT 5.58
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box
                component="div"
                sx={{
                  backgroundColor: "rgba(39, 38, 67, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ color: "#e3f6f5", my: 2, bgcolor: "#2c698d" }}
                  href="/book/id/details"
                >
                  Details
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_cart"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                </Button>
                <Button
                  size="large"
                  href="/book/id/add_favorite"
                  sx={{ color: "#e3f6f5", my: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2c698d",
                      "&:hover": { bgcolor: "#1565C0" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Avatar>
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        href="/offers"
        sx={{ my: 8, bgcolor: "#2c698d" }}
      >
        Browse More
      </Button>
    </Box>
  );
};

export default BookDeals;
