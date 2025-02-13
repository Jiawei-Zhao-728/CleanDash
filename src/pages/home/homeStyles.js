const homeStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    fontFamily: "'Roboto', Arial, sans-serif",
    background: "linear-gradient(to bottom, #f8fbff, #fef6e4)", // Softer gradient
    margin: 0,
    padding: "5% 8%", // More balanced padding
    width: "100%",
  },
  heading: {
    fontWeight: "600",
    fontSize: "3rem", // Bigger for prominence
    color: "#222", // Darker for contrast
    marginBottom: "10px", // Space below heading
  },
  description: {
    fontWeight: "300",
    fontSize: "1.3rem",
    color: "#666", // Slightly darker for readability
    lineHeight: "1.6", // Better text spacing
    marginBottom: "20px", // More space before search bar
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    padding: "0",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)", // Soft shadow for depth
    borderRadius: "30px", // Modern rounded edges
  },
  textField: {
    width: "100%",
    borderRadius: "30px",
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      padding: "12px 20px", // More padding for a clean look
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ff9800",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#ff9800",
    },
  },
  searchIconWrapper: {
    backgroundColor: "#ff9800",
    borderRadius: "50%",
    padding: "10px",
    color: "white",
    marginLeft: "-40px", // Move inside the text box
    "&:hover": {
      backgroundColor: "#e68900",
    },
  },
};

export default homeStyles;
