import { Box, Card, Grid } from "@mui/material";
import HeroImage from "../components/HeroImage";
import ShopSidebar from "../components/ShopSidebar";

const Shop = () => {
  return (
    <Box component="div">
      <HeroImage title="Shop" imgPath="/images/static/shop.jpg" />
      <Box component="div" sx={{ mx: 5 }}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={9} xs={12}>
            <Card sx={{ p: 4, mt: 4, boxShadow: 'none', border: "1px solid #ccc" }}>
              <ShopSidebar />
            </Card>
          </Grid>
          <Grid item md={8} sm={12} xs={12}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop;
