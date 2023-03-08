import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import baseUrl from '../../../utils/baseUrl';

// initial state
const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: {},
  },
};

// action creator
// register
export const registerUserAction = createAsyncThunk(
  'user/register',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      // header
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log(payload);
      const user = {
        fullname: payload.fullname,
        email: payload.email,
        password: payload.password,
      };
      const res = await axios.post(`${baseUrl}/users/register`, user, config);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// users slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.userAuth.error = action.payload;
    });
  },
});

// generate reducer
const usersReducer = usersSlice.reducer;

export default usersReducer;
