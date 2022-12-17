import { createSlice } from "@reduxjs/toolkit";

export const productData=createSlice({
    name:'productData',
    initialState:{value:[]},
    reducers:{
        addData:(state,action)=>{
            state.value=action.payload
        },
       
    }
})

export const {addData}=productData.actions
export default productData.reducer