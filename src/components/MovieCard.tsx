import React from "react";
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";

import { blue, grey, indigo } from "@mui/material/colors";
import AboutFilm from "./AboutFilm";

function MovieCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Badge sx={{ margin: "10px 5px" }} badgeContent={4} color="success">
        <Card
          onClick={handleOpen}
          sx={{
            maxWidth: 200,
            padding: "5px",
            backgroundColor: indigo.A700,
            color: "white",
            ":hover": {
              backgroundColor: blue["50"],
              cursor: "pointer",
              color: grey["900"],
            },
          }}
        >
          <CardMedia
            sx={{ borderRadius: "5px" }}
            component="img"
            height="300"
            image="https://image.tmdb.org/t/p/w300/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Box justifyContent="space-between" display="flex">
              <Typography variant="body2">Movie</Typography>
              <Typography variant="body2">2022-02-17</Typography>
            </Box>
          </CardContent>
        </Card>
      </Badge>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <AboutFilm />
      </Modal>
    </>
  );
}

export default MovieCard;
