import React from 'react'
import styled from 'styled-components';

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ul {
    list-style: none;
    padding: 0;
  }
  li {
    color: #E8EDDF;
    padding-bottom: 0.5rem;
  }
`

const TodoList = ({ title, list }) => {
  return (
    <StyledTodoList>
      <h2>{title}</h2>
      <ul>
        {
          list.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
    </StyledTodoList>
  )
}

export default TodoList;
