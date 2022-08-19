import { createSlice } from "@reduxjs/toolkit";
import { object } from "prop-types";

export const blogSlice=createSlice({
    name:'blog',
    initialState:{
        posts:[]
    },
    reducers:{
        createPost:(state,action)=>{
            state.posts.push(action.payload)
        },
        deletePost:(state,action)=>{
            state.posts = state.posts.filter((task) => task.id !== action.payload);
        },
        editPost:(state,action)=>{
            const index=state.posts.findIndex(object=>{
                return object.id === action.payload.id
            });
            if(index!== -1){
                state.posts[index].data=action.payload.text
            }
        },
    }
});
export const {createPost,deletePost,editPost}=blogSlice.actions
export default  blogSlice.reducer