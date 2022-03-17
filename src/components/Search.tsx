import React from "react";
import { Box, Button, TextField } from "@mui/material";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";

function Search() {
  return (
    <Box display="flex">
      <TextField
        fullWidth
        sx={{
          "&.MuiTextField-root": {
            input: {
              color: "white",
            },
          },
        }}
        label="Search"
        type="search"
      />
      <Button variant="outlined" sx={{ color: "white" }}>
        <ScreenSearchDesktopOutlinedIcon />
      </Button>
    </Box>
  );
}

export default Search;
