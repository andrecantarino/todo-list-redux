import React from 'react'
import Todo from './Todo'

const TodoList = () => {
  return (
    <ul className='todo-list'>
      <Todo title="Todo 1" />
      <Todo title="Todo 2" />
      <Todo title="Todo 3" />
    </ul>
  )
}

export default TodoList;
