import { Box, Card, CardContent, Typography } from "@mui/material";

const HeroImage = ({ title, imgPath }) => {
  return (
    <Card
      sx={{
        position: "relative",
        marginBottom: "20px",
        backgroundImage: `url("${imgPath}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        color: "white",
        borderRadius: 0,
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
          transform: "translate(-50%, -50%)", zIndex: 2
        }}
      >
        <Typography
          variant="h2"
          // position="absolute"
          // top="40%"
          // left="20%"
          // right="20%"
          // zIndex={2}
          fontFamily="Nunito"
          letterSpacing={3}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HeroImage;
