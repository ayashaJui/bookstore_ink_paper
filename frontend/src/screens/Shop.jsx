import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import HeroImage from "../components/HeroImage";
import ShopSidebar from "../components/ShopSidebar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

const Shop = () => {
  return (
    <Box component="div">
      <HeroImage title="Shop" imgPath="/images/static/shop.jpg" />
      <Box component="div" sx={{ mx: {md: 10, sm: 5, xs: 1}, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item md={3} sm={9} xs={12}>
            <Card sx={{ mt: 4, boxShadow: "none", border: "1px solid #ccc" }}>
              <ShopSidebar />
            </Card>
          </Grid>

          <Grid item md={9} sm={12} xs={12}>
            <Grid container spacing={3}>
              <Grid item md={4} sm={6} xs={12}>
                <Card
                  sx={{ mt: 4, boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)" }}
                >
                  <Box component="div" sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      alt="shop"
                      height="350"
                      image="/images/new_arrivals/pride_and_prejudice.jpg"
                    />
                    <Chip
                      label="Sale"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        borderRadius: 0,
                        color: "#fff",
                        bgcolor: "#272643",
                        fontWeight: "bold",
                        p: 1,
                        letterSpacing: 0.5,
                      }}
                    />
                  </Box>
                  <CardActionArea>
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        variant="caption"
                        component="div"
                        color="error"
                      >
                        Hardcover
                      </Typography>
                      <Typography variant="h6" sx={{ my: 0.5 }}>
                        Pride & Prejudice
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by Jane Austen
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ mt: 1, fontSize: "18px" }}
                        fontWeight={"bold"}
                      >
                        BDT 5.58
                      </Typography>
                    </CardContent>
                    <Box
                      component="div"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box component={"div"}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                      <Box component="div">
                        <Button
                          size="medium"
                          href="/book/id/add_cart"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ShoppingCartIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/id/add_favorite"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <FavoriteBorderIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/1/details"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ReadMoreIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                <Card
                  sx={{ mt: 4, boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)" }}
                >
                  <Box component="div" sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      alt="shop"
                      height="350"
                      image="/images/new_arrivals/pride_and_prejudice.jpg"
                    />
                    <Chip
                      label="Sale"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        borderRadius: 0,
                        color: "#fff",
                        bgcolor: "#272643",
                        fontWeight: "bold",
                        p: 1,
                        letterSpacing: 0.5,
                      }}
                    />
                  </Box>
                  <CardActionArea>
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        variant="caption"
                        component="div"
                        color="error"
                      >
                        Hardcover
                      </Typography>
                      <Typography variant="h6" sx={{ my: 0.5 }}>
                        Pride & Prejudice
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by Jane Austen
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ mt: 1, fontSize: "18px" }}
                        fontWeight={"bold"}
                      >
                        BDT 5.58
                      </Typography>
                    </CardContent>
                    <Box
                      component="div"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box component={"div"}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                      <Box component="div">
                        <Button
                          size="medium"
                          href="/book/id/add_cart"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ShoppingCartIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/id/add_favorite"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <FavoriteBorderIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/1/details"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ReadMoreIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                <Card
                  sx={{ mt: 4, boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)" }}
                >
                  <Box component="div" sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      alt="shop"
                      height="350"
                      image="/images/new_arrivals/pride_and_prejudice.jpg"
                    />
                    <Chip
                      label="Sale"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        borderRadius: 0,
                        color: "#fff",
                        bgcolor: "#272643",
                        fontWeight: "bold",
                        p: 1,
                        letterSpacing: 0.5,
                      }}
                    />
                  </Box>
                  <CardActionArea>
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        variant="caption"
                        component="div"
                        color="error"
                      >
                        Hardcover
                      </Typography>
                      <Typography variant="h6" sx={{ my: 0.5 }}>
                        Pride & Prejudice
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by Jane Austen
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ mt: 1, fontSize: "18px" }}
                        fontWeight={"bold"}
                      >
                        BDT 5.58
                      </Typography>
                    </CardContent>
                    <Box
                      component="div"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box component={"div"}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                      <Box component="div">
                        <Button
                          size="medium"
                          href="/book/id/add_cart"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ShoppingCartIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/id/add_favorite"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <FavoriteBorderIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/1/details"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ReadMoreIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                <Card
                  sx={{ mt: 4, boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)" }}
                >
                  <Box component="div" sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      alt="shop"
                      height="350"
                      image="/images/new_arrivals/pride_and_prejudice.jpg"
                    />
                    <Chip
                      label="Sale"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        borderRadius: 0,
                        color: "#fff",
                        bgcolor: "#272643",
                        fontWeight: "bold",
                        p: 1,
                        letterSpacing: 0.5,
                      }}
                    />
                  </Box>
                  <CardActionArea>
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        variant="caption"
                        component="div"
                        color="error"
                      >
                        Hardcover
                      </Typography>
                      <Typography variant="h6" sx={{ my: 0.5 }}>
                        Pride & Prejudice
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by Jane Austen
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ mt: 1, fontSize: "18px" }}
                        fontWeight={"bold"}
                      >
                        BDT 5.58
                      </Typography>
                    </CardContent>
                    <Box
                      component="div"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box component={"div"}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                      <Box component="div">
                        <Button
                          size="medium"
                          href="/book/id/add_cart"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ShoppingCartIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/id/add_favorite"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <FavoriteBorderIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                        <Button
                          size="medium"
                          href="/book/1/details"
                          sx={{ color: "#e3f6f5" }}
                        >
                          <ReadMoreIcon
                            sx={{
                              color: "#2c698d",
                              fontSize: "30px",
                              "&:hover": { color: "#1565C0" },
                            }}
                          />
                        </Button>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>

            <Stack spacing={2} sx={{ mt: 10, mb: 6, alignItems: "center" }}>
              <Pagination
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      previous: ArrowBackIcon,
                      next: ArrowForwardIcon,
                    }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop;
