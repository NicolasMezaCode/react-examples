import { async } from "@firebase/util";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import userService from './userService'

export const createUser=createAsyncThunk('user/createUser',async (newUser)=>{
    return await userService.signUp(newUser);
});

export const userSlice=createSlice({
    name:'user',
    initialState:{
        info:{
            id:'',
            email:'',
        },
    },extraReducers:(builder)=>{
        builder
        .addCase(createUser.fulfilled,(state,action)=>{
            state.info={
                id:action.payload.user.uid,
                email:action.payload.user.email,
            };
            console.log(action.payload.user.email)
        })
    }
});