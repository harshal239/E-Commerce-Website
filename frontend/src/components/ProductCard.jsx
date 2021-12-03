import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductAction } from "../Redux/actions/productActions";

function ProductCard({ id, image, name, desc, price, quantity }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const productDelete = useSelector((state) => state.productDelete);
  const { loading, error } = productDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProductAction(id));
    }
  };

  return (
    <Card
      sx={{
        width: 270,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{
          height: "200px",
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
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography color="GrayText">{desc}</Typography>
          <Typography color="GrayText">Quantity : {quantity}</Typography>
        </Box>
        <Typography variant="h4" fontWeight="700">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ margin: " 0 auto 1rem auto" }}
          color="success"
        >
          <Link to={`/products/${id}`}>Update</Link>
        </Button>

        <Button
          variant="contained"
          sx={{ margin: " 0 auto 1rem auto" }}
          color="error"
          onClick={() => {
            deleteHandler(id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
