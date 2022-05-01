import { combineReducers } from 'redux'
import todoReducer from './todo/todoReducer'
import notesReducer from './notes/notesReducer'

export default combineReducers({
  todo: todoReducer,
  notes: notesReducer,
});