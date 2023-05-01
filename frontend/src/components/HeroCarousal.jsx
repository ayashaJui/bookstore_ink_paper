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
    speed: 1000,
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
          height: "80vh",
          color: "white",
          borderRadius: 0,
          boxShadow: "none",
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
        <CardContent
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero, quo!
          </Typography>
          <Button
            href="/shop"
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#272643", mt: 5 }}
          >
            Browse Our Store
          </Button>
        </CardContent>
      </Card>

      <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/carousal/2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          color: "white",
          borderRadius: 0,
          boxShadow: "none",
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
        <CardContent
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero, quo!
          </Typography>
          <Button
            href="/blogs"
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#272643", mt: 5 }}
          >
            Check our blog
          </Button>
        </CardContent>
      </Card>

      <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/carousal/3.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          color: "white",
          borderRadius: 0,
          boxShadow: "none",
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
        <CardContent
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero, quo!
          </Typography>
          <Button
            href="/signup"
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#272643", mt: 5 }}
          >
            join our communitee
          </Button>
        </CardContent>
      </Card>
    </Slider>
  );
}

export default HeroCarousal;
