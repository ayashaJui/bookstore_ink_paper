import {
  Box,
  Breadcrumbs,
  Divider,
  Paper,
  Table,
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
import { useLocation } from "react-router-dom";
import { formattedDate } from "../../helper/helperFunction";
import Loader from "../../layouts/Loader";
import Message from "../../layouts/Message";

const Messages = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();
  const navigate = useLocation();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, contacts, error } = useSelector(
    (state) => state.contactList
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getContactList());
    } else {
      navigate("../signin");
    }
  }, [dispatch, userInfo, navigate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (event, contact) => {
    setSelectedItem(contact);
    setOpen(true);
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
                    <TableCell>Send At</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                        {" "}
                        No Message Found{" "}
                      </TableCell>
                    </TableRow>
                  )}
                  {(rowsPerPage > 0
                    ? contacts?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : contacts
                  ).map((contact, idx) => (
                    <TableRow
                      key={idx}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {/* <MuiLink
                          onClick={(event) => handleClickOpen(event, contact)}
                          sx={{ textDecoration: "none", cursor: "pointer" }}
                          //   to={`/book/${_id}/details`}
                        >
                          {contact.name}
                        </MuiLink> */}{" "}
                        {contact.name}
                      </TableCell>
                      <TableCell>{contact.email}</TableCell>

                      <TableCell>{contact.subject}</TableCell>

                      <TableCell>{formattedDate(contact.createdAt)}</TableCell>
                      <TableCell>
                        <Button
                          onClick={(event) => handleClickOpen(event, contact)}
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {contacts.length > 0 && (
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={contacts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </Box>
        )}

        {selectedItem && (
          <Dialog
            open={open}
            onClose={handleClose}
            // scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">
              Subject: {selectedItem.subject}
            </DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText
                id="scroll-dialog-description"
                // ref={descriptionElementRef}
                tabIndex={-1}
              >
                {selectedItem.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        )}
      </Box>
    </MainComponent>
  );
};

export default Messages;
