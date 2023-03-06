import { NOTE_ADD, NOTE_DELETE, NOTE_LIST } from '../constants/noteConstants';

export const addNoteAction = (note) => {
  return {
    type: NOTE_ADD,
    payload: note,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: NOTE_DELETE,
    payload: id,
  };
};

export const fetchNotesAction = () => {
  return {
    type: NOTE_LIST,
  };
};
