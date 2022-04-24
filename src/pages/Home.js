import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

import TodoList from '../components/List/TodoList'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;

  h2 {
    font-size: 2rem;
    color: #F5CB5C;
  }
  p {
    font-size: 1rem;
    color: #E8EDDF;
  }
  .list {
    display: flex;
    flex-direction: row;
  }
`

const Home = () => {
  const TODOS = useSelector(state => state.todo.todos);
  const ALL_TODOS = TODOS.filter((item) => item.completed === false);
  const ALL_DONE = TODOS.filter((item) => item.completed === true);

  return (
    <StyledHome>
      <h2>Home</h2>
      <p>Here are all things that you need to know today.</p>
      <div className='list'>
        <TodoList title="TODO" list={ALL_TODOS} />
        <TodoList title="DONE" list={ALL_DONE} />
      </div>
    </StyledHome>
  )
}

export default Home;