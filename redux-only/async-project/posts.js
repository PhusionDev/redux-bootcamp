const axios = require('axios');
const { createStore, applyMiddleware, combineReducers } = require('redux');
const thunk = require('redux-thunk').default;
// const loggerMiddleware = require('redux-logger').createLogger();

// constants
const POSTS_FETCH_REQUEST = 'POSTS_FETCH_REQUEST';
const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS';
const POSTS_FETCH_FAIL = 'POSTS_FETCH_FAIL';

// // custom middleware
// const customLogger = () => {
//   return (next) => {
//     return (action) => {
//       console.log('Action fired', action);
//       next(action);
//     };
//   };
// };

// initial state
const initialState = {
  posts: [],
  error: '',
  loading: false,
};

// actions
const postsFetchRequest = () => {
  return {
    type: POSTS_FETCH_REQUEST,
  };
};

const postsFetchSuccess = (posts) => {
  return {
    type: POSTS_FETCH_SUCCESS,
    payload: posts,
  };
};

const postsFetchFail = (err) => {
  return {
    type: POSTS_FETCH_FAIL,
    payload: err,
  };
};

// action to make the request
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(postsFetchRequest());
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      dispatch(postsFetchSuccess(data));
    } catch (error) {
      dispatch(postsFetchFail(error.message));
    }
  };
};

// reducers
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POSTS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// store
const store = createStore(postsReducer, applyMiddleware(thunk));

// subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
store.dispatch(fetchPosts());
