const axios = require('axios');
const { createStore, combineReducers } = require('redux');

// constants
const POSTS_FETCH_REQUEST = 'POSTS_FETCH_REQUEST';
const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS';
const POSTS_FETCH_FAIL = 'POSTS_FETCH_FAIL';

// initial state
const initialState = {
  posts: [],
};

// actions
const postsFetchRequest = () => {
  return {
    type: POSTS_FETCH_REQUEST,
  };
};

const postsFetchSuccess = () => {
  return {
    type: POSTS_FETCH_SUCCESS,
  };
};

const postsFetchFail = () => {
  return {
    type: POSTS_FETCH_FAIL,
  };
};

// reducers
const postsReducer = (state = initialState, action) => {};

// subscribe

// store
const store = createStore(postsReducer);

// dispatch
