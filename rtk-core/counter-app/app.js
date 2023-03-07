const { createAction, nanoid } = require('@reduxjs/toolkit');

// initial state
const initialState = {
  counter: 0,
};

// action creators
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const resetCounter = createAction('RESET');

// customize createAction
const incrementBy = createAction('INCREMENT_BY', (amount, user) => {
  return {
    payload: {
      amount,
      user,
      id: nanoid(),
    },
  };
});

console.log(incrementBy(20, 'Emma'));
// reducer

// store
