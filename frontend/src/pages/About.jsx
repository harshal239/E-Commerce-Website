import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import user from "../images/user.png";

function About() {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="600" align="center" gutterBottom>
            About Page
          </Typography>

          <Box sx={{ width: "100%", display: "flex", gap: "1rem" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="green iguana" image={user} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sayee Bhoite
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Skills: Web Development, Python
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Profile</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="green iguana" image={user} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Milind Kedare
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Skills: Web Development, Java
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Profile</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="green iguana" image={user} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bilal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Skills: Frontend Development, React Js
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Profile</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="green iguana" image={user} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Harshal Walunj
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Skills: Web Development, React Js, Node Js
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Profile</Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default About;
