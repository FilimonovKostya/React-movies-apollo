import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import TheatersIcon from "@mui/icons-material/Theaters";
import MonitorIcon from "@mui/icons-material/Monitor";

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
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation showLabels sx={{ backgroundColor: blue["700"] }}>
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Trending"
            icon={<WhatshotIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Films"
            icon={<TheatersIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Serials"
            icon={<MonitorIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Search"
            icon={<SearchIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
