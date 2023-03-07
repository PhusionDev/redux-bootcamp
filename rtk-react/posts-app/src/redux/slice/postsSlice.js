import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import apiUrl from '../../utils/apiUrl';

// initial state
const initialState = {
  posts: [],
  loading: true,
  error: '',
};

// actions
// fetch all posts
export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await axios.get(apiUrl);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.status);
    }
  }
);

// fetch a single post
export const fetchPost = createAsyncThunk(
  'posta/search',
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await axios.get(`${apiUrl}/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.status);
    }
  }
);

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

    // search single post
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

// generate reducer
const postsReducer = postsSlice.reducer;

export default postsReducer;
