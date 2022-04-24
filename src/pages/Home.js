import React from 'react';
import styled from "styled-components";

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
`

const Home = () => {
  return (
    <StyledHome>
      <h2>Home</h2>
      <p>Welcome!</p>
    </StyledHome>
  )
}

export default Home;