const axios = require('axios');
const { createStore, applyMiddleware, combineReducers } = require('redux');
const loggerMiddleware = require('redux-logger').createLogger();

// constants
const POSTS_FETCH_REQUEST = 'POSTS_FETCH_REQUEST';
const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS';
const POSTS_FETCH_FAIL = 'POSTS_FETCH_FAIL';

// custom middleware
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log('Action fired', action);
      next(action);
    };
  };
};

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
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUEST:
      return {
        posts: [...state.posts, 'html'],
      };
    case POSTS_FETCH_REQUEST:
      return {
        posts: [...state.posts],
      };
    case POSTS_FETCH_FAIL:
      return {
        posts: [...state.posts],
      };
    default:
      return state;
  }
};

// store
const store = createStore(
  postsReducer,
  applyMiddleware(loggerMiddleware, customLogger)
);

// subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
store.dispatch(postsFetchRequest());
