import { ADD_NOTE } from './actionTypes';

const initialState = {
  notes: []
};

const getId = state =>
  state.notes.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1;

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NOTE:
        return {
          notes: [...state.notes,
            {
              id: getId(state),
              title: action.payload.title,
              note: action.payload.note,
            }
          ]
        }
      default:
        return state;
    }
}

export default notesReducer;