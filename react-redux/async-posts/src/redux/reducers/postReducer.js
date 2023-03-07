import {
  POST_FETCH_ALL_REQUEST,
  POST_FETCH_ALL_SUCCESS,
  POST_FETCH_ALL_FAIL,
  POST_FETCH_SINGLE_REQUEST,
  POST_FETCH_SINGLE_SUCCESS,
  POST_FETCH_SINGLE_FAIL,
} from '../constants/postConstants';

// initial state
const initialState = {
  loading: false,
  error: '',
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCH_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_FETCH_ALL_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POST_FETCH_ALL_FAIL:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };
    case POST_FETCH_SINGLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        posts: [action.payload],
        loading: false,
      };
    case POST_FETCH_SINGLE_FAIL:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
