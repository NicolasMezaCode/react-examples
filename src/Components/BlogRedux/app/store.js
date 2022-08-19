import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../slices/blogSlices'

export default configureStore({
  reducer: {
    blog:blogReducer
  },
});
