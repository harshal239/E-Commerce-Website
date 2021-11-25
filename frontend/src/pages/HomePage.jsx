import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { Button, Container } from "@mui/material";
import "../styles/homepage.css";
import banner from "../images/homebanner.gif";
import Card from "../components/Card";
import men from "../images/men.jpg";
import women from "../images/women.jpg";
import mobile from "../images/elec.jpg";
import comp from "../images/comp.jpeg";

function HomePage() {

  // const cardData = [
  //  {
  //   "name" : "Men",
  //   "img":"../images/men.jpg"
  //  },
  //  {
  //   "name" : "Men",
  //   "img":"../images/men.jpg"
  //  },
  //  {
  //   "name" : "Men",
  //   "img":"../images/men.jpg"
  //  },
  //  {
  //   "name" : "Men",
  //   "img":"../images/men.jpg"
  //  },

  // ]
  // ;

  return (
    <div>
      <Header />
      <main style={{ marginTop: "4rem" }}>
      <div className="main">        
        <div className="banner-cont">
          <div className="banner-text">
                  <h1>Your <span>Safety</span> is Our <span>Priority</span>!</h1>
                  <div className="buttons">
                    <Button variant="contained">Explore</Button>
                    <Button variant="outlined">Sign In</Button>
                  </div>
          </div>
          <div className="banner-img">
            
              <img src={banner} />
            
          </div>

        </div>
          <div className="categories" style={{marginTop:"3rem"}}>
            <center><h1>Choose from the Top Categories!</h1></center>
              <div className="card-cont">

                <div>
                  <img src={men}/>
                  <h2>Men's Fashion</h2>
                </div>
                <div>
                  <img src={women}/>
                  <h2>Woen's Fashion</h2>
                </div>
                <div>
                  <img src={mobile}/>
                  <h2>Mobiles</h2>
                </div>
                <div>
                  <img src={comp}/>
                  <h2>Computers</h2>
                </div>
                  {/* <Card data = {cardData}/>
                  <Card data = {cardData}/>
                  <Card data = {cardData}/>
                  <Card data = {cardData}/> */}
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
