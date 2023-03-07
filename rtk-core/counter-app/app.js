const {
  createAction,
  nanoid,
  createReducer,
  configureStore,
} = require('@reduxjs/toolkit');
const logger = require('redux-logger').createLogger();

// initial state
const initialState = {
  counter: 0,
};

// action creators
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const reset = createAction('RESET');

// customize createAction
const incrementBy = createAction('INCREMENT_BY', (amount) => {
  return {
    payload: {
      amount,
    },
  };
});

// console.log(incrementBy(20, 'Emma'));

// reducer
// 1. Builder callback notation
const counterSlice = createReducer(initialState, (builder) => {
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
const counterSlice2 = createAction(initialState, {
  [increment]: (state) => {
    state.counter += 1;
  },
  [decrement]: (state) => {
    state.counter -= 1;
  },
  [reset]: (state) => {
    state.counter = 0;
  },
  [incrementBy]: (state, action) => {
    state.count += action.payload.amount;
  },
});

// store
const store = configureStore({
  reducer: counterSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// dispatch action
store.dispatch(increment());
store.dispatch(incrementBy(20));
store.dispatch(decrement());

console.log(store.getState());
