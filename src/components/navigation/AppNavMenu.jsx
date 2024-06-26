import { FaHandHoldingMedical } from "react-icons/fa";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  appBar,
  toolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile,
} from "@styles/styles";
import UserProfile from "../UserProfile";
import NotificationsList from "../NotificationsList";

const AppNavMenu = (props) => {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <FaHandHoldingMedical size={32} />
            <Typography variant="h6" component="div" sx={logoText}>
              Patient Management Service
            </Typography>
          </Box>
          <Box sx={hideOnMobile}>
            <NotificationsList />
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavMenu;