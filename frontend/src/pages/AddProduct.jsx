import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../Redux/actions/productActions";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Phone from "../images/Phone_.png";
import Footer from "../components/Footer";

function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  const navigate = useNavigate();

  const resetHandler = () => {
    setName("");
    setImage("");
    setDescription("");
    setCategory("");
    setQuantity("");
    setPrice("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !image || !quantity || !category) return;
    dispatch(
      createProductAction(name, image, description, category, price, quantity)
    );

    resetHandler();
    navigate("/products");
  };

  return (
    <>
      <Header />
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" fontWeight="600" align="center" gutterBottom>
          Add Product
        </Typography>
        <Box sx={{ width: "100%" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <TextField
              fullWidth
              label="Product Name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
            <TextField
              fullWidth
              label="Product Image"
              value={image}
              onChange={(e) => {
                e.preventDefault();
                setImage(e.target.value);
              }}
            />
            <img
              src={image ? image : Phone}
              alt="Product Image"
              style={{
                height: "200px",
                width: "200px",
                border: "1px solid #9e9e9e",
                borderRadius: "0.25rem",
              }}
            />
            <TextField
              fullWidth
              label="Product Description"
              value={description}
              onChange={(e) => {
                e.preventDefault();
                setDescription(e.target.value);
              }}
            />
            <TextField
              fullWidth
              label="Product Quantity"
              value={quantity}
              onChange={(e) => {
                e.preventDefault();
                setQuantity(e.target.value);
              }}
              type="number"
            />
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={price}
                onChange={(e) => {
                  e.preventDefault();
                  setPrice(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                label="Price"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Categories</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={category}
                input={<OutlinedInput label="Categories" />}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <MenuItem value="Men's Clothing">Men's Clothing</MenuItem>
                <MenuItem value="Women's Clothing">Women's Clothing</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Computer">Computer</MenuItem>
                <MenuItem value="Mobile">Mobile</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default AddProduct;
