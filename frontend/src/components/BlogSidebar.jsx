import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link as MuiLink,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  getAllBlogCategories,
  getAllBlogTags,
  getLatestBlogs,
} from "../actions/blogActions";
import {
  countOccurances,
  formattedDate,
  makeCategoryArray,
  makeTagArray,
  makeObjectArray,
  sortObject,
} from "../helper/helperFunction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader";

const BlogSidebar = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [selectedTagIndex, setSelectedTagIndex] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_BASE_URL;
  
  const { categories } = useSelector((state) => state.blogCategoryList);
  const uniqueCategories = makeObjectArray(
    sortObject(countOccurances(makeCategoryArray(categories)))
  );

  const { loading, latest } = useSelector((state) => state.blogLatest);

  const { tags } = useSelector((state) => state.blogTagList);
  const uniqueTags = makeObjectArray(
    sortObject(countOccurances(makeTagArray(tags)))
  );
  // console.log(latest);

  useEffect(() => {
    dispatch(getAllBlogCategories());
    dispatch(getLatestBlogs());
    dispatch(getAllBlogTags());
  }, [dispatch]);

  const handleSubmit = () => {};

  const handleCategorySelect = (event, idx, category) => {
    setSelectedCategoryIndex(idx);
    const params = new URLSearchParams(location.search);
    params.set("category", category);
    navigate({
      // pathname: location.pathname,
      pathname: "/blogs",
      search: `?${params.toString()}`,
    });
  };

  const handleTagSelect = (event, idx, tag) => {
    setSelectedTagIndex(idx);
    const params = new URLSearchParams(location.search);
    params.set("tag", tag);
    navigate({
      // pathname: location.pathname,
      pathname: "/blogs",
      search: `?${params.toString()}`,
    });
  };

  window.addEventListener("load", (event) => {
    navigate("/blogs");
  });

  return (
    <Box component="div">
      <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 4, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        SEARCH
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item md={9} xs={7}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="search"
              label="Search"
              name="search"
              size="small"
            />
          </Grid>
          <Grid item md={2} xs={2}>
            <Button type="submit" sx={{ mt: 2 }}>
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 4, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        CATEGORIES
      </Typography>

      {uniqueCategories && (
        <Virtuoso
          style={{ height: "250px" }}
          totalCount={Object.keys(uniqueCategories).length}
          data={uniqueCategories}
          itemContent={(index, data) => (
            // <CustomList index={index} data={data} />
            <ListItem disablePadding key={index}>
              <ListItemButton
                selected={selectedCategoryIndex === index}
                onClick={(event) =>
                  handleCategorySelect(event, index, data.key)
                }
                role={undefined}
              >
                <ListItemText primary={data.key} sx={{}} />
                <Typography variant="subttle2" sx={{ fontSize: "12px" }}>
                  ({data.value})
                </Typography>
              </ListItemButton>
            </ListItem>
          )}
        />
      )}

      <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 5, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        RECENT POSTS
      </Typography>

      <Box component="div" sx={{ mb: 7 }}>
        {loading ? (
          <Loader />
        ) : (
          latest.map(({ _id, title, image, createdAt }, idx) => (
            <Card sx={{ my: 2, boxShadow: "none", ml: 1 }} key={idx}>
              <Grid container spacing={0}>
                <Grid item>
                  <CardMedia
                    component="img"
                    image={`${
                      image ? baseUrl + image : "/images/sample_blog.png"
                    }`}
                    alt={title}
                    height="60px"
                    width="60px"
                  />
                </Grid>
                <Grid item>
                  <CardContent sx={{ pt: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    >
                      <MuiLink
                        component={Link}
                        to={`/blog/${_id}/details`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {title}
                      </MuiLink>
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "left",
                        fontSize: "10px",
                      }}
                    >
                      {formattedDate(createdAt)}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))
        )}
      </Box>

      <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 2, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        Tags
      </Typography>

      <Box component="div" sx={{ mx: 1, mt: 3, mb: 8 }}>
        <Grid container spacing={1}>
          {uniqueTags &&
            uniqueTags.map((tag, idx) => (
              <Grid item key={idx}>
                <Button
                  onClick={(event) => handleTagSelect(event, idx, tag.key)}
                  sx={{ textDecoration: "none", textTransform: "capitalize" }}
                >
                  <Chip
                    label={`${tag.key}`}
                    variant={`${
                      selectedTagIndex === idx ? "outlined" : "default"
                    }`}
                  />
                </Button>
              </Grid>
            ))}
        </Grid>
      </Box>

      {/* <Typography
        variant="h6"
        borderBottom={"2px solid black"}
        textAlign="left"
        sx={{ mt: 6, pb: 1, fontSize: "15px", fontWeight: "bold" }}
      >
        ARCHIVES
      </Typography>

      <Virtuoso
        style={{ height: "250px" }}
        totalCount={50}
        data={times}
        itemContent={(index, data) => (
          // <CustomList index={index} data={data} />
          <ListItem disablePadding key={index}>
            <ListItemButton
              selected={selectedCategoryIndex === index}
              onClick={(event) => handleCategorySelect(event, index, data.key)}
              role={undefined}
            >
              <ListItemText primary={data.title} sx={{}} />
              <Typography variant="subttle2" sx={{ fontSize: "12px" }}>
                ({data.count})
              </Typography>
            </ListItemButton>
          </ListItem>
        )}
      /> */}
    </Box>
  );
};

export default BlogSidebar;
