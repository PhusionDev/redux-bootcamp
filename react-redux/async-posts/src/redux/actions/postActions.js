import axios from 'axios';

import apiUrl from '../../utils/apiURL';

import {
  POST_FETCH_ALL_REQUEST,
  POST_FETCH_ALL_SUCCESS,
  POST_FETCH_ALL_FAIL,
  POST_FETCH_SINGLE_REQUEST,
  POST_FETCH_SINGLE_SUCCESS,
  POST_FETCH_SINGLE_FAIL,
} from '../constants/postConstants';

const fetchPostsRequest = () => {
  return {
    type: POST_FETCH_ALL_REQUEST,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: POST_FETCH_ALL_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFail = (error) => {
  return {
    type: POST_FETCH_ALL_FAIL,
    payload: error,
  };
};

const fetchPostRequest = () => {
  return {
    type: POST_FETCH_SINGLE_REQUEST,
  };
};

const fetchPostSuccess = (post) => {
  return {
    type: POST_FETCH_SINGLE_SUCCESS,
    payload: post,
  };
};

const fetchPostFail = (error) => {
  return {
    type: POST_FETCH_SINGLE_FAIL,
    payload: error,
  };
};

export const fetchPostsAction = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const res = await axios.get(apiUrl);
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostsFail(error));
    }
  };
};

export const fetchPostAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const res = await axios.get(`${apiUrl}/${id}`);
      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostFail(error));
    }
  };
};
