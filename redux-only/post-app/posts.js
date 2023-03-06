const { createStore, combineReducers } = require('redux');

// constants
// post constants
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
// user constants
const ADD_USER = 'ADD_USER';

// initial state
const initialState = {
  posts: [],
};

const usersInitialState = {
  users: [],
};

// actions (action creators)
// post actions
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

// user actions
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// reducers
// posts reducer
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

// users reducer
const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// root reducer
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

// store
const store = createStore(rootReducer);

// subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log('posts', data.posts);
  console.log('users', data.users);
});

// dispatch
// add post action
store.dispatch(addPostAction({ id: 1, title: 'Best Course' }));
store.dispatch(addPostAction({ id: 2, title: 'How to master redux' }));

// remove post
store.dispatch(removePostAction(1));

// add new user
store.dispatch(addUserAction({ name: 'John', email: 'john@example.com' }));
