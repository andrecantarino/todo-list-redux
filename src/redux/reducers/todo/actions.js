
import {
  ADD_TODO,
  COMPLETE_TODO,
  REMOVE_TODO
} from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});