import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TheatersIcon from "@mui/icons-material/Theaters";
import MonitorIcon from "@mui/icons-material/Monitor";
import SearchIcon from "@mui/icons-material/Search";

function Footer() {
  return (
    <Box sx={{ pb: 10 }}>
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

export default Footer;
