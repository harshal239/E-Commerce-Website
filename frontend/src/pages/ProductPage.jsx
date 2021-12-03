import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  Container,
  Grid,
  Typography,
  Box,
  useTheme,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Button,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import CategoryMenu from "../components/CategoryMenu";
import {
  productList,
  productFilterList,
} from "../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

function ProductPage() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.allproducts);
  const { loading, error, products } = productsList;

  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productFilter = useSelector((state) => state.filteredProducts);
  const { loading: loadingFilter, filteredProducts } = productFilter;

  useEffect(() => {
    dispatch(productList(sort));
    dispatch(productFilterList(category));
  }, [dispatch, successDelete, sort, category]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleChange2 = (event) => {
    setCategory(event.target.value);
  };
  const clearFilters = () => {
    setSort("");
    setCategory("");
  };

  const theme = useTheme();
  return (
    <div>
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <Container maxWidth="fluid">
          <Typography variant="h3" fontWeight="600" align="center" gutterBottom>
            Product Page
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ margin: "1rem 0rem" }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={3} md={2}>
              <Box
                sx={{
                  padding: "0 1rem",

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                }}
              >
                <FormControl>
                  <FormLabel component="legend">Filter Products</FormLabel>
                  <RadioGroup
                    aria-label="products-filter"
                    name="controlled-radio-buttons-group"
                    value={sort}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="asc"
                      control={<Radio />}
                      label="Ascending"
                    />
                    <FormControlLabel
                      value="desc"
                      control={<Radio />}
                      label="Descending"
                    />
                  </RadioGroup>
                </FormControl>
                <Box>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="demo-simple-select-label">
                      Categories
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Categories"
                      onChange={handleChange2}
                    >
                      <MenuItem value="Men's Clothing">Men's Clothing</MenuItem>
                      <MenuItem value="Women's Clothing">
                        Women's Clothing
                      </MenuItem>
                      <MenuItem value="Electronics">Electronics</MenuItem>
                      <MenuItem value="Computer">Computer</MenuItem>
                      <MenuItem value="Mobile">Mobile</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button variant="outlined" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </Box>
            </Grid>
            <Grid item container md={10} spacing={4}>
              {category
                ? filteredProducts?.map((card) => {
                    return (
                      <Grid item key={card._id}>
                        <ProductCard
                          id={card._id}
                          name={card.name}
                          price={card.price}
                          desc={card.description}
                          image={card.image}
                        />
                      </Grid>
                    );
                  })
                : products?.map((card) => {
                    return (
                      <Grid item key={card._id}>
                        <ProductCard
                          id={card._id}
                          name={card.name}
                          price={card.price}
                          desc={card.description}
                          image={card.image}
                          quantity={card.quantity}
                        />
                      </Grid>
                    );
                  })}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default ProductPage;
