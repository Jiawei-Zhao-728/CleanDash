import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { motion } from "framer-motion";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Menu Button - Always at the Left Edge */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "fixed", // Ensures it never moves
          top: "15px", // Keep consistent vertical spacing
          left: "10px", // Always aligned at the left edge
          zIndex: 20, // Stays above everything
          width: "40px",
          height: "40px",
          backgroundColor: "white", // Ensures visibility
          borderRadius: "50%",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isOpen ? (
          <CloseIcon fontSize="medium" />
        ) : (
          <MenuIcon fontSize="medium" />
        )}
      </IconButton>

      {/* Sidebar - Moves Independently */}
      <motion.div
        animate={{
          width: isOpen ? "240px" : "65px",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 10,
          backgroundColor: "#ffffff",
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "60px", // Push down so it doesn't overlap with the button
        }}
      >
        {/* Sidebar List */}
        <List sx={{ width: "100%" }}>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "Search", icon: <SearchIcon /> },
            { text: "Settings", icon: <SettingsIcon /> },
            { text: "Logout", icon: <LogoutIcon /> },
          ].map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{
                justifyContent: isOpen ? "flex-start" : "center",
                paddingLeft: isOpen ? "20px" : "0",
                paddingRight: isOpen ? "20px" : "0",
              }}
            >
              <ListItemIcon
                sx={{ minWidth: isOpen ? "40px" : "auto", textAlign: "center" }}
              >
                {item.icon}
              </ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </motion.div>
    </>
  );
};

export default Sidebar;
