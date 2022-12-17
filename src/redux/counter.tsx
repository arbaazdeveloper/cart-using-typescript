import { createSlice } from "@reduxjs/toolkit";

export const counter=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        changeCounter:(state,action)=>{
            state.value=action.payload
        },
       
    }
})

export const {changeCounter}=counter.actions
export default counter.reducer