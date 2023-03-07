const {
  createAsyncThunk,
  createSlice,
  configureStore,
} = require('@reduxjs/toolkit');
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
  const { data } = await axios.get(apiUrl);
  return data;
});

// reducer -- slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    // handle lifecycle - pending-success, rejected
    // pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });

    // fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });

    // rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      loading: false;
      state.error = action.payload;
    });
  },
});

// generate reducer
const postsReducer = postsSlice.reducer;

// store
const store = configureStore({
  reducer: postsReducer,
});

// dispatch
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchPosts());
