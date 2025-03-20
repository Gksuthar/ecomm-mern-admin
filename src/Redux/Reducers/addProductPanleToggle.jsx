import { createSlice } from '@reduxjs/toolkit';

const initialState={
    addProductPanel: false
}
const addProductPanel=createSlice({
    name: 'addProduct',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.addProductPanel =  action.payload
        }
        
    }
})
export const { addProduct } = addProductPanel.actions;
export default addProductPanel.reducer;
