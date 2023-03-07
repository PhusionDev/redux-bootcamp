const { createAction } = require('@reduxjs/toolkit');

// initial state
const initialState = {
  counter: 0,
};

// action creators
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const resetCounter = createAction('RESET');
const incrementBy = createAction('INCREMENT_BY');

// reducer

// store
