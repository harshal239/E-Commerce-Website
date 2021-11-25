import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { Container } from "@mui/material";

function HomePage() {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <HeroSection />
      </main>
    </div>
  );
}

export default HomePage;
