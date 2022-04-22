import React from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../redux/reducers/todo/actions'
import styled from "styled-components";

const StyledTodo = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0 0 1rem 0;
  color: #444054;

  .todo-completed {
    color: #E8EDDF;
  }
  input {
    width: 1rem;
    height: 1rem;
  }
  span {
    padding-left: 0.5rem;
    width: 445px;
  }
  button {
    background-color: red;
    color: #fff;
    border: 0;
    border-radius: 0.2rem;
    width: 20px;
    height: 22px;
  }
`

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const dispatch = useDispatch();

  return (
    <StyledTodo>
      <input type='checkbox'
        value={completed}
        onClick={() => dispatch(completeTodo(id))}
      />
      <span className={completed ? 'todo-completed' : ''}>
        {title}
      </span>
      <button onClick={() => {dispatch(removeTodo(id))}}>x</button>
    </StyledTodo>
  )
}

export default TodoItem;