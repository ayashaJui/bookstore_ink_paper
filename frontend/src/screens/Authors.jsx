import {
  Box,
  Breadcrumbs,
  // Card,
  // CardActionArea,
  // CardMedia,
  Divider,
  Grid,
  Link as MuiLink,
  // Rating,
  Typography,
  // Tabs,
  // Tab,
  Avatar,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getAllAuthors } from "../actions/authorActions";
import Navbar from "../layouts/Navbar";


const Authors = () => {
  // const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const authorsPerPage = 20;

  const dispatch = useDispatch();

  const baseUrl = process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:3000";

  const { authors } = useSelector((state) => state.authorList);

  const totalPages = Math.ceil(authors.length / authorsPerPage);
  const startIndex = (currentPage - 1) * authorsPerPage;
  const endIndex = startIndex + authorsPerPage;
  const visibleAuthors = authors.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getAllAuthors());
  }, [dispatch]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleItemClick = (event) => {
  //   // event.preventDefault()
  //   console.log(event.currentTarget.textContent);
  // };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <Box role="presentation" sx={{ p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink component={Link} underline="hover" color="inherit" to="/">
            Home
          </MuiLink>
          <Typography color="text.primary">Authors List</Typography>
        </Breadcrumbs>
      </Box>

      <Divider />

      <Box
        sx={{
          mx: "auto",
          my: 5,
          maxWidth: { md: 1200, sm: 700, xs: 300 },
          minWidth: 250,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {authors &&
            visibleAuthors.map(({ _id, authorInfo, totalBooks }, idx) => {
              return (
                <Grid item key={idx}>
                  <MuiLink
                    component={Link}
                    to={`/author/${_id}/profile`}
                    sx={{ textDecoration: "none", color: "#000" }}
                  >
                    <Avatar
                      alt={`${authorInfo.name}`}
                      src={`${baseUrl + authorInfo.image}`}
                      sx={{ width: 180, height: 180, mb: 3, mx: "auto" }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ my: 1, fontWeight: "bold", fontSize: "19px" }}
                    >
                      {authorInfo.name}
                    </Typography>
                    <Typography
                      variant="subtitle"
                      sx={{ color: "#9B908A", fontSize: "17px" }}
                    >
                      {totalBooks} Published Books
                    </Typography>
                  </MuiLink>
                </Grid>
              );
            })}
        </Grid>
      </Box>

      {totalPages > 1 && authors && (
        <Stack spacing={2} sx={{ mt: 10, mb: 6, alignItems: "center" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
              />
            )}
          />
        </Stack>
      )}
    </div>
  );
};

export default Authors;
