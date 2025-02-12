const homeStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "'Roboto', Arial, sans-serif",
    background:
      "linear-gradient(to bottom, rgba(34, 193, 195, 0.2), rgba(253, 187, 45, 0.2))",
    margin: 0,
    padding: 0,
    width: "100%",
  },
  inputBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "1000px",
    padding: "0 16px",
  },
  textField: {
    width: "100%",
    maxWidth: "600px",
    minWidth: "300px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "orange",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "orange",
    },
  },
  searchIconWrapper: {
    backgroundColor: "orange",
    borderRadius: "50%",
    padding: "6px",
    color: "white",
    "&:hover": {
      backgroundColor: "darkorange",
    },
  },
};

export default homeStyles;
