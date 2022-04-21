import React from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import styled from "styled-components";

const StyledTodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 5rem 0;

  h2 {
    width: 500px;
    font-size: 2rem;
    color: #F5CB5C;
  }
`

const TodoContainer = () => {
  return (
    <StyledTodoContainer>
      <h2>My TODO list</h2>
      <TodoAdd />
      <TodoList />
    </StyledTodoContainer>
  )
}

export default TodoContainer;