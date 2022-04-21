import React from 'react'
import Todo from './TodoItem'
import { useSelector } from 'react-redux'
import styled from "styled-components";

const StyledTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 500px;
  padding: 2rem 0;

  span {
    color: #E8EDDF;
  }
`

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    <StyledTodoList>
      {
        todos && todos.length > 0
          ? todos.map(todo => <Todo key={todo.id} todo={todo}/>)
          : <span>Empty todo list...</span>
      }
    </StyledTodoList>
  )
}

export default TodoList;
