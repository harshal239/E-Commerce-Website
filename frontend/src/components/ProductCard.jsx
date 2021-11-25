import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import React from "react";
import ProductImage from "../images/product-01.jpg";

function ProductCard({ image, name, desc, price }) {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 270, maxHeight: 400 }}>
      <CardMedia
        component="img"
        image={image}
        sx={{
          maxHeight: "10rem",
          objectFit: "fit",
          objectPosition: "top",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            {name}
          </Typography>
          <Typography color="GrayText">{desc}</Typography>
        </Box>
        <Typography variant="h4" fontWeight="700">
          {" "}
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ margin: " 0 auto 1rem auto" }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
