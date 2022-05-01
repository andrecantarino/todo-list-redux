import { ADD_NOTE } from './actionTypes';

export const addNote = note => ({
  type: ADD_NOTE,
  payload: note
});