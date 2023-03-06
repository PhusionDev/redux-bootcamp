import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notesReducer from '../reducers/noteReducer';

const store = createStore(notesReducer, composeWithDevTools());

export default store;
