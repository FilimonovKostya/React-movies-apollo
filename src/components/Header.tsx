import React from "react";
import { Box, Paper, SvgIcon, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { ReactComponent as Movie } from "../assets/movie.svg";
import { ReactComponent as Film } from "../assets/film-42.svg";

function Header() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        variant="elevation"
        elevation={8}
        square
        sx={{ width: "100%", background: indigo["900"] }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgIcon
            component={Movie}
            inheritViewBox
            sx={{ width: "75px", height: "75px", marginRight: "12px" }}
          />

          <Typography variant="h1" color="white" textAlign="center">
            Movies Hub
          </Typography>
          <SvgIcon
            component={Film}
            inheritViewBox
            sx={{ width: "75px", height: "75px", marginLeft: "12px" }}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default Header;
