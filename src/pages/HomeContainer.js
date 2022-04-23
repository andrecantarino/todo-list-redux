import React from 'react';
import styled from "styled-components";

const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 5rem 0;

  h2 {
    width: 500px;
    font-size: 2rem;
    color: #F5CB5C;
  }
  p {
    width: 500px;
    font-size: 1rem;
    color: #E8EDDF;
  }
`

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <h2>Home</h2>
      <p>Welcome!</p>
    </StyledHomeContainer>
  )
}

export default HomeContainer;