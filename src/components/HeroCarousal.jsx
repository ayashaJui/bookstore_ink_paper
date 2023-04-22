import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./HeroCarousal.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function HeroCarousal() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/carousal/1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          color: "white",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
          bgcolor="rgba(0, 0, 0, 0.6)"
        />
        <CardContent>
          <Typography
            variant="h5"
            position="absolute"
            top="40%"
            left="20%"
            right="20%"
            zIndex={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero, quo!
          </Typography>

          <Box
            position="absolute"
            bottom="20%"
            left="20%"
            right="20%"
            zIndex={2}
          >
            <Button
              href="/shop"
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#272643" }}
            >
              Browse Our Store
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/carousal/2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          color: "white",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
          bgcolor="rgba(0, 0, 0, 0.6)"
        />
        <CardContent>
          <Typography
            variant="h5"
            position="absolute"
            top="40%"
            left="20%"
            right="20%"
            zIndex={2}
          >
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box
            position="absolute"
            bottom="20%"
            left="20%"
            right="20%"
            zIndex={2}
          >
            <Button
              href="/blogs"
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#272643" }}
            >
              Check Our Blog
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/carousal/3.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          color: "white",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
          bgcolor="rgba(0, 0, 0, 0.6)"
        />
        <CardContent>
          <Typography
            variant="h5"
            position="absolute"
            top="40%"
            left="20%"
            right="20%"
            zIndex={2}
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Box
            position="absolute"
            bottom="20%"
            left="20%"
            right="20%"
            zIndex={2}
          >
            <Button
              href="/sale"
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#272643" }}
            >
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Slider>
  );
}

export default HeroCarousal;
