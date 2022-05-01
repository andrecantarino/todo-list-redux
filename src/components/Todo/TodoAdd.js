import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/reducers/todo/actions'
import styled from "styled-components";

const StyledTodoAdd = styled.div`
  display: flex;
  padding: 1rem 0;

  input {
    width: 400px;
    height: 32px;
  }
  button {
    width: 100px;
    background-color: #F5CB5C;
    color: #242423;
    border-radius: 0.2rem;
  }
`

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onAddBtnClick();
    }
  }

  const onAddBtnClick = () => {
    if (!todo) return

    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <StyledTodoAdd>
      <input type='text'
        placeholder='Start typing...'
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onAddBtnClick}>Add Todo</button>
    </StyledTodoAdd>
  )
}

export default TodoAdd;