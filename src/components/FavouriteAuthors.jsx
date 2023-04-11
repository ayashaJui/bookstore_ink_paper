import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const FavouriteAuthors = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box component="div" sx={{ mt: 15, mx: 4, mb: 12 }}>
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item sm={6}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "left",
              fontFamily: "Roboto",
              my: 3,
              color: "#272643",
            }}
          >
            Favorite Authors
          </Typography>
        </Grid>
        <Grid item sm={6} container justifyContent="flex-end">
          <Button
            size="large"
            href="/authors"
            sx={{ my: 3, py: 0, px: 3, color: "#272643", fontWeight: " bold" }}
          >
            View All
          </Button>
        </Grid>
      </Grid>

      <Slider {...settings}>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
        <div>
          <Avatar
            alt="author"
            src="/images/authors/14.jpg"
            sx={{ width: 150, height: 150, mb: 3, mx: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ color: "#9B908A", fontSize: "17px" }}
          >
            12 Published Books
          </Typography>
        </div>
      </Slider>
    </Box>
  );
};

export default FavouriteAuthors;
