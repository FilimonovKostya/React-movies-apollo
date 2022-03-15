import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        variant="elevation"
        elevation={5}
        square
        sx={{ width: "100%", background: indigo["900"] }}
      >
        <Typography variant="h1" color="white" textAlign="center">
          Movies Hub
        </Typography>
      </Paper>
    </Box>
  );
}

export default App;
