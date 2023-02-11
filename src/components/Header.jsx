import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";

const Header = (props) => {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  let navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, color: "black", fontFamily: "Helvetica Rounded" }}
      >
        Menu
      </Typography>
      <Divider />
      <List>
        <ListItem key="Home" disablePadding>
          <IconButton>
            <HomeIcon />
            <Typography marginLeft={3}>Home</Typography>
          </IconButton>
        </ListItem>
        <ListItem key="MyBoards" disablePadding>
          <IconButton>
            <DashboardIcon />
            <Typography marginLeft={3}>My Boards</Typography>
          </IconButton>
        </ListItem>
        <ListItem key="MyAccount" disablePadding>
          <IconButton>
            <AccountCircleIcon />
            <Typography marginLeft={3}>My account</Typography>
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={() => navigate("/myaccount")}>Profile</MenuItem>
      {(isLoggedIn && <MenuItem>Logout</MenuItem>) || (
        <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
      )}
    </Menu>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" position="relative" sx={{ color: "#026aa7" }}>
          <Toolbar>
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1, display: "block", fontSize: "1.7rem" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/"
              >
                Trello
              </Link>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton
                sx={{ marginRight: 2 }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <HomeIcon sx={{ color: "white" }} />
              </IconButton>

              <IconButton
                sx={{ marginRight: 2 }}
                onClick={() => {
                  navigate("/test");
                }}
              >
                <HomeIcon sx={{ color: "red" }} />
              </IconButton>

              <IconButton
                sx={{ marginRight: 2 }}
                onClick={() => {
                  navigate("/board/" + 1);
                }}
              >
                <DashboardIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                onClick={handleProfileMenuOpen}
                aria-controls={isMenuOpen ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? "true" : undefined}
              >
                <AccountCircleIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {renderMenu}

        <Box component="nav">
          <Drawer
            anchor="right"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
