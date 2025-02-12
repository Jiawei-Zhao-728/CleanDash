import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1500,
          width: 50, // Ensure button is a perfect circle
          height: 50,
          backgroundColor: "white",
          boxShadow: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%", // Keeps button circular
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={open ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {open ? (
              <CloseIcon sx={{ fontSize: 28 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 28 }} />
            )}
          </motion.div>
        </AnimatePresence>
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "250px",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: 3,
            padding: "10px",
          },
        }}
      >
        {/* Navigation Links */}
        <List
          sx={{
            marginTop: "60px", // Moves menu items further down
          }}
        >
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
