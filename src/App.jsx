import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import "./index.css";
import Header from "./Components/Header";
import ProductPage from "./Pages/productPage";
import AddProductForm from './Components/addProductForm/index'
import toast, { Toaster } from 'react-hot-toast';
import AddCategory from "./Components/AddCategory";
import {
  Dialog,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Button,
} from "@mui/material";
import { IoClose } from "react-icons/io5";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

function App() {
  const [addProductPanel, setAddProductPanel] = useState(false);
  const closeAddProductPanel = () => {
    setAddProductPanel(false);
  };

  const openAddProductPanel = () => {
    setAddProductPanel(true); 
  };

  return (
    <Router>
          <Toaster />
      <Header />
      <Sidebar openAddProductPanel={openAddProductPanel} />
      <Routes>
        <Route path="/" element={<Home openAddProductPanel={openAddProductPanel} />} />
        <Route path="/products" element={<ProductPage openAddProductPanel={openAddProductPanel} />} />
        <Route path="/addCategory" element={<AddCategory openAddProductPanel={openAddProductPanel} />} />
      </Routes>
      <Dialog
        fullScreen
        open={addProductPanel}
        onClose={closeAddProductPanel}
        TransitionComponent={Transition}
      >
        <AppBar position="relative">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeAddProductPanel}
              aria-label="close"
            >
              <IoClose />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              Add Product
            </Typography>
            <Button autoFocus color="inherit" onClick={closeAddProductPanel}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <AddProductForm  />
          </ListItemButton>
          <Divider />
        </List>
      </Dialog>
    </Router>
  );
}

export default App;
