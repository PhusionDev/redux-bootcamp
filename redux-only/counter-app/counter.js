const { createStore } = require('redux');
// steps:

// constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREASE_BY_AMT = 'INCREASE_BY_AMT';

// initial state
const initialState = {
  count: 0,
};

// actions (action, action creator)
// action creator(s)
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};
const increaseByAmtAction = (anyAmount) => {
  return {
    type: INCREASE_BY_AMT,
    payload: anyAmount,
  };
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    case INCREASE_BY_AMT:
      return {
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

// subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch action(s)
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(increaseByAmtAction(15));
