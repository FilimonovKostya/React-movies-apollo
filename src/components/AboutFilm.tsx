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
    <Container
      maxWidth="xl"
      sx={{
        padding: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 15px",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            display: "flex",
            objectFit: "contain",
            width: "30%",
            margin: "0 15px",
          }}
          image="https://image.tmdb.org/t/p/w500//wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
          alt="green iguana"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
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
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={18}
              textAlign="left"
            >
              Vic and Melinda Van Allen are a couple in the small town of Little
              Wesley. Their loveless marriage is held together only by a
              precarious arrangement whereby, in order to avoid the messiness of
              divorce, Melinda is allowed to take any number of lovers as long
              as she does not desert her family.
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
