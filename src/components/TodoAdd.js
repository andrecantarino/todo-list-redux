import React, { useState } from 'react';

const TodoAdd = () => {
  const [todo, setTodo] = useState('');
  const onAddBtnClick = () => {
    if (!todo) return

    //add logic later
  };

  return (
    <div>
      <input type='text'
        placeholder='Start typing...'
        value={todo}
        onChange={ e => setTodo(e.target.value) }
      />
      <button onClick={onAddBtnClick}>Add Todo</button>
    </div>
  )
}

export default TodoAdd;