import {
  Box,
  Breadcrumbs,
  Divider,
  Paper,
  Table,
  Link as MuiLink,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getContactList } from "../../actions/contactActions";
import { Link, useLocation } from "react-router-dom";
import { formattedDate } from "../../helper/helperFunction";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";

const Messages = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useLocation();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, contacts, error } = useSelector(
    (state) => state.contactList
  );

  console.log(contacts);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getContactList());
    } else {
      navigate("/signin");
    }
  }, [dispatch, userInfo, navigate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (event, id) => {
    setOpen(true);
    console.log("open", id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Messages</Typography>
      </Breadcrumbs>

      <Divider />

      <Box sx={{ mt: 5 }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error" title="Error!">
            {" "}
            {error}{" "}
          </Message>
        ) : (
          <Box sx={{ width: "100%", mb: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Send At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? contacts?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : contacts
                  ).map(
                    (
                      { _id, email, message, name, subject, createdAt },
                      idx
                    ) => (
                      <TableRow
                        key={idx}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <MuiLink
                            onClick={(event) => handleClickOpen(event, _id)}
                            sx={{ textDecoration: "none", cursor: "pointer" }}
                            //   to={`/book/${_id}/details`}
                          >
                            {name}
                          </MuiLink>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            // scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                          >
                            <DialogTitle id="scroll-dialog-title">
                              Subscribe
                            </DialogTitle>
                            <DialogContent dividers={true}>
                              <DialogContentText
                                id="scroll-dialog-description"
                                // ref={descriptionElementRef}
                                tabIndex={-1}
                              >
                                {[...new Array(50)]
                                  .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                  )
                                  .join("\n")}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button onClick={handleClose}>Subscribe</Button>
                            </DialogActions>
                          </Dialog>
                        </TableCell>
                        <TableCell>{email}</TableCell>

                        <TableCell>{subject}</TableCell>
                        <TableCell>
                          {message.split(" ").slice(0, 20).join(" ")}........
                        </TableCell>
                        <TableCell>{formattedDate(createdAt)}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={contacts.length}
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

export default Messages;
