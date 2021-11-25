import React from "react";
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
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import CategoryMenu from "../components/CategoryMenu";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ProductPage({ products }) {
  const [value, setValue] = React.useState("Ascending");
  console.log(products);

  const handleChange = (event) => {
    setValue(event.target.value);
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
                }}
              >
                <FormControl>
                  <FormLabel component="legend">Filter Products</FormLabel>
                  <RadioGroup
                    aria-label="products-filter"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Ascending"
                      control={<Radio />}
                      label="Ascending"
                    />
                    <FormControlLabel
                      value="Descending"
                      control={<Radio />}
                      label="Descending"
                    />
                  </RadioGroup>
                  <CategoryMenu />
                </FormControl>
              </Box>
            </Grid>
            <Grid item container sm md={10} spacing={4}>
              {products.map((card) => {
                return (
                  <Grid item key={card._id}>
                    <ProductCard
                      name={card.name}
                      price={card.price}
                      desc={card.desc}
                      image={card.image}
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
