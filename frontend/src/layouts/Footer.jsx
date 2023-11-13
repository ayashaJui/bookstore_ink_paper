import { Box, Button, Grid, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // position: "fixed",
        // left: 0,
        // bottom: 0,
        // width: "100%",
        mt: 8,
        py: 4,
        px: 2,
        backgroundColor: "#e3f6f5",
      }}
    >
      <Grid container justifyContent={"space-evenly"}>
        <Grid item>
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
              color: "#272643",
              my: 1,
              fontSize: "13px",
            }}
          >
            Developed By Ayasha Hossain Jui
          </Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="body2" sx={{ my: 1, color: "#272643" }}>
                <CopyrightIcon sx={{ fontSize: "20px" }} />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ my: 1, color: "#272643" }}>
                2023 | Ink & Paper. All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Button href="#">
            <FacebookOutlinedIcon sx={{ color: "#272643" }} />
          </Button>
          <Button href="#">
            <InstagramIcon sx={{ color: "#272643" }} />
          </Button>
          <Button href="#">
            <TwitterIcon sx={{ color: "#272643" }} />
          </Button>
          <Button href="#">
            <YouTubeIcon sx={{ color: "#272643" }} />
          </Button>
          <Button href="#">
            <PinterestIcon sx={{ color: "#272643" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
