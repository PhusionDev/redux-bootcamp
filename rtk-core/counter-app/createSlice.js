const { createSlice, configureStore } = require('@reduxjs/toolkit');

// initialState
const initialState = {
  counter: 0,
};

// create slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
  },
});

// generate actions
const { increment, decrement, reset, incrementBy } = counterSlice.actions;

const counterReducer = counterSlice.reducer;

// store
const store = configureStore({
  reducer: counterReducer,
});

// dispatch
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(increment());
store.dispatch(incrementBy(150));

console.log(store.getState());
