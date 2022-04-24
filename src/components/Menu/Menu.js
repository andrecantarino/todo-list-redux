import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    list-style: none;
    padding: 1rem;
  }
  li {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
  a {
    color: #F5CB5C;
    text-decoration: none;
  }
`

const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
      </ul>
    </StyledMenu>
  )
}

export default Menu;
