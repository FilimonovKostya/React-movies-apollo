import React from "react";
import { TextField } from "@mui/material";

function Search() {
  return (
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
  );
}

export default Search;
