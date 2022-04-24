import React from 'react';
import TodoList from '../components/Todo/TodoList';
import TodoAdd from '../components/Todo/TodoAdd';
import styled from "styled-components";

const StyledTodo= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;

  h2 {
    font-size: 2rem;
    color: #F5CB5C;
  }
`

const Todo = () => {
  return (
    <StyledTodo>
      <h2>TODO</h2>
      <TodoAdd />
      <TodoList />
    </StyledTodo>
  )
}

export default Todo;