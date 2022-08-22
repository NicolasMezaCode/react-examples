import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from './postsService';

export const fetchPosts=createAsyncThunk(
    'posts/fetchPosts',
    async (data, thunkAPI)=>{
        try{
            const data=await postsService.get();
            return data;
        } catch(e){
            console.log('error',e);
        }
    }
);

export const postAPost = createAsyncThunk(
    'posts/postAPost',
    async (post, thunkAPI) => {
      try {
        const newPost = await postsService.post(post);
        return newPost;
      } catch (e) {
        console.log(e);
      }
    }
  );

export const blogSlice=createSlice({
    name:'blog',
    initialState:{
        posts:[]
    },
    reducers:{
        deletePost:(state,action)=>{
            state.posts = state.posts.filter((task) => task.id !== action.payload);
        },
        editPost:(state,action)=>{
            const index=state.posts.findIndex(object=>{
                return object.id === action.payload.id
            });
            if(index!== -1){
                state.posts[index].title=action.payload.title
                state.posts[index].body=action.payload.body
            }
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts=action.payload;
        })
        .addCase(postAPost.fulfilled,(state,action)=>{
            state.posts.push(action.payload)
        })
    }
});
export const {createPost,deletePost,editPost}=blogSlice.actions
export default  blogSlice.reducer