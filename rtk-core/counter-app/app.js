const { createAction, nanoid, createReducer } = require('@reduxjs/toolkit');

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

// console.log(incrementBy(20, 'Emma'));

// reducer
// 1. Builder callback notation
createReducer(initialState, (builder) => {
  // increment
  builder.addCase(increment, (state) => {
    state.counter += 1;
  });

  // decrement
  builder.addCase(decrement, (state) => {
    state.counter -= 1;
  });

  // reset
  builder.addCase(reset, (state) => {
    state.counter = 0;
  });

  // increment by
  builder.addCase(incrementBy, (state, action) => {
    state.counter += action.payload.amount;
  });
});

// 2. map object notation

// store
