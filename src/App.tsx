import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import Header from "./components/Header";
import FilterItems from "./components/FilterItems";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <Box sx={{ backgroundColor: indigo["900"] }}>
      <Header />
      <Container
        sx={{
          pt: "10px",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" color="white">
          Discover movies
        </Typography>
        <FilterItems />
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Container>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
