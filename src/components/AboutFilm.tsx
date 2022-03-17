import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

function AboutFilm() {
  return (
    <Container maxWidth="xl">
      <Card>
        <CardMedia
          component="img"
          height="500"
          width="280"
          image="https://image.tmdb.org/t/p/w500//wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Adam Project (2022)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            After accidentally crash-landing in 2022, time-traveling fighter
            pilot Adam Reed teams up with his 12-year-old self on a mission to
            save the future.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutFilm;
