import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

import TodoList from '../components/List/TodoList'
import NotesList from '../components/Notes/NotesList';

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
  .todo-list {
    display: flex;
    flex-direction: row;
    min-height: 300px;
  }
  .notes-list {
    display: flex;
    flex-direction: row;
    min-height: 300px;
  }
`

const Home = () => {
  const TODOS = useSelector(state => state.todo.todos);
  const ALL_TODOS = TODOS.filter((item) => item.completed === false);
  const ALL_DONE = TODOS.filter((item) => item.completed === true);
  const NOTES = useSelector(state => state.notes.notes);

  return (
    <StyledHome>
      <h2>Home</h2>
      <p>Here are all things that you need to know today.</p>
      <div className="todo-list">
        <TodoList title="TODO" list={ALL_TODOS} />
        <TodoList title="DONE" list={ALL_DONE} />
      </div>
      <div className="notes-list">
        <NotesList title="NOTES" list={NOTES} />
      </div>
    </StyledHome>
  )
}

export default Home;