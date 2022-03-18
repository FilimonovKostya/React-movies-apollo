import React from "react";
import { Box, Button, TextField } from "@mui/material";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";

function Search() {
  return (
    <Box display="flex">
      <TextField
        fullWidth
        variant="standard"
        sx={{
          input: {
            color: "white",
          },
        }}
        label="Search"
        type="search"
        InputLabelProps={{ style: { color: "white", borderColor: "white" } }}
      />
      <Button variant="outlined" sx={{ color: "white" }}>
        <ScreenSearchDesktopOutlinedIcon />
      </Button>
    </Box>
  );
}

export default Search;
