import {
  Box,
  Breadcrumbs,
  Divider,
  IconButton,
  Paper,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Tooltip,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";
import { Link, useNavigate } from "react-router-dom";
import { formattedDate } from "../../helper/helperFunction";
import {
  blogClearSuccess,
  getAllBlogs,
  updateIsHidden,
} from "../../actions/blogActions";

const BlogList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, blogs } = useSelector((state) => state.blogList);
  const { success: updateHiddenSuccess, blog } = useSelector(
    (state) => state.blogUpdateIsHidden
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllBlogs());

      if (updateHiddenSuccess) {
        const timer = setTimeout(() => {
          dispatch(blogClearSuccess());
        }, 6000);

        return () => clearTimeout(timer);
      }
    } else {
      navigate("/signin");
    }
  }, [dispatch, navigate, userInfo, updateHiddenSuccess]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleHiddenSubmit = (event, id, isHidden) => {
    dispatch(updateIsHidden(id, { isHidden: !isHidden }));
  };

  const handleDeleteSubmit = (event, id) => {
    console.log(id);
  };

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">Blog List</Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ width: "100%", mt: 5 }}>
        {updateHiddenSuccess && (
          <Message severity={"success"} title={"Updated"} marginY={3}>
            {" "}
            Blog has been {blog.isHidden ? "hidden" : "unhidden"}
          </Message>
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity={"error"} title={"Error!"}>
            {" "}
            {error}{" "}
          </Message>
        ) : (
          <Box sx={{ width: "100%", mb: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Written By</TableCell>
                    <TableCell>Likes</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell>Published At</TableCell>
                    <TableCell>Hidden</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? blogs.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : blogs
                  ).map(
                    (
                      {
                        _id,
                        title,
                        user,
                        comments,
                        likes,
                        isHidden,
                        createdAt,
                      },
                      idx
                    ) => (
                      <TableRow
                        key={idx}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {idx + 1}
                        </TableCell>
                        <TableCell>
                          <MuiLink
                            component={Link}
                            to={`/blog/${_id}/details`}
                            sx={{ textDecoration: "none" }}
                          >
                            {" "}
                            {title}{" "}
                          </MuiLink>
                        </TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell align="right">{likes.length}</TableCell>
                        <TableCell align="right">{comments.length}</TableCell>
                        <TableCell>{formattedDate(createdAt)}</TableCell>
                        <TableCell align="center">
                          <Tooltip
                            title={`Press to ${
                              isHidden ? "Unhide" : "Hide"
                            } this`}
                          >
                            <IconButton
                              size="small"
                              variant="contained"
                              onClick={(event) =>
                                handleHiddenSubmit(event, _id, isHidden)
                              }
                            >
                              {isHidden ? (
                                <DoneIcon fontSize="small" color="success" />
                              ) : (
                                <CloseIcon fontSize="small" color="error" />
                              )}
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            size="small"
                            onClick={(event) => handleDeleteSubmit(event, _id)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={blogs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        )}
      </Box>
    </MainComponent>
  );
};

export default BlogList;
