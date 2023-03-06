const { createStore } = require('redux');

// constants
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';

// initial state
const initialState = {
  posts: [],
};

// actions (action creators)
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

// reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

// store
const store = createStore(postReducer);

// subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
// add post action
store.dispatch(addPostAction({ id: 1, title: 'Best Course' }));
store.dispatch(addPostAction({ id: 2, title: 'How to master redux' }));

// remove post
store.dispatch(removePostAction(1));
