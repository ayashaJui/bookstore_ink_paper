import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", my: 15, flexDirection: "column" }}>
      <CircularProgress
        sx={{
          width: "100%",
          height: "100%",
          m: "auto",
          display: "block",
        }}
      />
      <Typography variant="h5" textAlign={"center"} sx={{ mx: "auto", my: 5 }}>
        Loading....
      </Typography>
    </Box>
  );
};

export default Loader;
