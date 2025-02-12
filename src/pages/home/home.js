import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import homeStyles from "./homeStyles";
import "@fontsource/roboto";
import Sidebar from "../../components/sidebar";
function Home() {
  return (
    <Box sx={homeStyles.container}>
      <Sidebar />

      {/* Heading */}
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: "500", fontSize: "2.5rem", color: "#333" }}
        gutterBottom
      >
        Clean Dash
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "300", fontSize: "1.2rem", color: "#555" }}
        gutterBottom
      >
        Your city Dashboard one search away
      </Typography>

      {/* Search Bar */}
      <Divider sx={{ width: "80%", margin: "20px 0", borderColor: "#e0e0e0" }} />
      <Box sx={homeStyles.inputBox}>
        <TextField
          label="Search"
          variant="outlined"
          sx={homeStyles.textField}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={homeStyles.searchIconWrapper}
                    onClick={() => alert("Search button clicked!")} // Replace with actual functionality
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
