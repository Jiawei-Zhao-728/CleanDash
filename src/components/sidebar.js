import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* ✅ Fixed Sidebar Toggle Button */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed", // Keeps the button in place
          top: 20,
          left: 20,
          zIndex: 1500, // Ensures it's always on top
          backgroundColor: "white",
          boxShadow: 2,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "250px", // ✅ Ensure fixed width
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: 3,
            padding: "10px", // ✅ Adds spacing inside sidebar
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // ✅ Pushes the button to the right
            alignItems: "center",
            padding: "10px",
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          {/* Close Button Inside Sidebar */}
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation Links */}
        <List>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "Favorites", icon: <FavoriteIcon /> },
            { text: "Settings", icon: <SettingsIcon /> },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItem>
            </motion.div>
          ))}
        </List>

        <Divider />

        {/* Branding */}
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 2, color: "#666" }}
            >
              Clean Dash © 2025
            </Typography>
          </motion.div>
        )}
      </Drawer>
    </>
  );
};

export default Sidebar;
