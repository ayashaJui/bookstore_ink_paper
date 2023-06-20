import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const pages = ["Home", "Shop", "Blog", "About", "Contact Us"];
const pagesLink = ["/", "/shop", "/blogs", "/about", "/contact"];
const settings = ["Profile", "Dashboard", "Orders"];
const settingsLink = ["/profile", "/dashboard", "/myorders"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const location = useLocation();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#272643" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              p: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Pacifico",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            INK&PAPER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem
                  component={Link}
                  key={page}
                  onClick={handleCloseNavMenu}
                  // component="a"
                  to={pagesLink[idx]}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              p: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Pacifico",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            INK&PAPER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, idx) => (
              <Button
                component={Link}
                key={page}
                to={pagesLink[idx]}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color:
                    location.pathname === pagesLink[idx] ? "#2c698d" : "white",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {userInfo && userInfo.isAdmin ? (
              <Button
                component={Link}
                key="admin"
                to="/admin/dashboard"
                sx={{
                  my: 2,
                  color: location.pathname === "/admin" ? "#2c698d" : "white",
                  display: "inline",
                }}
              >
                Admin
              </Button>
            ) : userInfo && userInfo.isAdmin ? (
              <>
                <Tooltip title={userInfo.name}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={userInfo.name}
                      src={`/`}
                      sx={{
                        height: "28px",
                        width: "28px",
                        my: 2,
                        mx: 1,
                        fontSize: 15,
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, idx) => (
                    <MenuItem
                      key={setting}
                      component={Link}
                      to={settingsLink[idx]}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem
                    // to="/logout"
                    onClick={() => {
                      handleCloseUserMenu();
                      handleLogout();
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                component={Link}
                key="signin"
                to="/signin"
                sx={{
                  my: 2,
                  color: location.pathname === "/signin" ? "#2c698d" : "white",
                  display: "inline",
                }}
              >
                Sign In
              </Button>
            )}

            <Button
              component={Link}
              key="cart"
              sx={{
                my: 2,
                color: location.pathname === "/cart" ? "#2c698d" : "white",
                display: "inline",
              }}
              to="/cart"
            >
              <ShoppingCartIcon sx={{ fontSize: 22, pt: 0.5 }} />
            </Button>
            <Button
              component={Link}
              to="/favorite"
              // onClick={handleLogout}
              key="favorite"
              sx={{
                my: 2,
                color: location.pathname === "/favorite" ? "#2c698d" : "white",
                display: "inline",
              }}
            >
              <FavoriteIcon sx={{ fontSize: 22, pt: 0.5 }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
