import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";

import Header from "./components/Header";
import FilterItems from "./components/FilterItems";

function App() {
  return (
    <Box sx={{ backgroundColor: indigo["900"], minHeight: "100vh" }}>
      <Header />
      <Container sx={{ pt: "10px", textAlign: "center" }}>
        <Typography variant="h2" color="white">
          Discover movies
        </Typography>
        <FilterItems />
      </Container>
    </Box>
  );
}

export default App;
