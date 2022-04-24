import React from 'react'
import styled from 'styled-components';
import Menu from '../Menu/Menu'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Page = ({ children }) => {
  return (
    <StyledPage>
      <Menu />
      { children }
    </StyledPage>
  )
}

export default Page;
