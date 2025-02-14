import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import SearchComponent from "../../components/SearchComponent";
import homeStyles from "./homeStyles";
import "@fontsource/roboto";

function Home({ sidebarOpen, setSidebarOpen }) {
  return (
    <Box sx={homeStyles.container}>
      {/* Sidebar (floating on top) */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Adjusted Main Content Position (Using Golden Ratio) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100vh",
          paddingLeft: sidebarOpen ? "220px" : "80px", // Adjust padding so movement is smooth
          transition: "padding-left 0.3s ease-in-out",
        }}
      >
        {/* Search Component (Title, Subtitle, and Search Bar) */}
        <SearchComponent
          placeholder="🏙️ Search City Name..."
          sidebarOpen={sidebarOpen}
        />
      </Box>
    </Box>
  );
}

export default Home;
