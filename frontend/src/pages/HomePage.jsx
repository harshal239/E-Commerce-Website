import React from "react";
import Header from "../components/Header";
import { Button, Container, Typography, Box } from "@mui/material";
import "../styles/homepage.css";
import banner from "../images/homebanner.gif";
import men from "../images/men.jpg";
import women from "../images/women.jpg";
import mobile from "../images/Mobile.jfif";
import comp from "../images/laptop.jfif";
import headphone from "../images/headphone.jfif";
import Lottie from "react-lottie";
import animationData from "../lottie/61089-add-to-cart.json";
import Footer from "../components/Footer";

function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <Container maxWidth="xl">
          <div className="banner-cont">
            <div className="banner-text">
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{
                  fontSize: "5rem",
                }}
              >
                Your <span>Safety</span> is Our <span>Priority</span>!
              </Typography>
              <div className="buttons">
                <Button variant="contained">Explore</Button>
                <Button variant="outlined">Sign In</Button>
              </div>
            </div>
            <div className="banner-img">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </div>
          <div className="categories" style={{ marginTop: "3rem" }}>
            <center>
              <h1>Choose from the Top Categories!</h1>
            </center>
            <Box className="card-cont">
              <div>
                <img src={men} />
                <h3>Men's Fashion</h3>
              </div>
              <div>
                <img src={women} />
                <h3>Women's Fashion</h3>
              </div>
              <div>
                <img src={mobile} />
                <h3>Mobiles</h3>
              </div>
              <div>
                <img src={headphone} />
                <h3>Electronics</h3>
              </div>
              <div>
                <img src={comp} />
                <h3>Computers</h3>
              </div>
            </Box>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
