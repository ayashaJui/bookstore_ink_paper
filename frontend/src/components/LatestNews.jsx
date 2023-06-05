import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const LatestNews = () => {
  return (
    <Box component="div" sx={{ mx: 5, mb: 3 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 7,
          mb: 3,
          fontFamily: "Nunito",
          color: "#272643",
          textAlign: "left",
        }}
      >
        Latest News
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={4} sm={6} xs={false}>
          <Card
            sx={{
              // boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.3)",
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)",
              // maxWidth: 420,
            }}
          >
            <CardMedia
              component="img"
              alt="blog"
              height="300"
              image="/images/static/carousal/1.jpg"
            />
            <CardContent sx={{ mx: 1 }}>
              <Grid container spacing={1} sx={{ color: "#9B908A" }}>
                <Grid item>
                  <AccountCircleOutlinedIcon sx={{ fontSize: "21px" }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle">By John Doe</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ color: "#9B908A", my: 0.5 }}>
                <Grid item>
                  <CalendarMonthOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle">April 4, 2020</Typography>
                </Grid>
              </Grid>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "left",
                  my: 2,
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "left" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ mb: 2, mx: 2 }}>
              <Button
                size="small"
                href="/blogs/1/details"
                variant="contained"
                sx={{ bgcolor: "#2c698d" }}
              >
                Read More <ArrowRightAltIcon sx={{ ml: 1 }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4} sm={6} xs={false}>
          <Card
            sx={{
              // boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.3)",
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)",
            }}
          >
            <CardMedia
              component="img"
              alt="blog"
              height="300"
              image="/images/static/carousal/1.jpg"
            />
            <CardContent sx={{ mx: 1 }}>
              <Grid container spacing={1} sx={{ color: "#9B908A" }}>
                <Grid item>
                  <AccountCircleOutlinedIcon sx={{ fontSize: "21px" }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle">By John Doe</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ color: "#9B908A", my: 0.5 }}>
                <Grid item>
                  <CalendarMonthOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle">APril 4, 2020</Typography>
                </Grid>
              </Grid>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "left",
                  my: 2,
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "left" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ mb: 2, mx: 2 }}>
              <Button
                size="small"
                href="/blogs/1/details"
                variant="contained"
                sx={{ bgcolor: "#2c698d" }}
              >
                Read More <ArrowRightAltIcon sx={{ ml: 1 }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4} sm={6} xs={false}>
          <Card
            sx={{
              // boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.3)",
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)",
            }}
          >
            <CardMedia
              component="img"
              alt="blog"
              height="300"
              image="/images/static/carousal/1.jpg"
            />
            <CardContent sx={{ mx: 1 }}>
              <Grid container spacing={1} sx={{ color: "#9B908A" }}>
                <Grid item>
                  <AccountCircleOutlinedIcon sx={{ fontSize: "21px" }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle">By John Doe</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ color: "#9B908A", my: 0.5 }}>
                <Grid item>
                  <CalendarMonthOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle">APril 4, 2020</Typography>
                </Grid>
              </Grid>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "left",
                  my: 2,
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "left" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ mb: 2, mx: 2 }}>
              <Button
                size="small"
                href="/blogs/1/details"
                variant="contained"
                sx={{ bgcolor: "#2c698d" }}
              >
                Read More <ArrowRightAltIcon sx={{ ml: 1 }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        href="/blogs"
        sx={{ my: 8, bgcolor: "#272643" }}
      >
        Visit Our Blog
      </Button>
    </Box>
  );
};
export default LatestNews;
