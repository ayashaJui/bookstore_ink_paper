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
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const LatestNews = () => {
  return (
    <Box component="div" sx={{ mx: 2, mb: 10 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 7,
          mb: 3,
          fontFamily: "Roboto",
          color: "#272643",
          textAlign: "left",
        }}
      >
        Latest News
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={4} sm={2} xs={false}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="blog"
              height="250"
              image="/images/carousal/1.jpg"
            />
            <CardContent>
                <Grid container spacing={1} sx={{ color: '#9B908A'}}>
                    <Grid item>
                        <AccountCircleOutlinedIcon sx={{fontSize: '21px'}}  />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle">By John Doe</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{color: '#9B908A', my: 0.5}}>
                    <Grid item>
                        <CalendarMonthOutlinedIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle">APril 4, 2020</Typography>
                    </Grid>
                </Grid>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'left', my: 2, fontFamily: 'Roboto', fontWeight: 'bolder'}}>
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{  mb: 2 }}>
              <Button
                size="small"
                href="/blog/id"
                variant="contained"
                sx={{ bgcolor: "#2c698d" }}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4} sm={2} xs={false}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="blog"
              height="250"
              image="/images/carousal/1.jpg"
            />
            <CardContent>
                <Grid container spacing={1} sx={{ color: '#9B908A'}}>
                    <Grid item>
                        <AccountCircleOutlinedIcon sx={{fontSize: '21px'}}  />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle">By John Doe</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{color: '#9B908A', my: 0.5}}>
                    <Grid item>
                        <CalendarMonthOutlinedIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle">APril 4, 2020</Typography>
                    </Grid>
                </Grid>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'left', my: 2, fontFamily: 'Roboto', fontWeight: 'bolder'}}>
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{  mb: 2 }}>
              <Button
                size="small"
                href="/blog/id"
                variant="contained"
                sx={{ bgcolor: "#2c698d" }}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4} sm={2} xs={false}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="blog"
              height="250"
              image="/images/carousal/1.jpg"
            />
            <CardContent>
                <Grid container spacing={1} sx={{ color: '#9B908A'}}>
                    <Grid item>
                        <AccountCircleOutlinedIcon sx={{fontSize: '21px'}}  />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle">By John Doe</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{color: '#9B908A', my: 0.5}}>
                    <Grid item>
                        <CalendarMonthOutlinedIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle">APril 4, 2020</Typography>
                    </Grid>
                </Grid>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'left', my: 2, fontFamily: 'Roboto', fontWeight: 'bolder'}}>
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{  mb: 2 }}>
              <Button
                size="small"
                href="/blog/id"
                variant="contained"
                sx={{ bgcolor: "#2c698d" }}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        href="/blog"
        sx={{ my: 8, bgcolor: "#272643" }}
      >
        Visit Our Blog
      </Button>
    </Box>
  );
};
export default LatestNews;
