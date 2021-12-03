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
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import product from "../api/product";
import {
  updateProductAction,
  deleteProductAction,
} from "../Redux/actions/productActions";
import Footer from "../components/Footer";

function SingleProductPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading, error } = productUpdate;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete } = productDelete;

  const { id } = useParams();
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteProductAction(id));
    }
    navigate("/products");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await product.get(`/product/${id}`);
      setName(data.name);
      setImage(data.image);
      setDescription(data.description);
      setCategory(data.category);
      setQuantity(data.quantity);
      setPrice(data.price);
    };
    fetching();
  }, [id]);

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
      updateProductAction(
        id,
        name,
        image,
        description,
        category,
        price,
        quantity
      )
    );

    resetHandler();
    navigate("/products");
  };

  return (
    <div>
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
          Edit Product
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
              disabled
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
              src={image}
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
              disabled
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
                disabled
              >
                <MenuItem value="Men's Clothing">Men's Clothing</MenuItem>
                <MenuItem value="Women's Clothing">Women's Clothing</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Computer">Computer</MenuItem>
                <MenuItem value="Mobile">Mobile</MenuItem>
              </Select>
            </FormControl>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button variant="contained" color="success" type="submit">
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteHandler(id)}
              >
                Delete
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default SingleProductPage;
