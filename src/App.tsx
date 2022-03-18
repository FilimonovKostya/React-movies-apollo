import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterItems from "./components/FilterItems";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import AboutFilm from "./components/AboutFilm";
import SwiperComponent from "./components/SwiperComponent";

function App() {
  const [isOpenModal] = useState(false);

  return (
    <Box sx={{ backgroundColor: indigo["900"], minHeight: "100vh" }}>
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
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route
            path="/serials"
            element={<MovieCard isOpenModal={isOpenModal} />}
          />
          <Route path="/films" element={<FilterItems />} />
          <Route path="/about" element={<AboutFilm />} />
          <Route path="/swiper" element={<SwiperComponent />} />
          <Route path="/trending" element={<div>Trending</div>} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
