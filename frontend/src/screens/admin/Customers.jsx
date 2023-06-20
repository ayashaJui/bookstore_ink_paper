import { Breadcrumbs, Divider, Typography } from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";
const Customers = () => {
  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        {/* <MuiLink underline="hover" component={Link} color="inherit" to="/">
            Home
          </MuiLink>
          <MuiLink
            underline="hover"
            component={Link}
            color="inherit"
            to="/shop"
          >
            Shop
          </MuiLink> */}
        <Typography color="text.primary">All Customers</Typography>
      </Breadcrumbs>

      <Divider />
    </MainComponent>
  );
};

export default Customers;
