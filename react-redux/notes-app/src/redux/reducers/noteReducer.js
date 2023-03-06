import { NOTE_LIST, NOTE_ADD, NOTE_DELETE } from '../constants/noteConstants';

// initial state
const initialState = {
  notes: [],
};

// note reducers
// note list reducer
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD:
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };

      // add note into storage
      const updatedNotes = [...state.notes, newNote];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));

      return {
        notes: [...state.notes, newNote],
      };
    case NOTE_DELETE:
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem('notes', JSON.stringify(filteredNotes));
      return {
        notes: filteredNotes || [],
      };
    case NOTE_LIST:
      return {
        notes: JSON.parse(localStorage.getItem('notes')) || [],
      };
    default:
      return state;
  }
};

export default notesReducer;
