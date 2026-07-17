import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
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
        py: 1.5,
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
              my: 0.5,
              fontSize: "13px",
            }}
          >
            Developed By Ayasha Hossain Jui
          </Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="body2" sx={{ my: 0.5, color: "#272643" }}>
                <CopyrightIcon sx={{ fontSize: "20px" }} />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ my: 0.5, color: "#272643" }}>
                2023 | Ink & Paper. All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Chip
            component="a"
            href={`${process.env.REACT_APP_BASE_URL}/api-docs`}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ApiIcon />}
            label="API Docs"
            clickable
            size="small"
            sx={{
              bgcolor: "#272643",
              color: "#e3f6f5",
              "& .MuiChip-icon": { color: "#e3f6f5" },
              "&:hover": { bgcolor: "#2c698d" },
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          />
        </Grid>

        <Grid item>
          <Button>
            <FacebookOutlinedIcon sx={{ color: "#272643" }} />
          </Button>
          <Button>
            <InstagramIcon sx={{ color: "#272643" }} />
          </Button>
          <Button>
            <TwitterIcon sx={{ color: "#272643" }} />
          </Button>
          <Button>
            <YouTubeIcon sx={{ color: "#272643" }} />
          </Button>
          <Button>
            <PinterestIcon sx={{ color: "#272643" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
