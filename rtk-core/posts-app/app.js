const { createAsyncThunk } = require('@reduxjs/toolkitx');
const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// action creator ( create async thunk )
const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const data = await axios.get(apiUrl);
  return data;
  axios.get(apiUrl);
});

// reducer -- slice
