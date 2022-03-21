import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SwiperComponent from "./SwiperComponent";

function AboutFilm() {
  return (
    <Container maxWidth="xl">
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          width="280"
          image="https://image.tmdb.org/t/p/w500//wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Adam Project (2022)
          </Typography>
          <Typography variant="caption" gutterBottom component="div">
            The love story is never the whole story.
          </Typography>
          <Paper
            elevation={4}
            sx={{ minHeight: "250px", p: "10px 5px", mb: "10px" }}
          >
            <Typography variant="body2" color="text.secondary">
              After accidentally crash-landing in 2022, time-traveling fighter
              pilot Adam Reed teams up with his 12-year-old self on a mission to
              save the future.
            </Typography>
          </Paper>
          <SwiperComponent />
          <Button
            href="https://www.youtube.com/watch?v=0VxtIS6C3Ao&list=RDMM&index=4"
            startIcon={<YouTubeIcon />}
            variant="contained"
            sx={{
              mt: "15px",
              backgroundColor: "#f50057",
              "&:hover": {
                backgroundColor: "#c51162",
              },
            }}
          >
            Watch the trailer
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutFilm;
