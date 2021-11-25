import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import api from "./api/product";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#03045e",
      dark: "#03045e",
      light: "#00b4d8",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  const [products, setProducts] = useState([]);

  const RetrieveProducts = async () => {
    const response = await api.get("/");
    setProducts(response.data);
  };
  const AddProduct = () => {};
  useEffect(() => {
    RetrieveProducts();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/products"
              exact
              element={<ProductPage products={products} />}
            />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
