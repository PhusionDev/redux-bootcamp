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
const registerUserAction = createAsyncThunk(
  'user/register',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      // header
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
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
