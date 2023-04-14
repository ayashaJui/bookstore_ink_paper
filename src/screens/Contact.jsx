import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const handleSubmit = () => {};
  return (
    <Box component="div" sx={{ mx: 6 }}>
      <Card
        sx={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: 'url("images/static/contact.jpg")',
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
        <CardContent>
          <Typography
            variant="h2"
            position="absolute"
            top="40%"
            left="20%"
            right="20%"
            zIndex={2}
            fontFamily="Roboto"
            
          >
            Contact Us
          </Typography>
        </CardContent>
      </Card>
      <Box component="div" sx={{ my: 8 }}>
        <Typography variant="h4" fontFamily="Roboto" textAlign="left">
          Get in Touch
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={8} sm={12} xs={12}>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                multiline
                rows={8}
                id="message"
                label="Message"
                name="message"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, bgcolor: "#272643" }}
                size="large"
                fullWidth
              >
                Send
              </Button>
            </Box>
          </Grid>
          
          <Grid item md={4} sm={12} xs={12}>
            <Paper elevation={2} sx={{ mt: 7, p: 2}}>
              <Grid container spacing={2} sx={{my: 4}}>
                <Grid item>
                  <HomeIcon sx={{ fontSize: "40px", color: "#505350" , ml: 2, }} />
                </Grid>
                <Grid item justifyContent={"flex-start"} textAlign={"left"}>
                  <Typography variant="body2">Greenville, California</Typography>
                  <Typography variant="caption" sx={{color: "#505350"}}>22, abcd Avenue</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{my: 4}}>
                <Grid item>
                  <SmartphoneIcon sx={{ fontSize: "40px", color: "#505350" , ml: 2, }} />
                </Grid>
                <Grid item justifyContent={"flex-start"} textAlign={"left"}>
                  <Typography variant="body2">+21545652565</Typography>
                  <Typography variant="caption" sx={{ color: '#505350'}}>Sun - Mon: 9Am - 10Pm</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{my: 4}}>
                <Grid item>
                  <EmailIcon sx={{ fontSize: "40px", color: "#505350" , ml: 2, }} />
                </Grid>
                <Grid item justifyContent={"flex-start"} textAlign={"left"}>
                  <Typography variant="body2">inkpaper@gmail.com</Typography>
                  <Typography variant="caption" sx={{ color: "#505350"}}>Send us your query</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
