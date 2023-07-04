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

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getLatestBlogs } from "../actions/blogActions";
import Loader from "../layouts/Loader";
import Message from "../layouts/Message";
import { formattedDate } from "../helper/helperFunction";

const LatestNews = () => {
  const dispatch = useDispatch();

  const { loading, error, latest } = useSelector((state) => state.blogLatest);

  useEffect(() => {
    dispatch(getLatestBlogs());
  }, [dispatch]);

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
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error" title="Error">
            {error}
          </Message>
        ) : (
          latest.map(
            ({ _id, title, description, user, createdAt, image }, idx) => (
              <Grid item md={4} sm={6} xs={false} key={idx}>
                <Card
                  sx={{
                    // boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.3)",
                    boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.59)",
                    // maxWidth: 420,
                    height: "620px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={title}
                    height="300"
                    image={`/${image ? image : 'images/sample_blog.png'}`}
                  />
                  <CardContent sx={{ mx: 1 }}>
                    <Grid container spacing={1} sx={{ color: "#9B908A" }}>
                      <Grid item>
                        <AccountCircleOutlinedIcon sx={{ fontSize: "21px" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle">
                          By {user.name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      sx={{ color: "#9B908A", my: 0.5 }}
                    >
                      <Grid item>
                        <CalendarMonthOutlinedIcon />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle">
                          {formattedDate(createdAt)}
                        </Typography>
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
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "left" }}
                    >
                      {description.split(" ").slice(0, 20).join(" ")}
                      ......
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mb: 2, mx: 2, mt: "auto" }}>
                    <Button
                      component={Link}
                      size="small"
                      to={`/blog/${_id}/details`}
                      variant="contained"
                      sx={{ bgcolor: "#2c698d" }}
                    >
                      Read More <ArrowRightAltIcon sx={{ ml: 1 }} />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          )
        )}
      </Grid>

      <Button
        component={Link}
        variant="contained"
        to="/blogs"
        sx={{ my: 8, bgcolor: "#272643" }}
      >
        Visit Our Blog
      </Button>
    </Box>
  );
};
export default LatestNews;
