import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";

const BookCard = ({ mediaHeight, cardColor, cardMargin }) => {
  return (
    <Grid item sm={4} xs={6} md={3}>
      <Card
        sx={{
          bgcolor: `${cardColor}`,
          mx: `${cardMargin}`,
          boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.43)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={mediaHeight}
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
              <Grid item md={8} sx={{ color: "#FF9529", mt: 0.5 }}>
                <StarIcon sx={{ fontSize: 20 }} />
                <StarIcon sx={{ fontSize: 20 }} />
                <StarIcon sx={{ fontSize: 20 }} />
                <StarHalfIcon sx={{ fontSize: 20 }} />
                <StarBorderIcon sx={{ fontSize: 20 }} />
                <Typography variant="subtitle2" sx={{ fontSize: 10 }}>
                  (1500 Reviews)
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant="subtitle1">BDT 5.58</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Box
            component="div"
            sx={{
              backgroundColor: "rgba(39, 38, 67, 0.8)",
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
              sx={{  color: "#e3f6f5", my: 2 }}
            >
              <Avatar sx={{ bgcolor: "#2c698d", "&:hover": { bgcolor: "#1565C0" } }}>
                <ShoppingCartIcon />
              </Avatar>
            </Button>
            <Button
              size="large"
              href="/book/id/add_favorite"
              sx={{ color: "#e3f6f5", my: 2 }}
            >
              <Avatar sx={{ bgcolor: "#2c698d", "&:hover": { bgcolor: "#1565C0" }  }}>
                <FavoriteBorderIcon />
              </Avatar>
            </Button>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default BookCard;
