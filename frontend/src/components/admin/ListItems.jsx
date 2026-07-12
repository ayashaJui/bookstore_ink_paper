import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import LayersIcon from "@mui/icons-material/Layers";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={`/admin/dashboard`}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/orders`}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/customers`}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/reviews`}>
      <ListItemIcon>
        <RateReviewIcon />
      </ListItemIcon>
      <ListItemText primary="Reviews" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/books`}>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="Books" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/authors`}>
      <ListItemIcon>
        <LocalLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Authors" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/blogs`}>
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Blogs" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/users`}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/messages`}>
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <ListItemButton component={Link} to={`/admin/add_book`}>
      <ListItemIcon>
        <AddCircleOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Add Book" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/add_author`}>
      <ListItemIcon>
        <AddCircleOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Add Author" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/admin/add_user`}>
      <ListItemIcon>
        <AddCircleOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Add User" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);
