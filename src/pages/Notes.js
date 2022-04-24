import React from 'react';
import styled from "styled-components";

const StyledNotes = styled.div`
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
`

const Notes = () => {
  return (
    <StyledNotes>
      <h2>Notes</h2>
      <p>Notes list...</p>
    </StyledNotes>
  )
}

export default Notes;