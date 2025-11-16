import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, MenuItem } from "@mui/material";
import axios from "axios";

const AddCategory = ({ onSubmit }) => {
  const [category, setCategory] = useState({
    name: "",
    images: "",
    parentCatName: "",
    parentId: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://mernecommbackend-xxfd.onrender.com/api/routerCategory");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mernecommbackend-xxfd.onrender.com/api/routerCategory/createCategoryController", category);
      alert("Category added successfully");
      setCategory({ name: "", images: "", parentCatName: "", parentId: "" });
      if (onSubmit) onSubmit();
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Add Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Category Name"
          name="name"
          value={category.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Image URLs (comma separated)"
          name="images"
          value={category.images}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          select
          label="Parent Category"
          name="parentId"
          value={category.parentId}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="">None</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddCategory;
