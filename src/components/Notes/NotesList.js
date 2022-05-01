import React from 'react'
import styled from 'styled-components';

const StyledNotesList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    flex-direction: column;
    width: 250px;
    min-width: 100px;
    color: #E8EDDF;
    padding-bottom: 0.5rem;
    border: 1px solid #F5CB5C;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-right: 1rem;
  }
  h3 {
    color: #F5CB5C;
    margin: 0;
  }
`

const NotesList = ({ title, list }) => {
  return (
    <StyledNotesList>
      <h2>{title}</h2>
      <ul>
        {
          list.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <h4>{item.note}</h4>
            </li>)
          )
        }
      </ul>
    </StyledNotesList>
  )
}

export default NotesList;
