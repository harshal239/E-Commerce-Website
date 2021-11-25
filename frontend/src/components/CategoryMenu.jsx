import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategoryMenu() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ marginTop: "1.5rem" }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value="Men's Clothing">Men's Clothing</MenuItem>
          <MenuItem value="Women's Clothing">Women's Clothing</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
