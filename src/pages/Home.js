import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import videoSrc from "../assets/perespolice.mp4"; // وارد کردن ویدیو

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
        <Typography variant="h2" gutterBottom>
          خوش آمدید به سایت تخت جمشید
        </Typography>
        <Typography variant="h5">بازدید از این مجموعه شگفت‌انگیز</Typography>
      </Container>
    </BackgroundVideo>
  );
};

export default Home;
