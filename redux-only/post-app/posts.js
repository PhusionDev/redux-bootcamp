const { createStore } = require('redux');

// constants
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';

// initial state
const initialState = {
  posts: [],
};

// actions (action creators)
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
  };
};

// reducer
const postReducer = (state = initialState, action) => {};

// store
const store = createStore(postReducer);

// dispatch
