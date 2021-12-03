import React, { useState } from "react";
import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import Header from "../components/Header";
import laptop from "../images/laptop.jfif";
import DeleteIcon from "@mui/icons-material/Delete";

const data = [
  {
    name: "MacBook Pro",
    image: laptop,
  },
];
function CartPage() {
  const [cart, setCart] = useState(data);
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setCart([]);
  };
  return (
    <div>
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" textAlign="center">
            Cart Page
          </Typography>
          {cart.map((item) => {
            return (
              <Card
                sx={{
                  marginTop: "2rem",
                  maxWidth: "40rem",
                  display: "flex",
                  height: "20rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{ width: "20rem" }}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </Button>
                  <h4> {quantity} </h4>
                  <Button
                    onClick={() => {
                      setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </Button>
                  <IconButton onClick={handleClick}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
          <Button
            variant="contained"
            sx={{ marginTop: "2rem" }}
            onClick={() => {
              alert("Checkout Successfull !");
            }}
          >
            Checkout Now !
          </Button>
        </Container>
      </main>
    </div>
  );
}

export default CartPage;
