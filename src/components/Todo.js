import React from 'react'

const Todo = (props) => {
  const { title } = props;

  return (
    <li>
      {title}
      <input type='checkbox' />
    </li>
  )
}

export default Todo;