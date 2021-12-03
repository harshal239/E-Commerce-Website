import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import AddProduct from "./pages/AddProduct";
import SingleProductPage from "./pages/SingleProductPage";
import "./App.css";

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
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/products" exact element={<ProductPage />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/cart" exact element={<CartPage />} />
            <Route path="/addproduct" exact element={<AddProduct />} />
            <Route path="/products/:id" exact element={<SingleProductPage />} />
            <Route>404 Page Not Found !</Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
