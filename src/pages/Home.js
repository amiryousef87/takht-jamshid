import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import videoSrc from "../assets/perespolice.mp4"; 
const BackgroundVideo = styled(Box)({
  position: "relative",
  height: "100vh",
  overflow: "hidden",
});

const Video = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1, // ویدیو در پس‌زمینه
});

const Home = () => {
  return (
    <BackgroundVideo>
      <Video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          color: "black",
          textAlign: "center",
          paddingTop: "25vh",
        }}
      >
        <Typography variant="h2" gutterBottom color="white">
          Takht Jamshid, Achaemenid throne
        </Typography>
        <Typography variant="h5" color="white">Visit this amazing collection</Typography>

        {/* دکمه‌ها */}
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              marginRight: 2,
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            onClick={() => window.open("/")}
          >
            Visit the site
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            onClick={() =>
              window.open(
                "https://360.persepolis.ir/Aerial-Persepolis-Tour/",
                "_blank"
              )
            }
          >
          360° virtual tour
          </Button>
        </Box>
      </Container>
    </BackgroundVideo>
  );
};

export default Home;
