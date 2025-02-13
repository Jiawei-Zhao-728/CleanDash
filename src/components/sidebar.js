import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 240 : 65,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 240 : 65,
            transition: "width 0.3s ease",
            overflowX: "hidden",
            position: "relative", // Keeps the toggle button inside the drawer
          },
        }}
      >
        {/* Fixed Toggle Button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            top: 10,
            left: 15, // Ensures it stays in place
          }}
        >
          <motion.div
            key={open ? "close" : "menu"}
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </motion.div>
        </IconButton>

        {/* Sidebar List */}
        <List sx={{ marginTop: "50px" }}>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "Search", icon: <SearchIcon /> },
            { text: "Settings", icon: <SettingsIcon /> },
            { text: "Logout", icon: <LogoutIcon /> },
          ].map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{ justifyContent: open ? "flex-start" : "center" }}
            >
              <ListItemIcon sx={{ minWidth: open ? "40px" : "auto" }}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
