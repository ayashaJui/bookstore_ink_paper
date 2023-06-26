import { Breadcrumbs, Divider, Typography } from "@mui/material";
import MainComponent from "../../layouts/admin/MainComponent";

const Orders = () => {
  return (
    <MainComponent>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography color="text.primary">All Orders</Typography>
      </Breadcrumbs>

      <Divider />
      
    </MainComponent>
  );
};

export default Orders;
