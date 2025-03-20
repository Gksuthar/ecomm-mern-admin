import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../Reducers/IsSidebarToggle';
import addProductPanel from '../Reducers/addProductPanleToggle'
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer, 
    addproduct:addProductPanel
  },
});

export default store;
