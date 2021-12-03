import { Typography, Box } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1.5rem 3.5rem",
        }}
      >
        <Typography variant="h6" fontWeight="600">
          Shopify Inc.We Love our Users
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <h5>Follow Us:</h5>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
