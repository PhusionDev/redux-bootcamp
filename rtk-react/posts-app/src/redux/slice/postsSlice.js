import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import apiUrl from '../../utils/apiUrl';

// initial state
const initialState = {
  posts: [],
  loading: false,
  error: '',
};

// actions
const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await axios.get(apiUrl);

  return res.data;
});

// slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    // handle actions

    // pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });

    // fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });

    // rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

// generate reducer
const postsReducer = postsSlice.reducer;

export default postsReducer;
