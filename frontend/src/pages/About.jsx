import { Container, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <Container maxWidth="sm">
          <Typography variant="h2" fontWeight="600" align="center" gutterBottom>
            About Page
          </Typography>
        </Container>
      </main>
    </div>
  );
}

export default About;
