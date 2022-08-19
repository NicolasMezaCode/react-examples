import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsService from './postsService';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (data, thunkAPI) => {
    try {
      const data = await postsService.get();
      return data;
    } catch (e) {
      console.log('error', e);
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

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(postAPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
