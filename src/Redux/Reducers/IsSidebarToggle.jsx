import { createSlice } from '@reduxjs/toolkit';

const initialState={
    isSideBarOpan : false
}
const sidebarSlice=createSlice({
    name: 'sidebar',
    initialState,
    reducers:{
        toggleSidebar:(state,action)=>{
            state.isSideBarOpan = action.payload
        }
        
    }
})
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
