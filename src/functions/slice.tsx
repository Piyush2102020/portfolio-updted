import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

const slice=createSlice({
    name:'context',
    initialState:{
        theme:'default',
        user:'user',
        status:'',
        ai:true,
        isLandingPage:true,
        data:{},
        chat:[{message:'',
            response:''
        }]
    },
    reducers:{
        changeTheme:(state,action:PayloadAction<string>)=>{state.theme=action.payload},
        changeUser:(state,action:PayloadAction<string>)=>{state.user=action.payload},
        changeStatus:(state, action:PayloadAction<string>)=>{state.status=action.payload},
        toggleAi:(state)=>{state.ai=!state.ai},
        changePage:(state)=>{state.isLandingPage=!state.isLandingPage},
        addData:(state,action:PayloadAction<{}>)=>{state.data=action.payload},
        addChat:(state,action:PayloadAction<{message:string,response:string}>)=>{state.chat.push(action.payload)}
    }
});

export const {changeTheme,changeUser,changeStatus,toggleAi,changePage,addData} =slice.actions;
export default slice.reducer;