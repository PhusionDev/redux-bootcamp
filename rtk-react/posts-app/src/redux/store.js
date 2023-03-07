import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slice/postsSlice';

// store
const store = configureStore({
  reducer: postsReducer,
});

export default store;
