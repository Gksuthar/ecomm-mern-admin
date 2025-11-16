import React, { useEffect, useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";
import UploadBox from "../UploadBox";
import toast, { Toaster } from "react-hot-toast";

const AddProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [thirdCategories, setThirdSubCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    oldPrice: 0,
    category: "",
    subCategory: "",
    thirdSubCat: "",
    brand: "",
    productStock: 0,
    productDiscount: 0,
    productRAMS: "",
    productWeight: 0,
    size: "",
    isFeatured: false,
    rating: 2.5,
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://mernecommbackend-xxfd.onrender.com/api/routerCategory/"
        );
        if (response.status === 200) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (formData.category) {
      const filteredSubCategories = categories.filter(
        (item) => item.name === formData.category
      );

      const allChildren = filteredSubCategories
        .map((item) => item.children)
        .flat();
      setSubCategories(allChildren);
    }
  }, [formData.category, categories]);

  useEffect(() => {
    try {
      setThirdSubCategories(subCategories.flatMap(item => item.children));
      } catch (error) {
      console.error(error);
    }
  }, [subCategories, setSubCategories]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRatingChange = (e, newValue) => {
    setFormData({ ...formData, rating: newValue });
  };

  const handleFileUpload = (files) => {
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        oldPrice: formData.oldPrice,
        catName: formData.category,
        subCat: formData.subCategory,
        thirdSubCat: formData.thirdSubCat,
        brand: formData.brand,
        size: formData.productSize,
        countInStock: formData.productStock,
        discount: formData.productDiscount,
        isFeatured: formData.isFeatured,
        rating: formData.rating,
      };
      const response = await axios.post(
        "https://mernecommbackend-xxfd.onrender.com/api/product/addProduct",
        payload
      );
      if (response.status === 200) {
        toast.success("Product added successfully!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="p-8 w-full">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <div className="space-y-4 overflow-y-auto max-h-[500px]">
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Product Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          multiline
          rows={4}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <FormControl fullWidth>
            <InputLabel>Product Category</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              label="Product Category"
            >
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat.name}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Product Sub Category</InputLabel>
            <Select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              required
              label="Product Sub Category"
            >
              {subCategories.map((sub, index) => (
                <MenuItem key={index} value={sub.name}>
                  {sub.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormControl fullWidth>
            <InputLabel>Product Third Category</InputLabel>
            <Select
              name="thirdSubCat"
              value={formData.thirdSubCat}
              onChange={handleInputChange}
              required
              label="Product Category"
            >
              {thirdCategories.map((cat, index) => (
                <MenuItem key={index} value={cat.name}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            fullWidth
            label="Product Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Product Old Price"
            name="oldPrice"
            type="number"
            value={formData.oldPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormControlLabel
            control={
              <Checkbox
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
              />
            }
            label="Is Featured?"
          />
          <TextField
            fullWidth
            label="Product Stock"
            name="productStock"
            type="number"
            value={formData.productStock}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* <FormControl fullWidth>
            <InputLabel>Product Brand</InputLabel>
            <Select
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              required
              label="Product Brand"
            >
              <MenuItem value="Brand A">Brand A</MenuItem>
              <MenuItem value="Brand B">Brand B</MenuItem>
              <MenuItem value="Brand C">Brand C</MenuItem>
            </Select>
          </FormControl> */}
          <TextField
            fullWidth
            label="Product Brand"
            value={formData.brand}
            onChange={handleInputChange}
            name="brand"
            type="text"
          />
          <TextField
            fullWidth
            label="Product Discount"
            name="productDiscount"
            type="number"
            value={formData.productDiscount}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            fullWidth
            label="Product RAMS"
            name="productRAMS"
            value={formData.productRAMS}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Product Weight"
            name="productWeight"
            type="number"
            value={formData.productWeight}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            fullWidth
            label="Product Size"
            name="productSize"
            value={formData.productSize}
            onChange={handleInputChange}
          />
          <Rating
            name="rating"
            value={formData.rating}
            precision={0.5}
            onChange={handleRatingChange}
          />
        </div>

        <UploadBox multiple onFileUpload={handleFileUpload} />

        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save Product
        </Button>
      </div>
    </div>
  );
};

export default AddProductForm;
