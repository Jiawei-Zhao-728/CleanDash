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

function Home() {
  return (
    <Box sx={homeStyles.container}>
      {/* Heading */}
      <Typography variant="h3" sx={homeStyles.heading}>
        Clean Dash
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={homeStyles.description}>
        Your city dashboard, one search away.
      </Typography>

      {/* Search Bar */}
      <Divider
        sx={{ width: "80%", margin: "20px 0", borderColor: "#e0e0e0" }}
      />
      <Box sx={homeStyles.inputBox}>
        <TextField
          label="Search city..."
          variant="outlined"
          sx={homeStyles.textField}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={homeStyles.searchIconWrapper}
                    onClick={() => alert("Search button clicked!")}
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
